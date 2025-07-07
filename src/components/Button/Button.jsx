const Button = ({ type = "button", children }) => {
  return (
    <button
      type={type}
      className="bg-blue-400 px-8 py-3 rounded-xl text-white cursor-pointer hover:bg-blue-500 transition duration-300 ease-in-out"
    >
      {children}
    </button>
  );
};

export default Button;
