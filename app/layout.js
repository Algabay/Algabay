import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header";
import WidgetTop from "@/Components/WidgetTop";
import NewsSection from "@/Components/NewsSection";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <WidgetTop />

        {children}
      </body>
    </html>
  );
}
