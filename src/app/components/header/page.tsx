import React from "react";
import Header from "./Header";

export default function HeaderPage() {
  return (
    <div>
      {/* isLoggedin props를 받아서 처리할 수 있음 */}
      <Header isLoggedIn={true} />
    </div>
  );
}
