import React from "react";

import logo from "../../assets/img/Git-Logo-Black.png";
import "./Logo.css";

export default (props) => (
  <aside className="logo">
    <a href="/" className="logo">
      <img src={logo} alt="Logo" />
    </a>
  </aside>
);
