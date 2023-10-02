import { useState, useEffect } from "react";
import { User } from "@supabase/supabase-js";
import supabase from "../../auth/supabase";

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null); // Set the initial state to null or the expected type
  const [isAuthorizing, setIsAuthorizing] = useState(true);

  useEffect(() => {
    supabase.auth
      .getUser()
      .then((response) => {
        setUser(response.data?.user || null); // Use the response or set to null if it's null
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsAuthorizing(false);
      });
  }, []);

  return { user, isAuthorizing };
};
