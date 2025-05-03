import { nanoid } from "nanoid";
import styles from "./Form.module.css";
import React, { useState } from "react";
import Alert from "../Alert/Alert";

function Form({ movies, setMovies }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("");
  const [poster, setPoster] = useState("");

  // membuat state validasi form
  const [isTitleError, setIsTitleError] = useState(false);
  const [isDateError, setIsDateError] = useState(false);
  const [isTypeError, setIsTypeError] = useState(false);
  const [isPosterError, setIsPosterError] = useState(false);

  function handleTitle(e) {
    setTitle(e.target.value);
  }

  function handleDate(e) {
    setDate(e.target.value);
  }

  function handleType(e) {
    setType(e.target.value);
  }
  function handlePoster(e) {
    setPoster(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const isTitleEmpty = title.trim() === "";
    const isDateEmpty = date.trim() === "";
    const isTypeEmpty = type.trim() === "";
    const isPosterEmpty = poster.trim() === "";

    setIsTitleError(isTitleEmpty);
    setIsDateError(isDateEmpty);
    setIsTypeError(isTypeEmpty);
    setIsPosterError(isPosterEmpty);

    if (isTitleEmpty || isDateEmpty || isTypeEmpty || isPosterEmpty) {
      return; // hentikan jika ada yang kosong
    }

    const movie = {
      id: nanoid(10),
      title,
      year: date,
      type,
      poster,
    };

    setMovies([...movies, movie]);

    // Reset form
    setTitle("");
    setDate("");
    setType("");
    setPoster("");
  }

  return (
    <div className={styles.container}>
      <section className={styles.form}>
        <div className={styles.form__left}>
          <img className={styles.form__image} src="cinema.jpg" alt="Movie" />
        </div>

        <div className={styles.form__right}>
          <h2 className={styles.form__title}>Add Movie</h2>
          <form className={styles.form__input} onSubmit={handleSubmit}>
            <div className={styles.form__input__title}>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="enter title"
                value={title}
                onChange={handleTitle}
              />

              {isTitleError && (
                <Alert>
                  <p className={styles.form__error}>*Title Wajib Diisi</p>
                </Alert>
              )}
            </div>

            <div className={styles.form__input__year}>
              <label htmlFor="year">Year</label>
              <input
                type="text"
                name="year"
                id="year"
                placeholder="enter year"
                value={date}
                onChange={handleDate}
              />

              {isDateError && (
                <Alert>
                  <p className={styles.form__error}>*Date Wajib Diisi</p>
                </Alert>
              )}
            </div>

            <div className={styles.form__input__type}>
              <label htmlFor="type">Type</label>
              <select name="type" id="type" value={type} onChange={handleType}>
                <option value="">Select Type</option>
                <option value="Action">Action</option>
                <option value="Drama">Drama</option>
                <option value="Horor">Horor</option>
                <option value="Comedy">Comedy</option>
              </select>

              {isTypeError && (
                <Alert>
                  <p className={styles.form__error}>*Type Wajib Diisi</p>
                </Alert>
              )}
            </div>

            <div className={styles.form__input__poster}>
              <label htmlFor="title">Url Poster</label>
              <input
                type="text"
                name="poster"
                id="poster"
                placeholder="enter url poster"
                value={poster}
                onChange={handlePoster}
              />

              {isPosterError && (
                <Alert>
                  <p className={styles.form__error}>*Poster URL Wajib Diisi</p>
                </Alert>
              )}
            </div>

            <button className={styles.form__button}>Add Movie</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Form;
