import { FormLogin, FormRegister } from "../components/Fragments";
import AuthLayouts from "../components/Layouts";

const RegisterPage = () => {
  return (
    <AuthLayouts title="Register" type="register">
      <FormRegister />
    </AuthLayouts>
  );
};

export default RegisterPage;
