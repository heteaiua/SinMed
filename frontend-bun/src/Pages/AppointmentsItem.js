import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import Card from "../GeneralComponents/Card";
import Avatar from "../GeneralComponents/Avatar";
import Button from "../Components/Button";
// import Modal from "./Modal";
import "./AppointmentsItem.css";
import axios from "axios";
import { Field, Formik, Form } from "formik";
import AuthContext from "../Context/auth-context";

const AppointmentItem = (props) => {
  const auth = useContext(AuthContext);

  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const openModalHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const deleteHandler = async () => {
    try {
      await axios.delete(`http://localhost:8080/appointments/${props.id}`);
    } catch (err) {}
  };

  return (
    <React.Fragment>
      <li className="appointment-item">
        <Card className="appointment-item__content">
          <Link to={`/${props.id}`} />
          <h2>ACESTA ESTE O PROGRAMARE</h2>
          <div>{props.idPatient}</div>
          <div>{props.idDoctor}</div>
          <div>{props.dateStart}</div>
          <div>{props.dateEnd}</div>
          <div className="appointment-item__name">
            <h2>{props.name}</h2>
          </div>
          <div className="appointment-item__image">
            <Avatar image={props.image} alt={props.name} />
            {/* add image to doctor field */}
          </div>
          <div className="doctor-item__rating">
            <h3>{props.rating}</h3>
          </div>
          <Button onClick={deleteHandler}>DELETE</Button>
          {/* <Button to={`/Appointments/${props.id}`}>Programare</Button> */}
          {/* butonul de Recenzie dispare daca nu e logat pacientul */}
          {/* {auth.isLoggedIn && (
            <Modal show={showModal} onCancel={closeModalHandler}>
              <Button inverse onClick={openModalHandler}>
                Recenzie
              </Button>
            </Modal>
          )} */}
          {/* lasam afara modalul, ne bagam in el */}
          {/* {auth.isLoggedIn && (
            <Button danger onClick={openModalHandler}>
              Recenzie
            </Button>
          )} */}
        </Card>
      </li>
    </React.Fragment>
  );
};

export default AppointmentItem;
