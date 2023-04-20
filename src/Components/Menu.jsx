import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu">
      <ul>
        <li className="menu_item">
          <Link to="/">
            <span className="linkButton">Home</span>
          </Link>
        </li>
        <li className="menu_item">
          <Link to="/leagues">
            <span className="linkButton">leagues</span>
          </Link>
        </li>
        <li className="menu_item">
          <Link to="/characters">
            <span className="linkButton">characters</span>
          </Link>
        </li>
        <li className="menu_item">
          <Link to="/stash">
            <span className="linkButton">stash</span>
          </Link>
        </li>
        <li className="menu_item">
          <Link to="/debug">
            <span className="linkButton">debug</span>
          </Link>
        </li>
        {/* <li className="menu_item">
          <button type="button" className="btn">
            {loggedIn ? "Logout" : "Login"}
          </button>
        </li>
        <li>&copy; dragontech developments</li> */}
      </ul>
    </div>
  );
};

export default Menu;
