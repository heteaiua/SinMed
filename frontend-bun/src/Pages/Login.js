import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Button from "../Components/Button";
import "./Login.css";

function Login() {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required(),
    password: Yup.string().required(),
  });

  const onSubmit = (data) => {
    axios.post("http://localhost:8080/", data).then(() => {
      console.log("ok");
    });
  };

  return (
    <form className="login" onSubmit={onSubmit}>
    <div className="form-body">
      <div className="email">
        <label className="form__label">Email</label>
        <input className="form__input" />
      </div>
      <div className="password">
        <label className="form__label">Password</label>
        <input className="form__input" />
      </div>
      <div className="form-footer">
        <Button type="submit">Login</Button>
      </div>
    </div>
    </form>
  );
}

export default Login;
