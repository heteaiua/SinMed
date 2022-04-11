import React from 'react'
import {Formik, Form, Field } from "formik"
import * as Yup from "yup"
import axios from "axios"


function Register() {
  const initialValues={
    firstName: "",
    lastName:"",
    email: "",
    password:"",
    cnp:"",
    bloodType:"",
    gender:"",
    age:""
  }

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    email: Yup.string().required(),
    password: Yup.string().min(5).max(25).required('Password is required'),
    passwordConfirmation: Yup.string()
     .oneOf([Yup.ref('password'), null], 'Passwords must match'),
     cnp: Yup.string().required(),
     bloodType: Yup.string().required(),
     gender: Yup.string().required(),
     age: Yup.string().required(),
  })

  const onSubmit = (data) => {
    axios.post("http://localhost:8080/", data).then(()=>{
        console.log("ok");
    });
  }

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        <Form className="registerFormContainer">
          <label>First Name: </label>
          <Field 
              id="firstName" 
              name="firstName"/>
          <label>Last Name: </label>
          <Field 
              id="lastName" 
              name="lastName"/>
          <label>Password: </label>
          <Field 
              id="password" 
              name="password" />
          <label>Confirm Password: </label>
          <Field 
              id="confirm_password" 
              name="confirmPassword" />
          <label>CNP: </label>
          <Field 
              id="cnp" 
              name="cnp" />
          <label>Blood Type: </label>
          <Field 
              id="bloodType" 
              name="bloodtype" />
          <label>Gender: </label>
          <Field 
              id="gender" 
              name="gender" />
          <label>Age: </label>
          <Field 
              id="age" 
              name="age" />

        <button type="submit">Register</button>
        </Form>
      </Formik>

    </div>
  )
}

export default Register
