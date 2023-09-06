import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export const LogoutButton = () => {
  const { logout } = useAuth0();

  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };

  return (
    <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold button__logout " onClick={handleLogout}>
      Log Out
    </button>
  );
};