import { nanoid } from "nanoid";
import { useState } from "react";
import Alert from "../Alert/Alert";
import Button from "../ui/Button/Button";
import styled from "styled-components";

const StyledForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  /* Small Screen */
  .form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    text-align: center;
  }

  .form__image {
    max-width: 100%;
    height: auto;
    border-radius: 25px;
  }

  .form__title {
    color: #10caa7;
    margin-bottom: 0.5rem;
    font-size: 2.44rem;
  }

  .form__input {
    display: flex;
    gap: 1rem;
    flex-direction: column;
  }

  .form__input__title,
  .form__input__year,
  .form__input__type,
  .form__input__poster {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 0.3rem;
  }
  .form__input__title label,
  .form__input__year label,
  .form__input__type label,
  .form__input__poster label {
    font-size: 1.2rem;
    text-align: left;
    color: #64748b;
  }

  .form__input__title input,
  .form__input__year input,
  .form__input__type select,
  .form__input__poster input {
    padding: 0.6rem;
    border-radius: 0.5rem;
  }

  .form__error {
    color: red;
    margin: 0;
    font-size: 0.9rem;
    font-style: italic;
  }

  .form__button {
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 10px;
    background-color: #10caa7;
    color: #fff;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    /*
     * Nothing TODO Here.
     * We dont change style form. 
     */
    .form {
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 4rem;
      text-align: left;
    }
  }

  /* Large Screen */
  @media (min-width: 992px) {
    max-width: 1200px;
    margin: 3rem auto;

    .form {
      margin: 0 1rem;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      text-align: left;
    }

    .form__left {
      flex: 1;
    }

    .form__image {
      width: 90%;
      aspect-ratio: 4/3;
      border-radius: 20px;
      object-fit: cover;
    }

    .form__right {
      flex: 1;
    }

    .form__title {
      color: #10caa7;
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }

    .form__input {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .form__input__title,
    .form__input__year,
    .form__input__type {
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
    }

    label {
      font-size: 0.9rem;
      color: #333;
    }

    input,
    select {
      padding: 0.6rem;
      border-radius: 6px;
      border: 1.5px solid #10caa7;
      outline: none;
      font-size: 1rem;
    }

    .form__button {
      background-color: #10caa7;
      color: white;
      padding: 0.7rem;
      border: none;
      border-radius: 6px;
      font-size: 1rem;
      font-weight: 500;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .form__button:hover {
      background-color: #0aa38b;
    }
  }
`;

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
    <StyledForm>
      <section className="form">
        <div className="form__left">
          <img className="form__image" src="cinema.jpg" alt="Movie" />
        </div>

        <div className="form__right">
          <h2 className="form__title">Add Movie</h2>
          <form className="form__input" onSubmit={handleSubmit}>
            <div className="form__input__title">
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
                  <p className="form__error">*Title Wajib Diisi</p>
                </Alert>
              )}
            </div>

            <div className="form__input__year">
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
                  <p className="form__error">*Date Wajib Diisi</p>
                </Alert>
              )}
            </div>

            <div className="form__input__type">
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
                  <p className="form__error">*Type Wajib Diisi</p>
                </Alert>
              )}
            </div>

            <div className="form__input__poster">
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
                  <p className="form__error">*Poster URL Wajib Diisi</p>
                </Alert>
              )}
            </div>

            {/* <button className={form__button}>Add Movie</button> */}
            <Button variant="primary" className="form__button">
              Add Movie
            </Button>
          </form>
        </div>
      </section>
    </StyledForm>
  );
}

export default Form;
