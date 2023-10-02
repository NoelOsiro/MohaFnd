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

  const handleSubmit = async () => {
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
      <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
        <div className="col-lg-6 p-3 p-lg-5 pt-lg-3">
          <h1 className="display-4 fw-bold lh-1 text-center">MohaApts</h1>
          <div className="card-header justify-content-center text-center">
            <h3 className="fw-light my-4">Login</h3>
          </div>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="inputEmailAddress">Email</Label>
              <Input
                type="email"
                id="inputEmailAddress"
                name="email"
                placeholder="Enter email address"
                value={formData.email}
                onChange={handleChange}
              />
              {formErrors.email && <div className="text-danger">{formErrors.email}</div>}
            </FormGroup>
            <FormGroup>
              <Label htmlFor="inputPassword">Password</Label>
              <Input
                type="password"
                id="inputPassword"
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
              />
              {formErrors.password && <div className="text-danger">{formErrors.password}</div>}
            </FormGroup>
            <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
              <a className="small" href="auth-password-basic.html">
                Forgot Password?
              </a>
              <LoginButton type="submit" className="btn-primary">
                Login
              </LoginButton>
            </div>
          </Form>
        </div>
        <div className="col-lg-5 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img
            className="rounded-lg-3"
            src="/assets/img/demo/login.png"
            alt=""
            width="600"
            height="500"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
