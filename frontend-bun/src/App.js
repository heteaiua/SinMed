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
import DoctorsListBySpecialization from "./Pages/DoctorsListBySpecialization";
import Prices from "./Pages/Prices";
import DoctorReview from "./Components/DoctorReview";

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
              path="/Appointments/:did"
              element={<NewAppointment />}
            />
            <Route path="/doctors/rating" element={<DoctorReview />} />
            <Route path="/Appointments" element={<Appointments />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/About_Us" element={<AboutUs />} />
            <Route path="/Prices" element={<Prices />} />
          </Routes>
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
