function Footer() {
  return (
    <footer id="footer" className="bg-blue-400 text-white p-4 flex flex-col gap-3 sm:flex-row md:justify-around md:items-center">
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
          <a href="#hero" className="hover:underline">
            Global
          </a>
        </li>
        <li>
          <a href="#indonesia" className="hover:underline">
            Indonesia
          </a>
        </li>
        <li>
          <a href="#provinsi" className="hover:underline">
            Provinsi
          </a>
        </li>
        <li>
          <a href="#footer" className="hover:underline">
            Tentang Kami
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
