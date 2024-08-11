import React from "react";

function Nav() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="https://march-madness-game-predictor-72494844c114.herokuapp.com/index.html">
              Home
            </a>
          </li>
          <li>
            <a href="https://march-madness-game-predictor-72494844c114.herokuapp.com/data.html">
              Data
            </a>
          </li>
          <li>
            <a
              className="active"
              href="https://march-madness-game-predictor-72494844c114.herokuapp.com/about.html"
            >
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
