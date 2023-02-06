import { createContext, useEffect, useState } from "react";
import netlifyIdentity from "netlify-identity-widget";
import { useRouter } from "next/router";

const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
  authReady: false,
});

export const AuthContextProvider = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [authReady, setAuthReady] = useState(false);

  useEffect(() => {
    // login event
    netlifyIdentity.on("login", (user) => {
      setUser(user);
      router.push("/Dashboard");
      netlifyIdentity.close();
      console.log("login event");
    });

    // logout event
    netlifyIdentity.on("logout", () => {
      setUser(null);
      router.push("/");
      console.log("logout event");
    });

    // netlify event
    netlifyIdentity.on("init", (user) => {
      setAuthReady(true);
      setUser(user);
      console.log("init event ");
    });

    // !initialzing the netlify
    netlifyIdentity.init();

    // deactivate the event
    return () => {
      netlifyIdentity.off("login");
      netlifyIdentity.off("logout");
    };
  }, []);

  const login = () => {
    netlifyIdentity.open();
  };
  const logout = () => {
    netlifyIdentity.logout();
  };

  const context = {
    user,
    login,
    logout,
    authReady,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
