const Button = (props) => {
  const { children, classname = "bg-black", onClick = () => {}, type = "button" } = props;
  return (
    <button className={`${classname} text-white font-bold py-2 px-2 rounded`} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
