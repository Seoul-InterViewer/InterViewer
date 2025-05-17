import { ViewportInitializer } from "./components/viewportInitializer/ViewportInitializer";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body>
        <ViewportInitializer />
        {children}
      </body>
    </html>
  );
}
