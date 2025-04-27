function Input({ text, id, type = "text", style = "" }) {
  return (
    <div className={`flex flex-col gap-2 ${style}`}>
      <label htmlFor={id}>{text}</label>
      <input
        type={type}
        id={id}
        name={id}
        className="bg-gray-200 border-none focus:border-none focus:outline-0 ps-2 !text-black"
        required
      />
    </div>
  );
}

export default Input;
