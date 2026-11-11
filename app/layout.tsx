import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "SnapStack — Tested AI Workflows & Tool Stacks in a Snap",
  description:
    "Browse 100% free, production-tested AI workflows, system prompts, and tool stacks with zero-lag video demos.",
  keywords: ["AI workflows", "AI tools", "Prompts", "Automation", "Free AI tools", "Make.com", "n8n", "Claude 3.7"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased min-h-screen flex flex-col bg-[#010102] text-[#f7f8f8] selection:bg-brand-lavender selection:text-white">
        <Navbar />
        <div className="flex-1 w-full pt-16">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
