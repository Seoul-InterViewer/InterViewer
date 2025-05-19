import BreadCrumb from "./components/bread-crumb/BreadCrumb";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body>
        <BreadCrumb autoGenerate={true} items={[]} />
        {children}
      </body>
    </html>
  );
}
