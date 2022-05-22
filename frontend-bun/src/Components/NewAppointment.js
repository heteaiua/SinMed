// import React from "react";

// const NewAppointment = () => {
//   return <h1>Hello</h1>;
// };

// export default NewAppointment;

// import {
//   TimePicker,
//   MuiPickersUtilsProvider,
//   KeyboardDatePicker,
// } from "@material-ui/pickers";
// import DateFnsUtils from "@date-io/date-fns";
import React, { Fragment, useState, useEffect, useContext } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import AuthContext from "../Context/auth-context";
import Button from "./Button";
import Modal from "./Modal";
import { useParams } from "react-router-dom";
import { useHttpClient } from "../Hooks/http-hook";

const NewAppointment = () => {
  const auth = useContext(AuthContext);

  const [showModal, setShowModal] = useState(true);

  const doctorId = useParams().did;

  // const [dateStart, setStartDate] = useState("");
  // const [dateEnd, setEndDate] = useState("");

  const initialValues = {
    dateStart: "",
    dateEnd: "",
  };

  const validationSchema = Yup.object().shape({
    dateStart: Yup.string().required(),
    dateEnd: Yup.string().required(),
  });

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const onSubmit = async (data) => {
    // console.log(auth.patientId);
    // console.log(doctorId);
    console.log(data);
    // console.log(data); //undefined cu tip Date in appointment(backend)
    //undefined si cu String

    try {
      const responseData = await axios.post(
        `http://localhost:8080/appointments/${auth.patientId}/${doctorId}`,
        {
          dateStart: data.dateStart,
          dateEnd: data.dateEnd,
        }
      );
      console.log(data);
      // console.log(typeof data.startDate);
      console.log(responseData.data);
    } catch (err) {}
  };

  // const refreshFunction = (e) => {
  //   e.preventDefault();
  //   onSubmit();
  // };

  // return (
  //   <div>
  //     <form className="center">
  //       <label>muie:</label>
  //       <input
  //         type="text"
  //         // name="startDate"
  //         onChange={(e) => setStartDate(e.target.value)}
  //         value={dateStart}
  //       />
  //       <label>brenciu:</label>
  //       <input
  //         type="text"
  //         // name="endDate"
  //         onChange={(e) => setEndDate(e.target.value)}
  //         value={dateEnd}
  //       />
  //     </form>
  //     <Button type="submit" onClick={onSubmit}>MUIE BRENCIU</Button>
  //   </div>
  // );

  return (
    <div className="center">
      {auth.isLoggedIn && (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form>
            <label>Start date:</label>
            <Field
              id="dateStart"
              name="dateStart"
              // onChange={(e) => setStartDate(e.target.value)}
              // value={startDate}
            />
            <label>End date:</label>
            <Field
              id="dateEnd"
              name="dateEnd"
              // onChange={(e) => setEndDate(e.target.value)}
              // value={endDate}
            />
            <Button type="submit">Submit</Button>
          </Form>
        </Formik>
      )}
      {!auth.isLoggedIn && (
        // <Button to="/login">LOGIN first</Button>
        <Modal show={showModal} onCancel={closeModalHandler}>
          <Button onClick={closeModalHandler} to="/login">
            Please login first
          </Button>
        </Modal>
      )}
    </div>
  );

  // return (
  //   <div className="center">
  //     <form>
  //       <label>Start date</label>
  //       <input  />
  //       <label>End date</label>
  //       <input  />
  //       <Button invert onClick={refreshFunction}>
  //         Submit
  //       </Button>
  //     </form>
  //   </div>
  // );

  // const [showModal, setShowModal] = useState(true);

  // const closeModalHandler = () => {
  //   setShowModal(false);
  // };

  // const [selectedTime, setTime] = useState(new Date());
  // const [selectedDate, handleDateChange] = useState(new Date());

  // const handleTimeChange = (val) => {
  //   const hours = new Date(val).getHours();
  //   const minutes = new Date(val).getMinutes();
  //   const seconds = new Date(val).getSeconds();
  //   console.log(`${hours}:${minutes}:${seconds}`);
  //   setTime(val);
  // };

  // return (
  //   <Fragment>
  //     {auth.isLoggedIn && (
  //       <MuiPickersUtilsProvider utils={DateFnsUtils}>
  //         <KeyboardDatePicker
  //           clearable
  //           inputVariant="outlined"
  //           value={selectedDate}
  //           placeholder="10/10/2018"
  //           onChange={(date) => handleDateChange(date)}
  //           minDate={new Date()}
  //           format="MM/dd/yyyy"
  //           label="Set Date"
  //         />
  //         <br />
  //         <br />
  //         <br />
  //         <TimePicker
  //           ampm={false}
  //           openTo="hours"
  //           views={["hours", "minutes", "seconds"]}
  //           format="HH:mm:ss"
  //           label="Set Hours,min,sec"
  //           value={selectedTime}
  //           onChange={handleTimeChange}
  //         />
  //       </MuiPickersUtilsProvider>
  //     )}
  //     {!auth.isLoggedIn && (
  //       <Modal show={showModal} onCancel={closeModalHandler} >
  //         <Button inverse onClick={closeModalHandler} to="/login">Please login first.</Button>
  //       </Modal>
  //     )}
  //   </Fragment>
  // );
};

export default NewAppointment;
