import React from "react";

const Menu = () => {
  return (
    <div className="menu">
      <ul>
        <li className="menu_item">
          <a href="#" className="link">
            Home
          </a>
        </li>
        <li className="menu_item">
          <a href="#" className="link">
            Leagues
          </a>
        </li>
        <li className="menu_item">
          <a href="#" className="link">
            Characters
          </a>
        </li>
        <li className="menu_item">
          <a href="#" className="link">
            Stash
          </a>
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
