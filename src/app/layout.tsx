import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dotto - Empowering Your Data Journey",
  description: "dotto is your trusted partner for advanced data solutions, from nano to big data. We help you monitor, analyze, and optimize your resources for a sustainable future.",
  keywords: ["dotto", "data", "analytics", "monitoring", "IoT", "big data"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
