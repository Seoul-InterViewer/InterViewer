import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white border-b z-50 h-[64px]">
        <div className="flex items-center justify-between p-4">
          <h1 className="text-xl font-bold">Test Header</h1>
          <nav className="flex gap-4">
            <button className="text-gray-600 hover:text-gray-900">Menu 1</button>
            <button className="text-gray-600 hover:text-gray-900">Menu 2</button>
            <button className="text-gray-600 hover:text-gray-900">Menu 3</button>
          </nav>
        </div>
      </header>
      <div className="mt-[144px]">{children}</div>
    </>
  );
}
