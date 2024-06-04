"use client";

import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

const getTitle = (path) => {
  switch (path) {
    case "/":
      return "Home - Portofolio";
    case "/services":
      return "Services - Portofolio";
    case "/resume":
      return "Resume - Portofolio";
    case "/project":
      return "Projects - Portofolio";
    case "/contact":
      return "Contact - Portofolio";
    default:
      return "404 Not Found";
  }
};

export default function RootLayout({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    document.title = getTitle(pathname);
  }, [pathname]);

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
