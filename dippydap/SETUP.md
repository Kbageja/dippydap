# DippyDap — Setup

## 1. Run locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## 2. Connect Google Sheets (Notify form)

The "Notify me" form posts to `/api/notify`, a Next.js API route that appends
a row to a Google Sheet using a service account. No separate backend server
is needed — this route runs as a serverless function wherever you deploy
(e.g. Vercel).

### Steps

1. **Create a Google Sheet.** Add a header row: `Timestamp | Name | Phone | Email | Product`.
   Copy the Sheet ID from its URL:
   `https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit`

2. **Create a Google Cloud project** (or reuse one) at
   https://console.cloud.google.com

3. **Enable the Google Sheets API** for that project
   (APIs & Services → Library → "Google Sheets API" → Enable).

4. **Create a Service Account**
   (APIs & Services → Credentials → Create Credentials → Service Account).
   Give it any name (e.g. `dippydap-sheets-writer`). No project role needed.

5. **Generate a JSON key** for the service account
   (open the service account → Keys → Add Key → Create new key → JSON).
   Open the downloaded file — you need the `client_email` and `private_key`
   fields.

6. **Share the Google Sheet** with the service account's `client_email`
   address, giving it **Editor** access (same as sharing with a person).

7. **Set environment variables.** Copy `.env.local.example` to `.env.local`
   and fill in:
   - `GOOGLE_SERVICE_ACCOUNT_EMAIL` — the `client_email` from the JSON key
   - `GOOGLE_PRIVATE_KEY` — the `private_key` from the JSON key, kept in
     quotes with `\n` line breaks exactly as it appears in the JSON file
   - `GOOGLE_SHEET_ID` — the Sheet ID from step 1

8. **Restart the dev server** (or redeploy) after adding env vars.

### Deploying

On Vercel: add the same three variables under
Project → Settings → Environment Variables, then deploy. No other
infrastructure is required — the `/api/notify` route runs automatically as a
serverless function alongside the rest of the app.

## 3. Swapping in real product photography

Illustrations live in `components/illustrations/DipBowl.tsx` and are used
in the hero collage and each product row. To swap in real photos, replace
the `<DipBowl />` usages with `next/image` components pointing at images in
`public/images/`.
