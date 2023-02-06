import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.banner_div}>
        <div className={styles.button_div}>
          <button className={styles.button}>Login/Sign Up</button>
        </div>
      </div>
    </>
  );
}
