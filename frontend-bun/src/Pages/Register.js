import React, { useState } from "react";

import Button from "../Components/Button";
// import './Register.css';

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

  const onSubmit = async (data) => {
    console.log(data);
    const responseData = await axios.post("http://localhost:8080/", {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      passwordConfirmation: data.passwordConfirmation,
      cnp: data.cnp,
      bloodType: data.bloodType,
      gender: data.gender,
      age: data.age,
    });
    console.log(responseData.data.patient._id);
    // auth.login(responseData.data.patient._id);
    // navigate("/Home");
    // ne logam dupa ce ne inregistram?
  };


  return (
    <div className="center">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="registerFormContainer">
          <div>
            <label>First Name:</label>
            <ErrorMessage name="firstName" component="div" />
            <Field id="firstName" name="firstName" />
          </div>
          <div>
            <label>Last Name:</label>
            <ErrorMessage name="lastName" component="div" />
            <Field id="lastName" name="lastName" />
          </div>
          <div>
            <label>Email:</label>
            <ErrorMessage name="email" component="div" />
            <Field id="email" name="email" />
          </div>
          <div>
            <label>Password:</label>
            <ErrorMessage name="password" component="div" />
            <Field id="password" name="password" type="password" />
          </div>
          <div>
            <label>Password Confirmation:</label>
            <ErrorMessage name="passwordConfirmation" component="div" />
            <Field
              id="passwordConfirmation"
              name="passwordConfirmation"
              type="password"
            />
          </div>
          <div>
            <label>Blood Type:</label>
            <ErrorMessage name="bloodType" component="div" />
            <Field id="bloodType" name="bloodType" />
          </div>
          <div>
            <label>Age:</label>
            <ErrorMessage name="age" component="div" />
            <Field id="age" name="age" />
          </div>
          <div>
            <label>Gender:</label>
            <ErrorMessage name="gender" component="div" />
            <Field id="gender" name="gender" />
          </div>
          <div>
            <label>CNP:</label>
            <ErrorMessage name="cnp" component="div" />
            <Field id="cnp" name="cnp" />
          </div>
          <Button type="submit">Register</Button>
        </Form>
      </Formik>
    </div>
  );
}
export default Register;
