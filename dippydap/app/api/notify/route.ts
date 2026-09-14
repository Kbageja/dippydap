import { NextResponse } from "next/server";
import { z } from "zod";
import { appendNotifyRow } from "@/lib/googleSheets";

const notifySchema = z.object({
  name: z.string().trim().min(2).max(100),
  phone: z
    .string()
    .trim()
    .min(8)
    .max(15)
    .regex(/^[0-9+\-\s]+$/),
  email: z.string().trim().email().max(150),
  product: z.string().trim().min(2).max(80),
});

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const parsed = notifySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid input", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  try {
    await appendNotifyRow(parsed.data);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Failed to append notify row:", err);
    return NextResponse.json(
      { error: "Could not save your details right now. Please try again shortly." },
      { status: 502 },
    );
  }
}
