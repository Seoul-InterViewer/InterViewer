import ToastContainer from "./components/toast/toastContainer/ToastContainer";
import "./globals.css";
import Header from "./components/header/Header";
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
      </body>
    </html>
  );
}
