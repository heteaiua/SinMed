// import React from "react";

// const NewAppointment = () => {
//   return <h1>Hello</h1>;
// };

// export default NewAppointment;

import React, { Fragment, useState, useEffect, useContext } from "react";
import {
  TimePicker,
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import AuthContext from "../Context/auth-context";
import Button from "./Button";
import Modal from "./Modal";

function Appointments() {
  const [showModal, setShowModal] = useState(true);

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const auth = useContext(AuthContext);
  const [selectedTime, setTime] = useState(new Date());
  const [selectedDate, handleDateChange] = useState(new Date());

  const handleTimeChange = (val) => {
    const hours = new Date(val).getHours();
    const minutes = new Date(val).getMinutes();
    const seconds = new Date(val).getSeconds();
    console.log(`${hours}:${minutes}:${seconds}`);
    setTime(val);
  };

  return (
    <Fragment>
      {auth.isLoggedIn && (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            clearable
            inputVariant="outlined"
            value={selectedDate}
            placeholder="10/10/2018"
            onChange={(date) => handleDateChange(date)}
            minDate={new Date()}
            format="MM/dd/yyyy"
            label="Set Date"
          />
          <br />
          <br />
          <br />
          <TimePicker
            ampm={false}
            openTo="hours"
            views={["hours", "minutes", "seconds"]}
            format="HH:mm:ss"
            label="Set Hours,min,sec"
            value={selectedTime}
            onChange={handleTimeChange}
          />
        </MuiPickersUtilsProvider>
      )}
      {!auth.isLoggedIn && (
        <Modal show={showModal} onCancel={closeModalHandler} >
          <Button inverse onClick={closeModalHandler} to="/login">Please login first.</Button>
        </Modal>
      )}
    </Fragment>
  );
}

export default Appointments;
