import React, { useCallback, useContext, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Sidebar from "./Components/Navigation/Sidebar";
import Home from "./Pages/Home";
import Specializations from "./Pages/Specializations";
import Doctors from "./Pages/Doctors";
import NewAppointment from "./Components/NewAppointment";

import Appointments from "./Pages/Appointments";
import Contact from "./Pages/Contact";
import AboutUs from "./Pages/AboutUs";
import AuthContext from "./Context/auth-context";
import SpecializationItem from "./Components/SpecializationItem";
import DoctorsListBySpecialization from "./Pages/DoctorsListBySpecialization";

function App() {
  const auth = useContext(AuthContext);

  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [patientId, setPatientId] = useState("");

  const login = useCallback((pid) => {
    setIsLoggedIn(true);
    setPatientId(pid);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setPatientId(null);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Specializations" element={<Specializations />} />
        <Route path="/Doctors" element={<Doctors />} />
        <Route path="/Appointments/:doctorId" element={<NewAppointment />} />
        <Route path="/Appointments" element={<Appointments />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/login" element={<Login />} /> */}

        {/* <Navigate to="/Home" /> */}
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Specializations" element={<Specializations />} />
        <Route path="/Doctors" element={<Doctors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Appointments" element={<Appointments />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route
          path="/Appointments/:doctorId"
          element={<Navigate replace to="login" />}
        /> */}
        {/* vreau aici cand apas pe Programare sa ma redirectioneze la Login */}
      </Routes>
    );
  }
  // return (
  //   <AuthContext.Provider
  //     value={{
  //       isLoggedIn: isLoggedIn,
  //       patientId: patientId,
  //       login: login,
  //       logout: logout,
  //     }}
  //   >
  //     <main>{routes}</main>
  //   </AuthContext.Provider>
  // );
  return (
    <div className="App">
      <AuthContext.Provider
        value={{
          isLoggedIn: isLoggedIn,
          patientId: patientId,
          login: login,
          logout: logout,
        }}
      >
        <Router>
          <Sidebar />
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Specializations" element={<Specializations />} />
            <Route path="/Doctors" element={<Doctors />} />
            <Route
              path="/Doctors/Specializations/:sid"
              element={<DoctorsListBySpecialization />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/Appointments/:doctorId"
              element={<NewAppointment />}
            />
            <Route path="/Appointments" element={<Appointments />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/About_Us" element={<AboutUs />} />
          </Routes>
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
