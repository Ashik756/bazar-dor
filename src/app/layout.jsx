import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar/Navbar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bazar Dor",
  description: "আজকের বাজারের দাম এক নজরে",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="bn"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <nav>
          <Navbar></Navbar>
        </nav>
        <main>
          {children}
        </main>
        <footer>

        </footer>
      </body>
    </html>
  );
}
