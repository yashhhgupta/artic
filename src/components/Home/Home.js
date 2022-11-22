import React from "react";
import Gallery from "../Gallery/Galllery";
import Wallpaper from "../utils/Wallpaper";
import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <div className={styles.homeContainer}>
        <div className={styles.home}>
          <div className={styles.header}>
            <h1>
              Take Art to
              <span style={{ color: `rgba(231, 84, 128, 1)` }}> Heart </span>
            </h1>
            <h2>
              Unleash your inner Artist Now, by being part of the community
            </h2>
            <h3>
              "Don't think about making art, just get it done."
            </h3>
          </div>
          <Wallpaper />
        </div>
        <div className={styles.extra}>
          <Gallery />
        </div>
      </div>
    </>
  );
}

export default Home;
