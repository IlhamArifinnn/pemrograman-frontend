import styles from "./Form.module.css";
import React from "react";

function Form() {
  return (
    <div className={styles.container}>
      <section className={styles.form}>
        <div className={styles.form__left}>
          <img className={styles.form__image} src="cinema.jpg" alt="Movie" />
        </div>

        <div className={styles.form__right}>
          <h2 className={styles.form__title}>Add Movie</h2>
          <form className={styles.form__input}>
            <div className={styles.form__input__title}>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="enter title"
              />
            </div>

            <div className={styles.form__input__year}>
              <label htmlFor="year">Year</label>
              <input
                type="number"
                name="year"
                id="year"
                min="1900"
                max="2099"
                placeholder="enter year"
              />
            </div>
            <button className={styles.form__button}>Add Movie</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Form;
