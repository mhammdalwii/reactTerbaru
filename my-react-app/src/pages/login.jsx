import { FormLogin } from "../components/Fragments";
import AuthLayouts from "../components/Layouts";

const LoginPage = () => {
  return (
    <AuthLayouts title="Login">
      <FormLogin />
    </AuthLayouts>
  );
};

export default LoginPage;
