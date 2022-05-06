import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Card from "../GeneralComponents/Card";
import Avatar from "../GeneralComponents/Avatar";
import Button from "./Button";
import Modal from "./Modal";
import "./DoctorItem.css";
import axios from "axios";

const DoctorItem = (props) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const onSubmit = (data) => {
    console.log("aaa " + data);
    axios
      .patch(`http://localhost:8080/rating/${props.id}`, {
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

  function someFunction(e) {
    e.preventDefault();
    closeModalHandler();
    onSubmit();
  }

  return (
    <React.Fragment>
      <li className="doctor-item">
        <Card className="doctor-item__content">
          <Link to={`/${props.id}/doctors`} />
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
          <Button inverse onClick={openModalHandler}>
            Recenzie
          </Button>
          <Modal
            show={showModal}
            onCancel={closeModalHandler}
            footer={
              <React.Fragment>
                    <Button type="submit" onClick={someFunction}>
                      Recenzie!!!
                    </Button>
                <Button inverse onClick={closeModalHandler}>
                  Close
                </Button>
              </React.Fragment>
            }
          >
            <h1>Please leave a number as a review.</h1>
            <input></input>
          </Modal>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default DoctorItem;
