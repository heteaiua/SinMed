import React, { useState, useContext } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Button from "../Components/Button";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import AuthContext from "../Context/auth-context";
import { useHttpClient } from "../Hooks/http-hook";

function Login() {
  const auth = useContext(AuthContext);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // setIsLoggedIn(true);

  const { isLoading, isError, sendRequest, clearError } = useHttpClient();

  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required(),
    password: Yup.string().required(),
  });

  const onSubmit = async (data) => {
    // console.log(data);
    try {
      const responseData = await axios.post("http://localhost:8080/login", {
        email: data.email,
        password: data.password,
      });
      auth.login(responseData.data.patient._id);
      console.log(responseData.data.patient._id);
      // console.log(auth);
      // navigate("/Home");
    } catch (err) {}
  };


  return (
    <div className="center">
      {!isLoggedIn && (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form className="loginFormContainer">
            <label>Email:</label>
            <Field id="email" name="email" />
            <label>Password:</label>
            <Field id="password" name="password" />
            <Button type="submit">Login</Button>
          </Form>
        </Formik>
      )}
    </div>
  );
}

export default Login;
