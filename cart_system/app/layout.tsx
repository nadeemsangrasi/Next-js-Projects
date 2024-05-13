"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import store from "@/Store/store";
import { Provider } from "react-redux";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>SwiftCart Ecomercline</title>
      </head>
      <body className={`${inter.className} relative`}>
        <script src="https://cdn.lordicon.com/lordicon.js"></script>
        <div className="absolute  -z-10 min-h-[100vh] size-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
