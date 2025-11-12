import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Sotab Continental Limited",
  description:
    "A Nigerian-based real estate and energy solutions company redefining development through innovation, sustainability, and community driven impact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Additional meta tags if needed */}
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="ahrefs-site-verification"
          content="c1ec4ef60bda707abaa1bd1fcab702e10b63649c9c9f05059c249889705576a8"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gailymaids.com/" />
        {/* <meta name="twitter:site" content="@your_twitter_handle" /> */}
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
