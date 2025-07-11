import Link from "next/link";
import styles from "./register.module.scss";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

const RegisterView = () => {
  const { push } = useRouter();
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");
    const form = event.target as HTMLFormElement;
    const data = {
      email: event.currentTarget.email.value,
      username: event.currentTarget.username.value,
      phone: event.currentTarget.phone.value,
      password: event.currentTarget.password.value,
    };

    const result = await fetch("/api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (result.status === 200) {
      form.reset();
      setIsLoading(false);
      push("/auth/login");
    } else {
      setIsLoading(false);
      setError("Registration failed. Please try again.");
      console.log("error");
    }
  };

  return (
    <div className={styles.register}>
      <h1 className={styles.register__title}>Register View</h1>
      {error && <p className={styles.register__error}>{error}</p>}
      <div className={styles.register__form}>
        <form onSubmit={handleSubmit}>
          <div className={styles.register__form__item}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" className={styles.register__form__item__input} />
          </div>
          <div className={styles.register__form__item}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" className={styles.register__form__item__input} />
          </div>
          <div className={styles.register__form__item}>
            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" name="phone" className={styles.register__form__item__input} />
          </div>
          <div className={styles.register__form__item}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" className={styles.register__form__item__input} />
          </div>
          <button type="submit" className={styles.register__form__button}>
            {loading ? "Loading..." : "Register"}
          </button>
        </form>
      </div>
      <p className={styles.register__link}>
        have an account? Sign In <Link href={"/auth/login"}>here</Link>
      </p>
    </div>
  );
};

export default RegisterView;
