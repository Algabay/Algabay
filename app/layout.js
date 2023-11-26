import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header";
import WidgetTop from "@/Components/WidgetTop";
import Footer from "@/Components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Algabay AI | Finance and Equity Research Platform",
  description: "Simplified Investment With Algabay",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="absolute w-full mt-14">
          <WidgetTop />
        </div>

        {children}
      </body>
    </html>
  );
}
