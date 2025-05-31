"use client";

import React, { ReactNode } from "react";
import ToastContainer from "./components/toast/toastContainer/ToastContainer";
import "./globals.css";

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: ReactNode;
  modal: ReactNode;
}>) {
  return (
    <html lang="kr">
      <body className="bg-black/76">
        <main className="min-h-screen px-5 md:px-10 bg-white">{children}</main>
        <ToastContainer />
        <div id="modal-root"></div>
        {modal}
      </body>
    </html>
  );
}
