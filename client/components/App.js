import React from "react";
import Nav from "./Nav";
import Footer from "./footer";

export default ({ children }) => {
  // we are just following the convention of Materialize css to use a root class of container
  {
    /* If React Router decides to show the index route of SongList, SongList will be passed to the App component as children, and will show that component as a child */
  }
  return (
    <div>
      <div className="flex-site-wrapper">
        <div className="page-container">
          <div className="container">
            <Nav />
            {children}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
