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
  title: "Omoha Agent Ops | AI Agent Setup & Operations as a Service",
  description:
    "We set up, run, and optimize AI agents for your business. Automated workflows that work 24/7, built and maintained by Omoha Solutions.",
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
    title: "Omoha Agent Ops | AI Agent Operations as a Service",
    description:
      "We set up, run, and optimize AI agents for your business. Automated workflows that work 24/7.",
    url: "https://omoha-agent-ops.onrender.com",
    siteName: "Omoha Solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Omoha Agent Ops | AI Agent Operations as a Service",
    description:
      "We set up, run, and optimize AI agents for your business. Automated workflows that work 24/7.",
  },
  metadataBase: new URL("https://omoha-agent-ops.onrender.com"),
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
