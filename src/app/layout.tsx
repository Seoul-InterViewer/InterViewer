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
        {/* isLoggedin props를 받아서 처리할 수 있음 */}
        <Header isLoggedIn={true} />
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
