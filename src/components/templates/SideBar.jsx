import React from "react";
import AvaterParts from "../parts/Avater";

const SideBar = () => {
  return (
    <div>
      <AvaterParts src="src/assets/common/logo.png" />
      <ul>
        <li>About</li>
        <li>Book List</li>
        <li>Request</li>
        <li>Review</li>
      </ul>
      <AvaterParts src="src/assets/common/profile2.jpg" />
    </div>
  );
};

export default SideBar;
