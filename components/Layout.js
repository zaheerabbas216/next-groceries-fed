import styles from "../styles/Layout.module.css";
import HeaderComponent from "./Header";
import FooterComponent from "./Footer";
export default function LayoutComponent({ children }) {
  return (
    <>
      <div className={styles.layout_container}>
        <HeaderComponent />
        {children}
        <FooterComponent />
      </div>
    </>
  );
}
