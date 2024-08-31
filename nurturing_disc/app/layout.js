import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import AOSComponent from "@/components/AOS/AOS";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Nurturing Discoveries",
    template: "%s - Nurturing Discoveries",
  },
  description: "Discover and Nurture the ability",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Navbar />
        <AOSComponent>{children}</AOSComponent>
      </body>
    </html>
  );
}
