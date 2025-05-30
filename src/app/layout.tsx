import { ReactNode } from "react";
import ToastContainer from "./components/toast/toastContainer/ToastContainer";
import "./globals.css";
import { AnimatePresence } from "motion/react";

export default function RootLayout({
  children,
  modal,
  params,
}: Readonly<{
  children: ReactNode;
  modal: ReactNode;
  params: {
    modal: string;
  };
}>) {
  console.log(params);
  return (
    <html lang="kr">
      <body>
        <main className="px-5 md:px-10">{children}</main>
        <ToastContainer />
        <div id="modal-root"></div>
        <AnimatePresence>
          {modal}
        </AnimatePresence>
      </body>
    </html>
  );
}
