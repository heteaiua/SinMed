import React from "react";

import AppointmentsItem from "./AppointmentsItem";
import Card from "../GeneralComponents/Card";
import "./AppointmentsList.css";

const AppointmentsList = (props) => {
  //   console.log(props.items.length);
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No appointments found.</h2>
        </Card>
      </div>
    );
  }
  return (
    <ul className="appointments-list">
      {props.items.map((appointment) => {
        return (
          <AppointmentsItem
            key={appointment.id}
            id={appointment._id}
            idPatient={appointment.idPatient}
            idDoctor={appointment.idDoctor}
            dateStart={appointment.dateStart}
            dateEnd={appointment.dateEnd}
            // name={appointment.lastName}
            // image={appointment.image} //add image
            // rating={appointment.rating}
          />
        );
      })}
    </ul>
  );
};

export default AppointmentsList;
