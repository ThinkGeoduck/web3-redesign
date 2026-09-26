import type { Metadata, Viewport } from "next";
import { Big_Shoulders, Mona_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const display = Big_Shoulders({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-big-shoulders",
  adjustFontFallback: false,
  display: "swap",
});

const sans = Mona_Sans({
  subsets: ["latin", "latin-ext"],
  axes: ["wdth"],
  variable: "--font-mona",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://web3carnival.world"),
  title: {
    default: "Web3 Carnival · A festival of Web3 events",
    template: "%s · Web3 Carnival",
  },
  description:
    "Web3 Carnival is a festival series for founders, builders, developers, investors and creators: seven themed Cons, Demo Night, awards and daily side events.",
  openGraph: {
    title: "Web3 Carnival",
    description: "Step right up. A festival of Web3 events across Bengaluru, Dubai, Singapore and Delhi.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#1f1b2e",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <Providers>
          <SiteHeader />
          <main id="main">{children}</main>
          <SiteFooter />
        </Providers>
      </body>
    </html>
  );
}
