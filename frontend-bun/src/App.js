import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Title from "./Components/Title";
import Menu from "./Components/Menu";
import Sidebar from "./Components/Sidebar";
import Home from "./Pages/Home";
import Specializations from "./Pages/Specializations";
import Doctors from "./Pages/Doctors";
import Contact from "./Pages/Contact";
import AboutUs from "./Pages/AboutUs";

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Specializations" element={<Specializations />} />
          <Route path="/Doctors" element={<Doctors />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/About_Us" element={<AboutUs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
