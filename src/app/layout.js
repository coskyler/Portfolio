import "./globals.css";
import { Poppins } from "next/font/google";
import { Analytics } from '@vercel/analytics/next';

export const metadata = {
  title: "Skyler Quinby",
  description: "My portfolio website",
};

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-black text-white ${poppins.className}`}>{children}</body>
      <Analytics />
    </html>
  );
}