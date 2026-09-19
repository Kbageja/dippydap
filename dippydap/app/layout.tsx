import type { Metadata } from "next";
import "@fontsource/fredoka/500.css";
import "@fontsource/fredoka/600.css";
import "@fontsource/fredoka/700.css";
import "@fontsource/work-sans/400.css";
import "@fontsource/work-sans/500.css";
import "@fontsource/work-sans/600.css";
import "./globals.css";
import { products } from "@/lib/products";

const siteUrl = "https://dippydap.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "DippyDap — High Protein Dips",
    template: "%s | DippyDap",
  },
  description:
    "DippyDap makes high-protein dips from cottage cheese, yogurt, and chickpeas — Italian Cheesy, Indian Masala, and Sweet Chilli & Honey. Sign up to be notified at launch.",
  keywords: [
    "high protein dip",
    "healthy dip",
    "yogurt dip",
    "cottage cheese dip",
    "vegan chickpea dip",
    "DippyDap",
  ],
  openGraph: {
    title: "DippyDap — High Protein Dips",
    description:
      "Cottage cheese, yogurt, and chickpea based high-protein dips. Italian Cheesy, Indian Masala, Sweet Chilli & Honey.",
    url: siteUrl,
    siteName: "DippyDap",
    images: [{ url: "/images/logo.png", width: 1200, height: 630, alt: "DippyDap logo" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DippyDap — High Protein Dips",
    description:
      "Cottage cheese, yogurt, and chickpea based high-protein dips, launching soon.",
    images: ["/images/logo.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "DippyDap",
        url: siteUrl,
        logo: `${siteUrl}/images/logo.png`,
      },
      ...products.map((p) => ({
        "@type": "Product",
        name: `DippyDap ${p.name}`,
        image: `${siteUrl}${p.image}`,
        description: p.description,
        brand: { "@type": "Brand", name: "DippyDap" },
        offers: {
          "@type": "Offer",
          priceCurrency: "INR",
          price: p.price.estimate.match(/[\d.]+/)?.[0] || "0",
          availability: "https://schema.org/PreOrder",
        },
      })),
    ],
  };

  return (
    <html lang="en">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
