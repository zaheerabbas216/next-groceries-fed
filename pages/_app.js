import "../styles/globals.css";
import LayoutComponent from "../components/Layout";
import { AuthContextProvider } from "../stores/authContext";

export default function App({ Component, pageProps }) {
  return (
    <>
      <AuthContextProvider>
        <LayoutComponent>
          <Component {...pageProps} />
        </LayoutComponent>
      </AuthContextProvider>
    </>
  );
}
