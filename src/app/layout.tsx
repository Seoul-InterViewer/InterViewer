import ToastContainer from "./components/toast/toastContainer/ToastContainer";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body>
        {children}
        <ToastContainer />
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
