import type { Metadata } from "next";
import "./globals.css";
import { Roboto, Poppins, Lato } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Quest Waste Solutions - Eco-Friendly Dumpster Rental Services",
  description: "Quest Waste Solutions provides affordable, eco-friendly dumpster rental services for residential & commercial needs. Fast, reliable, hassle-free—call today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${poppins.variable} ${lato.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
