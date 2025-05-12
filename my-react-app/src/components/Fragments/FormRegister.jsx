import Button from "../Elements/Button";
import InputForms from "../Elements/Input";

const FormRegister = () => {
  return (
    <form action="">
      <InputForms label="Fullname" type="text" placeholder="Insert your name here..." name="fullname" />
      <InputForms label="Email" type="email" placeholder="example@gmail.com" name="email" />
      <InputForms label="Password" type="password" placeholder="********" name="password" />
      <InputForms label="Confirm Password" type="password" placeholder="********" name="confirmPassword" />
      <Button classname="bg-blue-600 w-full">Register</Button>
    </form>
  );
};

export default FormRegister;
