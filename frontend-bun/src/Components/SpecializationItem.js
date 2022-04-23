import React from "react";

import Avatar from "./Avatar";
import Card from "./Card";
import "./SpecializationItem.css";

const SpecializationItem = (props) => {
  return (
    <li className="specialization-item">
      <Card className='specialization-item__content'>
        <div className="specialization-item__name">
          <h2>{props.name}</h2>
        </div>
        <div className="specialization-item__image">
          <Avatar image={props.image} alt={props.name} />
          {/* add image to specialization field */}
        </div>
        <div className="specialization-item__description">
          <h3>{props.description} description</h3>
          {/* add description to specialization field */}
        </div>
      </Card>
    </li>
  );
};

export default SpecializationItem;
