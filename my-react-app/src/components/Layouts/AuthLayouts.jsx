import { useContext } from "react";
import { FormLogin } from "../Fragments";
import { Link } from "react-router-dom";
import { DarkMode } from "../../Context/DarkMode";
import { FaSun, FaMoon } from "react-icons/fa";

const AuthLayouts = (props) => {
  const { children, title, type } = props;
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

  console.log("isDarkMode", isDarkMode);

  return (
    <div className={`flex justify-center min-h-screen items-center ${isDarkMode ? "bg-slate-900" : "bg-white"}`}>
      <div className="w-full max-w-xs">
        <button className="absolute right-2 top-2 bg-blue-600 p-2 text-white rounded" onClick={() => setIsDarkMode(!isDarkMode)}>
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
        <h1 className="text-blue-600 text-3xl font-bold mb-2">{title}</h1>
        <p className="font-medium text-slate-500 mb-2">Welcome, Please your details</p>
        {children}
        <p className="text-center mt-4 font-bold text-slate-500 text-sm">
          {type === "register" ? "Already have an account?" : "Don't have an account?"}{" "}
          {type === "login" && (
            <Link to="/register" className="text-blue-600 hover:text-blue-500">
              Register
            </Link>
          )}
          {type === "register" && (
            <Link to="/login" className="text-blue-600 hover:text-blue-500">
              Login
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthLayouts;
