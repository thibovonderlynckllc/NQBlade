import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

export const metadata: Metadata = {
  title: "NQBlade | The Best Automated Trading Bot for NQ Futures",
  description: "NQBlade is the best automated trading bot for NQ Futures. It is a fully automated trading bot that trades the NQ Futures contract.",
  keywords: ["NQBlade", "NQ Futures", "Automated Trading Bot", "Automated Trading", "Trading Bot", "Trading", "Futures", "Forex", "Stock Market", "Stock Market Trading", "Stock Market Trading Bot", "Stock Market Trading Software", "Stock Market Trading Platform", "Stock Market Trading Software", "Stock Market Trading Platform", "Stock Market Trading Software", "Stock Market Trading Platform"],
  authors: [{ name: "NQBlade", url: "https://nqblade.com" }],
  creator: "NQBlade",
  publisher: "NQBlade",
  openGraph: {
    title: "NQBlade - The Best Automated Trading Bot for NQ Futures",
    description: "NQBlade is the best automated trading bot for NQ Futures. It is a fully automated trading bot that trades the NQ Futures contract.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased`}
      >
        {children}
        {/* Netlify Identity Widget for Decap CMS */}
        <Script
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
          strategy="afterInteractive"
        />
        <Script
          id="netlify-identity-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if (window.netlifyIdentity) {
                window.netlifyIdentity.on("init", user => {
                  if (!user) {
                    window.netlifyIdentity.on("login", () => {
                      document.location.href = "/admin/";
                    });
                  }
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
