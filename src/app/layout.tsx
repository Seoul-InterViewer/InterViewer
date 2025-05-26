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
        <main className="px-5 md:px-10">{children}</main>
        <ToastContainer />
      </body>
    </html>
  );
}
