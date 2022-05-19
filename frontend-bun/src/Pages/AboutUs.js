import React from "react";

import "./AboutUs.css";
const AboutUs = (props) => {
  return (
    <>
      <div class="title">
        <h1>SinMed Medical Clinic</h1>
        <h3>
          Oferim servicii medicale de cea mai bună calitate de peste 25 de ani
        </h3>
      </div>

      <div class="center">
        <div class="property-card">
          <div class="property-image"></div>

          <div class="property-description">
            <h5> Valorile noastre </h5>
            <p>Siguranța pacienților</p>
            <p>Respect pentru pacienți </p>
            <p>Responsabilitate</p>
            <p>Profesionalism </p>
            <p>Pasiune pentru inovație</p>
          </div>

          <div class="property-social-icons"></div>
        </div>

        <div class="property-card1">
          <div class="property-image1"></div>

          <div class="property-description1">
            <h5> Misiunea noastra </h5>
            <p>
              Misiunea noastră este sănătatea tuturor pacienților. De aceea,
              oferim cele mai înalte standarde în ceea ce privește serviciile
              medicale private.
            </p>
          </div>
        </div>

        <div class="property-card2">
          <div class="property-image2"></div>

          <div class="property-description2">
            <h5> Viziunea noastra </h5>
            <p>
              este de a obține şi menţine o reputaţie maximă a spitalului prin
              calitate contribuind în mod major la creșterea calității vieții
              membrilor comunității deservite.
            </p>
          </div>
        </div>
      </div>
      <div class="despreNumbers">
        <h3>25+</h3>
        <p2>de ani de experienta</p2>
        <h3>15,000</h3>
        <p2>pacienti multumiti lunar</p2>
        <h3>25+</h3>
        <p2>premii si certificari</p2>
      </div>
    </>
  );
};
export default AboutUs;
