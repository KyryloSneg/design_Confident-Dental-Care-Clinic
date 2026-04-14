import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans, Geist } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/utils/shadcn";
import Providers from "@/components/Providers";
import jsonLd from "@/utils/jsonLd";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  weight: ["600", "700"],
  subsets: ["latin"],
});

const sourceSerif = localFont({
  src: [
    {
      path: "../public/fonts/SourceSerifPro-Semibold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-source-serif",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  weight: ["300", "400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Confident | Dental Care Clinic",
  description:
    "High-quality, painless dental care. We offer general dentistry, cavity treatment, and dental bridges to keep your smile healthy and confident.",
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        plusJakartaSans.variable,
        sourceSerif.variable,
        dmSans.variable,
        "font-sans",
        geist.variable,
      )}
    >
      <body className="@container flex min-h-full flex-col">
        <Providers>{children}</Providers>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
