import "../styles/globals.css";
import LayoutComponent from "../components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <LayoutComponent>
        <Component {...pageProps} />
      </LayoutComponent>
    </>
  );
}
