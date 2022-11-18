import React from "react";
import Wallpaper from "../utils/Wallpaper";
import styles from "./Home.module.css";

function Home() {

  return (
    <>
      <div className={styles.home}>
        <div className={styles.header}>
          <h1>
            Take Art to
            <span style={{ color: `rgba(231, 84, 128, 1)` }}> Heart </span>
          </h1>
          <h3>Unleash your inner Artist Now, by being part of the community</h3>
          <button>Register Now as an Artist</button>
        </div>
        <Wallpaper />
      </div>
      <div className={styles.extra}>
        <div className={styles.extraHeader}>
          <h2>Explore the Content</h2>
        </div>
      </div>
    </>
  );
}

export default Home;
