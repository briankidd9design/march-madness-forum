import React from "react";

function Footer() {
  return (
    <footer>
      Brian Kidd | All Rights Reserved | &copy;
      {new Date().getFullYear()}|{" "}
      <a
        id="footerWebsiteLink"
        href="https://briankiddmedia.com"
        target="_blank"
      >
        briankiddmedia.com{" "}
      </a>{" "}
      | Contact: theholisticprogrammer@gmail.com
    </footer>
  );
}
export default Footer;
