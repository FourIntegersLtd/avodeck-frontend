import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Avodeck - Find Your Practice Partner",
  description: "Match with doctors preparing for the same exam. Practice together and get exam-ready with Avodeck.",
  icons: {
    icon: [
      { url: "/images/avodeck-icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/avodeck-icon-64.png", sizes: "64x64", type: "image/png" },
    ],
    shortcut: "/images/avodeck-icon-32.png",
    apple: "/images/avodeck-icon-128.png",
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
        className={`${inter.variable} ${plusJakartaSans.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
