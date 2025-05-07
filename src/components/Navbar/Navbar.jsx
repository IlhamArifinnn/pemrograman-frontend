function Navbar() {
  return (
    <nav
      className="bg-blue-400 text-white p-4 flex flex-col sm:flex-row items-center justify-between md:justify-around fixed top-0 right-0 left-0"
      aria-label="Main Navigation"
    >
      <div className="flex items-center gap-2 mb-2 sm:mb-0">
        <img src="/coronavirus.png" alt="Corona Virus" className="w-10" />
        <h1 className="text-2xl font-bold">Covid ID</h1>
      </div>
      
      <ul className="flex gap-5 md:gap-10">
        <li>
          <a href="#" className="hover:underline">
            Global
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Indonesia
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Provinsi
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Tentang Kami
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
