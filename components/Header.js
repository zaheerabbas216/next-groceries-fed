import Image from "next/image";
import styles from "../styles/Header.module.css";
import Link from "next/link";
import AuthContext from "../stores/authContext";
import { useContext } from "react";

export default function HeaderComponent() {
  const { user, logout } = useContext(AuthContext);
  console.log("🚀 ~ file: Header.js:9 ~ HeaderComponent ~ user", user);
  return (
    <>
      <nav className={styles.nav_container}>
        <div className={styles.title_div}>
          <Image src="/icons/grocery.png" height={35} width={35} />
          <h2>NextGroceries</h2>
        </div>
        <div className={styles.links}>
          <Link href="/">
            <span>Home</span>
          </Link>
          <Link href="/about">
            <span>About</span>
          </Link>
          <Link href="/explore">
            <span>Explore</span>
          </Link>
          {user && (
            <button className={styles.login_button} onClick={logout}>
              Logout
            </button>
          )}
        </div>
      </nav>
    </>
  );
}
