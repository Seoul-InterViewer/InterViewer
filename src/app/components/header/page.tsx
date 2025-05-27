import React from "react";

import { Header } from "./Header";

export default function HeaderPage() {
  return (
    <div className="w-full h-[2000px]">
      {/* isLoggedin props를 받아서 처리할 수 있음 */}
      <Header isLoggedIn={true} />
    </div>
  );
}
