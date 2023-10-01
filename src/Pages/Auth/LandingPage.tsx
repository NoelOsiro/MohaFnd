import React, { useState, ChangeEvent, FormEvent } from "react";
import { LoginButton } from '../../Components/Forms/Buttons';
import { Form, FormGroup, Input, Label } from '../../Components/Forms/Input';
import supabase from "../../auth/supabase";
import { useAuth } from "./useAuth";

interface FormData {
  email: string;
  password: string;
  rememberPassword: boolean;
}

const LandingPage = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    rememberPassword: false,
  });
  const [formErrors, setFormErrors] = useState<Partial<FormData>>({});
  const { user } = useAuth();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = () => {
    const errors: Partial<FormData> = {};

    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email address";
    }

    if (!formData.password) {
      errors.password = "Password is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleLogin = async () => {
    if (validateForm()) {
      try {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: formData.email,
          password: formData.password,
        });

        if (error) {
          console.error("Error logging in:", error.message);
        } else {
          console.log("Logged in as:", data);
          // Redirect or perform actions on successful login.
        }
      } catch (error: any) {
        console.error("Error logging in:", error.message);
      }
    }
  };

  if (user) {
    window.location.assign('/dashboard'); // Redirect if user exists
    return null; // Return null to prevent rendering the login form
  }

  return (
    <div className="container my-2">
      {/* ... Rest of your component code ... */}
    </div>
  );
};

export default LandingPage;
