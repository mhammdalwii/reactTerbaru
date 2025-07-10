import styles from "./register.module.scss";

const RegisterView = () => {
  return (
    <div className={styles.register}>
      <h1 className={styles.register__title}>Register View</h1>
      <div className={styles.register__form}>
        <form action="">
          <div className={styles.register__form__item}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" className={styles.register__form__item__input} />
          </div>
          <button>Register</button>
        </form>
      </div>
      <p>have an account? Sign In</p>
    </div>
  );
};

export default RegisterView;
