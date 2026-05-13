import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Omoha Agent Ops | Focused AI Agents for Business Workflows",
  description:
    "Omoha Solutions builds and manages focused AI agents for lead follow-up, client intake, proposal drafting, support triage, research, and repetitive admin work.",
  keywords: [
    "AI agents",
    "agent operations",
    "workflow automation",
    "AI as a service",
    "Omoha Solutions",
    "agent ops",
  ],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Omoha Agent Ops | Focused AI Agents for Business Workflows",
    description:
      "AI agents that reduce operational chaos for small teams. Lead follow-up, intake, proposals, support triage, research, and admin workflows.",
    url: "https://agents.omohasolutions.com",
    siteName: "Omoha Solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Omoha Agent Ops | Focused AI Agents for Business Workflows",
    description:
      "AI agents that reduce operational chaos for small teams.",
  },
  metadataBase: new URL("https://agents.omohasolutions.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        {children}
      </body>
    </html>
  );
}
