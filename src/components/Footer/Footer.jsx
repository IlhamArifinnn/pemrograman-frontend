import { Link } from "react-router";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-blue-400 text-white p-4 flex flex-col gap-3 sm:flex-row md:justify-around md:items-center"
    >
      <div className="flex justify-start flex-col">
        <h1>Covid ID</h1>
        <h2>
          Developed by{" "}
          <a
            href="https://linktree-ipin.vercel.app/"
            target="_blank"
            className="hover:underline"
          >
            IlhamArifinnn
          </a>
        </h2>
      </div>

      <ul className="flex gap-5 md:gap-10">
        <li>
          <Link to="/" className="hover:underline">
            Global
          </Link>
        </li>
        <li>
          <Link to="/indonesia" className="hover:underline">
            Indonesia
          </Link>
        </li>
        <li>
          <Link to="/provinsi" className="hover:underline">
            Provinsi
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:underline">
            Tentang Kami
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
