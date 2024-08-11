import React from "react";

function Nav() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Data</a>
          </li>
          <li>
            <a className="active" href="V">
              About
            </a>
          </li>
          <li>
            <a id="forumNav" href="#">
              Forum
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
