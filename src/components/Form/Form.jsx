import { nanoid } from "nanoid";
import styles from "./Form.module.css";
import React, { useState } from "react";
import Alert from "../Alert/Alert";

function Form({ movies, setMovies }) {
  // handle multiple input dengan 1 state
  // membuat state formData
  // nilai state menggunakan object
  const [formData, setFormData] = useState({
    title: "",
    year: "",
    type: "",
    poster: "",
  });

  // destructing state formData
  const { title, year, type, poster } = formData;

  // membuat state validasi form
  const [formValidate, setFormValidate] = useState({
    isTitleError: false,
    isDateError: false,
    isTypeError: false,
    isPosterError: false,
  });

  // destructing state formValidate
  const { isTitleError, isDateError, isTypeError, isPosterError } =
    formValidate;

  // fungsi handleChange untuk handle input form(dinamis)
  function handleChange(e) {
    // destructing name and value
    const { name, value } = e.target;

    // update state dengan object baru
    // - copy state sebelumnya menggunakan spread operator
    // - update property berdasarkan apapun nilai name(computed property)
    setFormData({ ...formData, [name]: value });
  }

  function validate() {
    const error = {
      isTitleError: title === "",
      isDateError: year === "",
      isTypeError: type === "",
      isPosterError: poster === "",
    };
    setFormValidate(error);

    return !Object.values(error).includes(true);
  }

  function addMovie() {
    const movie = {
      id: nanoid(10),
      title: title,
      year: year,
      type: type,
      poster: poster,
    };

    setMovies([...movies, movie]);

    //  reset form
    // Reset form
    setFormData({
      title: "",
      year: "",
      type: "",
      poster: "",
    });
  }

  // fungsi handleSubmit menjalankan 2 fungsi:
  // - validate: fungsi validasi
  // - addMovie: menambahkan movie
  function handleSubmit(e) {
    e.preventDefault();

    validate() && addMovie();
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
                onChange={handleChange}
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
                value={year}
                onChange={handleChange}
              />

              {isDateError && (
                <Alert>
                  <p className={styles.form__error}>*Date Wajib Diisi</p>
                </Alert>
              )}
            </div>

            <div className={styles.form__input__type}>
              <label htmlFor="type">Type</label>
              <select
                name="type"
                id="type"
                value={type}
                onChange={handleChange}
              >
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
                onChange={handleChange}
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
