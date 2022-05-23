import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import Card from "../GeneralComponents/Card";
import Avatar from "../GeneralComponents/Avatar";
import Button from "./Button";
import Modal from "./Modal";
import "./DoctorItem.css";
import axios from "axios";
import { Field, Formik, Form } from "formik";
import AuthContext from "../Context/auth-context";

const DoctorItem = (props) => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  // const initialValues = {
  //   rating: "",
  // };

  const onSubmit = (data) => {
    axios
      .post(`http://localhost:8080/doctors/rating/${props.id}`, {
        rating: data.rating,
      })
      .then(() => {
        navigate("/Doctors");
      });
  };

  const openModalHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  // function someFunction(e) {
  //   // e.preventDefault();
  //   closeModalHandler();
  //   onSubmit();
  //   // window.location.reload(false);
  // }

  return (
    <React.Fragment>
      <li className="doctor-item">
        <Card className="doctor-item__content">
          {/* <Link to={`/${props.id}/doctors`} /> */}
          <div className="doctor-item__name">
            <h2>{props.name}</h2>
          </div>
          <div className="doctor-item__image">
            <Avatar image={props.image} alt={props.name} />
            {/* add image to doctor field */}
          </div>
          <div className="doctor-item__rating">
            <h3>{props.rating}</h3>
          </div>
          <Button to={`/Appointments/${props.id}`}>Programare</Button>
          {/* butonul de Recenzie dispare daca nu e logat pacientul */}
          {auth.isLoggedIn && (
            <Button inverse onClick={openModalHandler}>
              Recenzie
            </Button>
          )}
          {/* <Modal
            show={showModal}
            onCancel={closeModalHandler}
            // footer={
            //   <React.Fragment>
            //     <Button inverse onClick={closeModalHandler}>
            //       Close
            //     </Button>
            //   </React.Fragment>
            // }
          > */}
          {/* lasam afara modalul, ne bagam in el */}
          <h1>Please leave a number as a review.</h1>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default DoctorItem;
