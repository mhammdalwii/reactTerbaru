import Button from "../Elements/Button";
import InputForms from "../Elements/Input";

const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    window.location.href = "/products";
    console.log("Login button clicked");
  };

  return (
    <form onSubmit={handleLogin}>
      <InputForms label="Email" type="email" placeholder="example@gmail.com" name="email" />
      <InputForms label="Password" type="password" placeholder="********" name="password" />
      <Button classname="bg-blue-600 w-full" type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
