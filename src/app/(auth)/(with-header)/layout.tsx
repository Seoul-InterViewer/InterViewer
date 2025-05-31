import { Header } from "@/app/components/header";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header isLoggedIn={true} />
      <div className="pt-45">{children}</div>
    </>
  );
}
