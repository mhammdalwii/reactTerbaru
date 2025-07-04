import { useSelector } from "react-redux";
import { useLogin } from "../../hooks/useLogin";
import Button from "../Elements/Button";
import { useEffect, useState, useContext } from "react";
import { DarkMode } from "../../Context/DarkMode";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTotalPrice } from "../../Context/TotalPriceContext";

const Navbar = () => {
  const username = useLogin();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data);
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  const { total } = useTotalPrice();

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      acc += item.qty;
    }, 0);
    setTotalCart(sum);
  }, [cart]);

  return (
    <div className="flex justify-end h-20 bg-blue-600 items-center px-10 text-white">
      {username}
      <Button
        classname="bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 text-black font-medium rounded-lg text-sm px-5 py-2.5 ml-3"
        onClick={handleLogout}
      >
        Logout !
      </Button>
      <div className="flex items-center ml-5 bg-gray-500 text-gray-800 rounded-lg px-3 py-2">
        Item : {totalCart} | price : $ {total}
      </div>
      <button className="right-2 top-2 mx-5 bg-black p-2 text-white rounded" onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? (
          <>
            <FaSun />
          </>
        ) : (
          <>
            <FaMoon />
          </>
        )}
      </button>
    </div>
  );
};

export default Navbar;
