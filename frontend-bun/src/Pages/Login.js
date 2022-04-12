import React from 'react'
import {Formik, Form, Field } from "formik"
import * as Yup from "yup"
import axios from "axios"

function Login() {
  const initialValues={
    email:"",
    password:""
  }

  const validationSchema=Yup.object().shape({
    email:Yup.string().required(),
    password:Yup.string().required()
  })

  const onSubmit = (data) => {
    axios.post("http://localhost:8080/", data).then(()=>{
        console.log("ok");
    });
  }
  
  return (
    <div>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form className='loginFormContainer'>
          <label>E-mail: </label>
          <Field
            id="email"
            name="email"/>
          <label>Password: </label>
          <Field
            id="password"
            name="password"/>
        <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  )
}

export default Login
