import React, { useState } from "react";

import Button from "../Components/Button";
import './Register.css';

import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";

function Register() {
  const navigate = useNavigate();

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    cnp: "",
    bloodType: "",
    gender: "",
    age: "",
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().required("Email is required"),
    password: Yup.string().min(5).max(25).required("Password is required"),
    passwordConfirmation: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
    cnp: Yup.string().required("CNP is required"),
    bloodType: Yup.string().required("Blood Type is required"),
    gender: Yup.string().required("Gender is required"),
    age: Yup.string().required("Age is required"),
  });

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("http://localhost:8080/", {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
        passwordConfirmation: data.passwordConfirmation,
        cnp: data.cnp,
        bloodType: data.bloodType,
        gender: data.gender,
        age: data.age,
      })
      .then(() => {
        console.log("ok");
        navigate("/login");
      });
  };

  return (
    <form className="register" onSubmit={onSubmit}>
      <div className="form-body">
        <div className="firstName">
          <label className="form__label" >First name</label>
          <input className="form__input" />
        </div>
        <div className="lastName">
          <label className="form__label">Last name</label>
          <input className="form__input" />
        </div>
        <div className="email">
          <label className="form__label">Email</label>
          <input className="form__input" />
        </div>
        <div className="password">
          <label className="form__label">Password</label>
          <input className="form__input" />
        </div>
        <div className="passwordConfirmation">
          <label className="form__label">Password confirmation</label>
          <input className="form__input" />
        </div>
        <div className="age">
          <label className="form__label">Age</label>
          <input className="form__input" />
        </div>
        <div className="gender">
          <label className="form__label">Gender</label>
          <input className="form__input" />
        </div>
        <div className="bloodType">
          <label className="form__label">Blood type</label>
          <input className="form__input" />
        </div>
      </div>
      <div className="form-footer">
        <Button type="submit">Register</Button>
      </div>
    </form>
  );
}

export default Register;
