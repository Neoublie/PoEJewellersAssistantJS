import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu">
      <ul>
        <li className="menu_item">
          <Link to="/">Home</Link>
        </li>
        <li className="menu_item">
          <Link to="/leagues">leagues</Link>
        </li>
        <li className="menu_item">
          <Link to="/characters">characters</Link>
        </li>
        <li className="menu_item">
          <Link to="/stash">stash</Link>
        </li>
        <li className="menu_item">
          <button type="button" className="btn">
            {/* {loggedIn ? "Logout" : "Login"} */}
          </button>
        </li>
        <li>&copy; dragontech developments</li>
      </ul>
    </div>
  );
};

export default Menu;
