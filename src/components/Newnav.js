import React, { useState } from "react";
import "./Newnav.css";
function Navbar() {
  const [menu, setmenu] = useState("Home");
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src="./assets/logo.png" className="logo"/>
      </div>
      <ul>
        <li onClick={() => setmenu("Home")}>
          Home{menu === "Home" ? <hr /> : <></>}
        </li>
        <li onClick={() => setmenu("Shop")}>
          Shop{menu === "Shop" ? <hr /> : <></>}
        </li>
        <li onClick={() => setmenu("About")}>
          About{menu === "About" ? <hr /> : <></>}
        </li>
        <li onClick={() => setmenu("Contect")}>
          Contect{menu === "Contect" ? <hr /> : <></>}
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
