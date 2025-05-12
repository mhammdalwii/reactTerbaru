const Button = (props) => {
  const { children, classname = "bg-black" } = props;
  return (
    <button className={`${classname} text-white font-bold py-2 px-4 rounded`} type="submit">
      {children}
    </button>
  );
};

export default Button;
