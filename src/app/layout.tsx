import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Vikas Manral — Full-Stack / Software Developer",
  description:
    "Portfolio of Vikas Manral — Electronics & Communication Engineering graduate building responsive, full-stack web applications with React, Next.js, Node.js, Express.js, MongoDB, REST APIs, and Gemini AI integrations.",
  keywords: [
    "Vikas Manral",
    "Full-Stack Developer",
    "Software Developer",
    "Frontend Developer",
    "Backend Developer",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "Tailwind CSS",
    "MongoDB",
    "REST APIs",
    "Java",
    "DSA",
  ],
  authors: [{ name: "Vikas Manral" }],
  creator: "Vikas Manral",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vikasmanral.dev",
    title: "Vikas Manral — Full-Stack / Software Developer",
    description:
      "Portfolio of Vikas Manral — Electronics & Communication Engineering graduate building responsive, full-stack web applications with React, Next.js, Node.js, Express.js, databases, and AI integrations.",
    siteName: "Vikas Manral Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vikas Manral — Full-Stack / Software Developer",
    description: "Portfolio of Vikas Manral — Full-Stack & Software Developer.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-sky-500/20 selection:text-sky-200 antialiased flex flex-col">
        {children}
      </body>
    </html>
  );
}
