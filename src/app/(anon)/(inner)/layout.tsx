import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <section className="w-full md:w-pc mx-auto">{children}</section>;
}
