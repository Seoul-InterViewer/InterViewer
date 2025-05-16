import BreadCrumb from "./components/breadCrumb/BreadCrumb";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body>
        <BreadCrumb autoGenerate items={[]} />
        {children}
      </body>
    </html>
  );
}
