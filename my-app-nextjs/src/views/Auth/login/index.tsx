import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Login.module.scss";

const LoginViews = () => {
  const { push } = useRouter();

  const handleLogin = () => {
    push("/product");
  };
  return (
    <div className={styles.login}>
      <h1>Login</h1>
      <button onClick={handleLogin}>Klik</button>
      <p className="text-pink-600">
        Belum Punya akun ? Registrasi <Link href={"/auth/register"}>disini</Link>{" "}
      </p>
    </div>
  );
};

export default LoginViews;
