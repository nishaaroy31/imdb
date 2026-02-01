import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "IMDb Clone",
  description: "This is the IMDb clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </head>

      <body>
        {/* Header */}
        <Header />

        {/* Navbar */}
        {/* SearchBox */}

        {children}
      </body>
    </html>
  );
}
