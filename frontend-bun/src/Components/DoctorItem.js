import React from "react";
import { Link } from "react-router-dom";

import Card from "./Card";
import Avatar from "./Avatar";
import Button from "./Button";
import "./DoctorItem.css";

const DoctorItem = (props) => {
  return (
    <li className="doctor-item">
      <Card className="doctor-item__content">
        <div className="doctor-item__name">
          <h2>{props.name}</h2>
        </div>
        <div className="doctor-item__image">
          <Avatar image={props.image} alt={props.name} />
          {/* add image to doctor field */}
        </div>
        <div className="doctor-item__description">
          <h3>{props.description} description</h3> 
          {/* add description to doctor field */}
        </div>
        <Button>Programare</Button>
        <Button>Recenzie</Button>
      </Card>
    </li>
  );
};

export default DoctorItem;
