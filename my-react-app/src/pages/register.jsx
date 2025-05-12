import { FormLogin, FormRegister } from "../components/Fragments";
import AuthLayouts from "../components/Layouts";

const RegisterPage = () => {
  return (
    <AuthLayouts title="Register">
      <FormRegister />
    </AuthLayouts>
  );
};

export default RegisterPage;
