import styles from "./Hero.module.css";
import React from "react";

function Hero() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <h2 className={styles.hero__title}>Judul Movie</h2>
          <h3 className={styles.hero__genre}>Genre: Thriller, Drama, Comedy</h3>
          <p className={styles.hero__description}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos,
            possimus dolorem? Ea harum voluptas consectetur accusantium libero
            unde sunt rem ex, ullam similique molestias impedit.{" "}
          </p>
          <button className={styles.hero__button}>Watch Now</button>
        </div>

        <div className={styles.hero__right}>
          <img className={styles.hero__image} src="https://picsum.photos/600/400" alt="Movie" />
        </div>
      </section>
    </div>
  );
}

export default Hero;
