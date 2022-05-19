import React from "react";

import Card from "../GeneralComponents/Card";
import SpecializationItem from "./SpecializationItem";
import "./SpecializationsList.css";

const SpecializationsList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No specializations found.</h2>
        </Card>
      </div>
    );
  }
  return (
    <ul className="specializations-list">
      {props.items.map((specialization) => {
        return (
          <SpecializationItem
            key={specialization.id}
            id={specialization._id}
            name={specialization.name}
            image={specialization.image}
            //add description
          />
        );
      })}
    </ul>
  );
};

export default SpecializationsList;
