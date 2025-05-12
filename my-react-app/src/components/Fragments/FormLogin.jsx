import Button from "../Elements/Button";
import InputForms from "../Elements/Input";

const FormLogin = () => {
  return (
    <form action="">
      <InputForms label="Email" type="email" placeholder="example@gmail.com" name="email" />
      <InputForms label="Password" type="password" placeholder="********" name="password" />
      <Button classname="bg-blue-600 w-full">Login</Button>
    </form>
  );
};

export default FormLogin;
