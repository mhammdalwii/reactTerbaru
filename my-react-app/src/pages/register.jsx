import { FormLogin, FormRegister } from "../components/Fragments";
import AuthLayouts from "../components/Layouts";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <AuthLayouts title="Register">
      <FormRegister />
      <p className="text-center mt-4 font-bold text-slate-500 text-sm">
        Have an Account ?{" "}
        <Link to="/login" className="text-blue-600">
          Login
        </Link>{" "}
      </p>
    </AuthLayouts>
  );
};

export default RegisterPage;
