import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Carlos Martinez | Full-Stack Developer",
  description:
    "Full-stack developer & freelance software engineer. I build custom web applications, mobile apps, and AI-powered solutions.",
  keywords: [
    "Carlos Martinez",
    "Full-Stack Developer",
    "Freelance",
    "Software Engineer",
    "React",
    "Next.js",
    "Custom Software",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-[#fafafa] text-zinc-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
