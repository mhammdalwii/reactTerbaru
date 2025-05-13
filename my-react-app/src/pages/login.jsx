import { Link } from "react-router-dom";
import { FormLogin } from "../components/Fragments";
import AuthLayouts from "../components/Layouts";

const LoginPage = () => {
  return (
    <AuthLayouts title="Login">
      <FormLogin />
      <p className="text-center mt-4 font-bold text-slate-500 text-sm">
        Do'nt Have an Account ?{" "}
        <Link to="/register" className="text-blue-600">
          Sign Up
        </Link>{" "}
      </p>
    </AuthLayouts>
  );
};

export default LoginPage;
