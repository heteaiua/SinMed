import React from 'react'
import {Formik, Form, Field } from "formik"
import * as Yup from "yup"
import axios from "axios"

function Register() {
  const initialValues={
    username: "",
    password:"",
    confirmPassword: "",
  }

  const validationSchema = Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().min(5).max(25).required('Password is required'),
    passwordConfirmation: Yup.string()
     .oneOf([Yup.ref('password'), null], 'Passwords must match')
  })

  const onSubmit = (data) => {
    axios.post("http://localhost:8080/", data).then(()=>{
        console.log("ok");
    });
  }

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        <Form className="formContainer">
          <label>Username: </label>
          <Field 
              id="username" 
              name="username" 
              placeholder="(Example Title)"/>
          <label>Password: </label>
          <Field 
              id="password" 
              name="password" 
              placeholder="(Example Post)"/>
          <label>Confirm Password: </label>
          <Field 
              id="confirm_password" 
              name="confirmPassword" 
              placeholder="(Example Post)"/>

        <button type="submit">Register</button>
        </Form>
      </Formik>

    </div>
  )
}

export default Register
