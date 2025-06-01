import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="w-full mt-25 md:w-pc mx-auto">{children}</div>;
}
