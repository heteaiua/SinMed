import React from "react";

import DoctorItem from "./DoctorItem";
import Card from "./Card";
import "./DoctorsList.css";

const DoctorsList = (props) => {
//   console.log(props.items.length);
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No doctors found.</h2>
        </Card>
      </div>
    );
  }
  return (
    <ul className="doctors-list">
      {props.items.map((doctor) => {
        return (
          <DoctorItem
            key={doctor.id}
            id={doctor.id}
            name={doctor.lastName}
            image={doctor.image} //add image
            //add description?
          />
        );
      })}
    </ul>
  );
};

export default DoctorsList;
