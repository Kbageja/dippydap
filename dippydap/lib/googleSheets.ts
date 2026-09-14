import { google } from "googleapis";
import { createPrivateKey } from "crypto";

export type NotifyRow = {
  name: string;
  phone: string;
  email: string;
  product: string;
};

function getAuth() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const rawKey = process.env.GOOGLE_PRIVATE_KEY;

  if (!email || !rawKey) {
    throw new Error(
      "Missing GOOGLE_SERVICE_ACCOUNT_EMAIL or GOOGLE_PRIVATE_KEY env vars.",
    );
  }

  // Normalize the private key regardless of how it was stored in the env:
  //  - Quoted with literal \n sequences (e.g. Vercel / .env.local with quotes)
  //  - Already containing real newlines
  // We strip surrounding quotes first, then unescape all literal \n variants.
  let pem = rawKey
    .replace(/^["']|["']$/g, "") // strip wrapping quotes if any
    .replace(/\\n/g, "\n");      // convert literal \n → real newline

  // Node 22 / OpenSSL 3 requires the key to be passed as a KeyObject when
  // using PKCS8 format. Parsing it here surfaces any format errors early and
  // produces a format that Node's crypto layer accepts.
  const keyObject = createPrivateKey({ key: pem, format: "pem" });
  // Export back to PEM so google-auth-library can consume it as a string.
  const privateKey = keyObject.export({ type: "pkcs8", format: "pem" }) as string;

  return new google.auth.JWT({
    email,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

export async function appendNotifyRow(row: NotifyRow) {
  const sheetId = process.env.GOOGLE_SHEET_ID;
  if (!sheetId) {
    throw new Error("Missing GOOGLE_SHEET_ID env var.");
  }

  const auth = getAuth();
  const sheets = google.sheets({ version: "v4", auth });

  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range: "Sheet1!A:E",
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [
        [
          new Date().toISOString(),
          row.name,
          row.phone,
          row.email,
          row.product,
        ],
      ],
    },
  });
}
