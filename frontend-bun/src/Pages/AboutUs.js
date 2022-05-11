import React from "react";

import "./AboutUs.css";
const AboutUs = (props) => {
  return (
    <>
      <div class="title">
        <h1>SinMed Medical Clinic</h1>
        <h4>About Us</h4>
      </div>
      <div class="center">
        <div class="property-card">
          <a href="#">
            <div class="property-image">
              <div class="property-image-title">
                <h5>SinMed</h5>
              </div>
            </div>
          </a>
          <div class="property-description">
            <h5> SinMed </h5>
            <p>
              Suntem aici pentru a dezvolta infrastructura modernă și complexă
              ce arată respect și grijă pentru pacient. Ne clădim viitorul prin
              educație pentru generațiile de asistenți medicali care să aleagă
              să rămână în România și investim în formarea celor mai valoroși
              medici cărora le punem la dispoziție tehnologia viitorului.
            </p>
          </div>
          <a href="#">
            <div class="property-social-icons"></div>
          </a>
        </div>
        <div class="center1">
          <div class="property-card1">
            <a href="#">
              <div class="property-image"></div>
            </a>
            <div class="property-description">
              <h5> Ale </h5>
              <p>Alexandra Pop</p>
            </div>
            <a href="#">
              <div class="property-social-icons"></div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutUs;
