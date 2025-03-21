import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Header/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
