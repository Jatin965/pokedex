import type { Metadata } from "next";

import Providers from "@/components/providers/TRPCProviders";
import { Inter } from "next/font/google";
import "./globals.css";
import AppAppBar from "@/components/nav/AppAppBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pokedex",
  description: "Pokedex task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className}>
          <AppAppBar />
          {children}
        </body>
      </Providers>
    </html>
  );
}
