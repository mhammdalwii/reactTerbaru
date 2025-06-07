import { useEffect, useRef, useState } from "react";
import Button from "../Elements/Button";
import InputForms from "../Elements/Input";
import { login } from "../../services/auth.service";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");
  const handleLogin = (event) => {
    event.preventDefault();
    // localStorage.setItem("email", event.target.email.value);
    // localStorage.setItem("password", event.target.password.value);
    // window.location.href = "/products";
    // console.log("Login button clicked");
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        setLoginFailed(res.response.data);
        console.log(res.response.data);
      }
    });
  };

  const usernameRef = useRef(null);

  useEffect(() => {
    if (usernameRef.current) {
      usernameRef.current.focus();
    }
  }, []);

  return (
    <form onSubmit={handleLogin}>
      <InputForms label="Username" type="text" placeholder="example@gmail.com" name="username" ref={usernameRef} />
      <InputForms label="Password" type="password" placeholder="********" name="password" />
      <Button classname="bg-blue-600 w-full" type="submit">
        Login
      </Button>
      {loginFailed && <p className="text-red-600 text-center mt-5">{loginFailed}</p>}
    </form>
  );
};

export default FormLogin;
