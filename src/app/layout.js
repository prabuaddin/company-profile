import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "~/components/cores/navbar";
import Footer from "~/components/cores/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Code Challenge - Front End",
  description: "Home Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" type="image/svg+xml+png" href="https://img.ws.mms.shopee.co.id/2133c42cdb3371fa1237595e7d49dc75" />
      </head>
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
