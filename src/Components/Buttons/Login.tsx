import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/dashboard",
      },
    });
  };
  return (
    <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold button__login" onClick={handleLogin}>
      Log In
    </button>
  );
};
