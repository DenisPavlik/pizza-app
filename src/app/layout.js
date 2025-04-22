import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Providers from "./providers"; //

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
  title: "Geronimo's pizza",
  description: "The most delicious pizza in the world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={roboto.className}>
        <Providers>
          <main className="container max-w-6xl mx-auto p-4">
            <Header />
            <div className="min-h-[70vh]">{children}</div>
            <footer className="border-t p-8 text-center text-gray-500 mt-16">
              &copy; 2025 All rights reserved
            </footer>
          </main>
        </Providers>
      </body>
    </html>
  );
}
