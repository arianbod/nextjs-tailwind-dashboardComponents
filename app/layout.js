import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-full bg-pLightGrey text-primary font-poppins grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 p-4">
          {children}
        </div>
      </body>
    </html>
  );
}
