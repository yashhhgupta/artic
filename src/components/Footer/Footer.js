import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.contain}>
        <div className={classes.containnn}>
          <div className={classes.topfoot}>Copyright © 2022 Artic</div>
        </div>

        <div className={classes.bottomfoot}>
          <i
            className={[
              classes.commoncss,
              "fa-brands fa-instagram",
            ].join(" ")}
          ></i>
          <i
            className={[
              classes.commoncss,
              "fa-brands fa-twitter",
            ].join(" ")}
          ></i>
          <i
            className={[classes.commoncss, "fa-brands fa-facebook"].join(" ")}
          ></i>
          <i
            className={[classes.commoncss, "fa-brands fa-github"].join(" ")}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;