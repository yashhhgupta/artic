import React from "react";
import Footer from "../Footer/Footer";
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
            <h3>
              Unleash your inner Artist Now, by being part of the community
            </h3>
            <button>Register Now as an Artist</button>
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
