import { FormLogin } from "../Fragments";
import { Link } from "react-router-dom";

const AuthLayouts = (props) => {
  const { children, title, type } = props;

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
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
