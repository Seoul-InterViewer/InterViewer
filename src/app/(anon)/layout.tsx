import React from "react";
import { Header } from "../components/header/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header isLoggedIn={false} />
      <div className="pt-20">{children}</div>
    </>
  );
}
