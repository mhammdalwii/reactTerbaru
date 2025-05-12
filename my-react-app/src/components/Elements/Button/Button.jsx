const Button = (props) => {
  const { children, variant = "bg-black" } = props;
  return (
    <button className={`${variant} text-white font-bold py-2 px-4 rounded`} type="submit">
      {children}
    </button>
  );
};

export default Button;
