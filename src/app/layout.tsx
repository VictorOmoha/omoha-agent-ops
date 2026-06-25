import type { Metadata } from "next";
import { Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const hanken = Hanken_Grotesk({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Omoha Agent Ops | Focused AI Agents for Business Workflows",
  description:
    "Omoha Solutions builds focused AI agents that turn messy lead follow-up, intake, proposal, support, research, and admin workflows into owned systems.",
  keywords: [
    "AI agents",
    "agent operations",
    "workflow automation",
    "AI as a service",
    "Omoha Solutions",
    "agent ops",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png", type: "image/png", sizes: "64x64" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Omoha Agent Ops | Agents That Turn Messy Workflows Into Owned Systems",
    description:
      "Focused AI agents for lead follow-up, client intake, proposals, support triage, research, and repetitive admin work.",
    url: "https://agents.omohasolutions.com",
    siteName: "Omoha Agent Ops",
    type: "website",
    images: [
      {
        url: "/agent-og.png",
        width: 1200,
        height: 630,
        alt: "Omoha Agent Ops - focused AI agents for messy business workflows",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Omoha Agent Ops | Focused AI Agents",
    description: "Agents that turn messy workflows into owned systems.",
    images: ["/agent-og.png"],
  },
  alternates: {
    canonical: "https://agents.omohasolutions.com",
  },
  metadataBase: new URL("https://agents.omohasolutions.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${hanken.variable} ${jetbrainsMono.variable} h-full antialiased`}>
      <body>{children}</body>
    </html>
  );
}
