function Button({ children, onClick, style = "" }) {
  return (
    <button
      onClick={onClick}
      className={`bg-sky-700 border border-white  px-5 py-1 rounded-2xl hover:bg-sky-800 cursor-pointer text-white text-xl ${style}`}
    >
      {children}
    </button>
  );
}

export default Button;
