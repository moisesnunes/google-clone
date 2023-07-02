import "./globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Google Clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="google.svg" />
      </Head>
      <body className={inter.className}>
        {children} <Footer />{" "}
      </body>
    </html>
  );
}
