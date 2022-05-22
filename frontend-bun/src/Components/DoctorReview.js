import React, {useState, useContext} from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useParams } from "react-router-dom";
import Button from "./Button";
import AuthContext from "../Context/auth-context";




const DoctorReview = () => {
  const auth = useContext(AuthContext);

  const doctorId = useParams().did;

  const initialValues = {
    dateStart: "",
    dateEnd: "",
  };

  const validationSchema = Yup.object().shape({
    dateStart: Yup.string().required(),
    dateEnd: Yup.string().required(),
  });

  const onSubmit = async (data) => {
    try {
        const responseData = await axios.post(
          `http://localhost:8080/doctors/rating/${doctorId}`,
          {
            rating: data.rating,
          }
        );
        console.log(data);
        // console.log(typeof data.startDate);
        console.log(responseData.data);
      } catch (err) {}
    };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      <Form>
        <div>
          {/* <Field id="rating" name="rating" /> */}
          <input id="rating" name="rating" />
          {auth.isLoggedIn && (
            <Button type="submit" onClick={onSubmit}>
              Recenzie!!!
            </Button>
          )}
        </div>
      </Form>
    </Formik>
  );
};

export default DoctorReview;
