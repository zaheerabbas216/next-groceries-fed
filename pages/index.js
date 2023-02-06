import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import AuthContext from "../stores/authContext";
import { useContext } from "react";

export default function Home() {
  const { user, login, logout, authReady } = useContext(AuthContext);
  console.log("🚀 ~ file: index.js:9 ~ Home ~ user", user);

  return (
    <>
      <div className={styles.banner_div}>
        <div className={styles.button_div}>
          <button className={styles.button} onClick={login}>
            Login/Sign Up
          </button>
        </div>
      </div>
    </>
  );
}
