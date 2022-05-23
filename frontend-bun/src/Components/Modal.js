import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import Backdrop from "./Backdrop";
import "./Modal.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Formik, Form, Field } from "formik";

import Button from "./Button";
import AuthContext from "../Context/auth-context";

const ModalOverlay = (props) => {
  const auth = useContext(AuthContext);

  const navigate = useNavigate();

  const initialValues = {
    rating: "",
  };

  const onSubmit = async (data) => {
    console.log(data);
    const responseData = await axios.patch(
      `http://localhost:8080/doctors/rating/${props.doctorId}`,
      {
        rating: data.rating,
      }
    );
    // navigate("/Doctors");
    console.log(responseData.data);
  };

  const content = (
    <div className={`modal ${props.className}`} style={props.style}>
      <header className={`modal__header ${props.headerClass}`}>
        <h2>{props.header}</h2>
      </header>

      <div className={`modal__content ${props.contentClass}`}>
        {props.children}
      </div>
      <footer className={`modal__footer ${props.footerClass}`}>
        {auth.isLoggedIn && (
          <Formik
            initialValues={initialValues}
            // validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form className="...">
              <label>Rating:</label>
              <Field id="rating" name="rating" />
              <Button type="submit">Recenzeaza</Button>
            </Form>
          </Formik>
        )}

        {props.footer}
      </footer>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
      >
        <ModalOverlay {...props} />
      </CSSTransition>
    </React.Fragment>
  );
};

export default Modal;
