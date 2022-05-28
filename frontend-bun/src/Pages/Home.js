import React from "react";

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import './Home.css';

import Button from "../Components/Button";

const handleDragStart = (e) => e.preventDefault();

const Home = () =>{
    return (
        <div className="banner">
            <div className="content">
                <h1>WE CARE ABOUT YOUR <span>HEALTH</span></h1>
                <p>High proffesional doctors level. Your health is our top priority</p>
                <div className="buttons">
                    <Button to="/About_us">About Us</Button>
                </div>
            </div>
        </div>
    );
}

export default Home;