import React from "react";

import "./SidebarOptions.css";

function SidebarOption({ Icon, title, link }) {
  // console.log(window.location.pathname.includes(link))
  return (
    <div className="SidebarOption">
      <Icon />

      <h3 >{title}</h3>
    </div>
  );
}

export default SidebarOption;
