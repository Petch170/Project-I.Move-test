import React, { useState } from "react";
import CardFeed from "./CardFeed";
import ActivityPage from "./ActivityPage";
import NavHead from "./NavHead";
import Sidebar from "./Sidebar";
import { mockUserData } from "./mockData";

export default function UserHomePage() {
  const [active, setActive] = useState("home");
  let section;
  if (active === "home") {
    section = <CardFeed />;
  } else if (active === "activity") {
    section = <ActivityPage />;
  }
  return (
    <div className="grid grid-cols-12">
      <NavHead />
      <Sidebar active={active} setActive={setActive} userData={mockUserData} />
      {section}
    </div>
  );
}
