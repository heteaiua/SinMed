import React, { useEffect, useState } from "react";

import Avatar from "../GeneralComponents/Avatar";
import Card from "../GeneralComponents/Card";
import Button from "./Button";
import { useHttpClient } from "../Hooks/http-hook";

import "./SpecializationItem.css";

const SpecializationItem = (props) => {
  const { isLoading, isError, sendRequest, clearError } = useHttpClient();
  const [loadedDoctors, setLoadedDoctors] = useState();

  // useEffect(() => {
  // const fetchDoctors = async () => {
  //   try {
  //     const responseData = await sendRequest(`http://localhost:8080/doctors/specializations/${props.id}`);
  //     setLoadedDoctors(responseData.doctors);
  //     // console.log(responseData.doctor);
  //   } catch (err) {}
  // };
  // fetchDoctors();
  // }, [sendRequest]);

  console.log(props);

  return (
    <li className="specialization-item">
      <Card className="specialization-item__content">
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
        <div>
          <Button to={`/doctors/specializations/${props.id}`}>
            View Doctors
          </Button>
        </div>
      </Card>
    </li>
  );
};

export default SpecializationItem;
