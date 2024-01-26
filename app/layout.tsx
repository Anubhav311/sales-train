import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SideMenu from "@/components/SideMenu";
import { cn } from "@/lib/utils";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sales Train",
  description: "Technical sales training",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(inter.className, "antialiased min-h-screen pt-16")}
        style={{ display: "flex" }}
      >
        <Providers>
          <Navbar />
          {/* <SideMenu /> */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
