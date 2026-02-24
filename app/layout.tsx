import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Cesar Claros",
  description: "Welconme to my portfolio! I'm a software engineer with a passion for building web applications. Here you can find my projects and contact information.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.className} scroll-smooth!`}>
      <body
        className={`antialiased bg-gray-100`}
      >
        {children}
      </body>
    </html>
  );
}
