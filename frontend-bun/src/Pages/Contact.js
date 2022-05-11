import React from "react";
import Card from "../GeneralComponents/Card";

import "./Contact.css";
const Contact = (props) => {
  return (
    <>
      <div className="titleContact">
        <h1>SinMed Medical Clinic</h1>
        <h4>Contact Us</h4>
      </div>
      <Card className="card">
        <div className="orarContact">
          <h2>Orar</h2>

          <h4>Luni - Vineri - 07:00-20:00</h4>
          <h4>Sambata - 08:00-13:00</h4>
          <h4>Duminică - închis</h4>

          <h2>Orar Sarbatori</h2>
          <h4>Sambata - 30.04.2022 - INCHIS</h4>
          <h2>Programare telefonica</h2>
          <h4>0264-411-390</h4>
        </div>
      </Card>
    </>
  );
};
export default Contact;
