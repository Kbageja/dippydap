"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const notifySchema = z.object({
  name: z.string().trim().min(2, "Enter your full name"),
  phone: z
    .string()
    .trim()
    .min(8, "Enter a valid phone number")
    .max(15, "Enter a valid phone number")
    .regex(/^[0-9+\-\s]+$/, "Digits only, please"),
  email: z.string().trim().email("Enter a valid email"),
});

type NotifyFormValues = z.infer<typeof notifySchema>;

type NotifyModalProps = {
  productName: string | null;
  onClose: () => void;
};

export function NotifyModal({ productName, onClose }: NotifyModalProps) {
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (productName) {
      document.addEventListener("keydown", onKeyDown);
      return () => document.removeEventListener("keydown", onKeyDown);
    }
  }, [productName, onClose]);

  if (!productName) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/40 px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="notify-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* key forces a fresh form + status state each time a different product is opened */}
      <NotifyModalContent key={productName} productName={productName} onClose={onClose} />
    </div>
  );
}

function NotifyModalContent({
  productName,
  onClose,
}: {
  productName: string;
  onClose: () => void;
}) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NotifyFormValues>({
    resolver: zodResolver(notifySchema),
  });

  async function onSubmit(values: NotifyFormValues) {
    setStatus("loading");
    try {
      const res = await fetch("/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, product: productName }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="w-full max-w-md rounded-3xl bg-paper p-6 shadow-xl sm:p-8">
      {status === "success" ? (
          <div className="text-center">
            <h3 className="font-display text-xl font-semibold text-forest">
              You&apos;re on the list
            </h3>
            <p className="mt-2 text-sm text-ink/70">
              We&apos;ll email you the moment {productName} is ready to ship.
            </p>
            <button
              onClick={onClose}
              className="mt-6 rounded-full bg-forest px-6 py-2 text-sm font-medium text-paper hover:bg-forest-dark"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h3
              id="notify-modal-title"
              className="font-display text-xl font-semibold text-forest"
            >
              Get notified — {productName}
            </h3>
            <p className="mt-1 text-sm text-ink/70">
              Leave your details and we&apos;ll let you know the moment it launches.
            </p>
            <form className="mt-5 space-y-4" onSubmit={handleSubmit(onSubmit)} noValidate>
              <div>
                <label htmlFor="name" className="mb-1 block text-sm font-medium text-ink">
                  Full name
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full rounded-2xl border border-forest-tint bg-paper px-4 py-2.5 text-sm outline-none focus:border-forest"
                  {...register("name")}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-clay-dark">{errors.name.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="phone" className="mb-1 block text-sm font-medium text-ink">
                  Phone number
                </label>
                <input
                  id="phone"
                  type="tel"
                  className="w-full rounded-2xl border border-forest-tint bg-paper px-4 py-2.5 text-sm outline-none focus:border-forest"
                  {...register("phone")}
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-clay-dark">{errors.phone.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium text-ink">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full rounded-2xl border border-forest-tint bg-paper px-4 py-2.5 text-sm outline-none focus:border-forest"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-clay-dark">{errors.email.message}</p>
                )}
              </div>

              {status === "error" && (
                <p className="text-sm text-clay-dark">
                  Something went wrong — please try again in a moment.
                </p>
              )}

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 rounded-full border border-forest-tint px-5 py-2.5 text-sm font-medium text-ink hover:bg-forest-tint"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="flex-1 rounded-full bg-clay px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-clay-dark disabled:opacity-60"
                >
                  {status === "loading" ? "Sending…" : "Notify me"}
                </button>
              </div>
            </form>
          </>
        )}
    </div>
  );
}
