import React, { useContext, useEffect, useState } from "react";

import AppointmentsList from "./AppointmentsList";
import { useHttpClient } from "../Hooks/http-hook";
import { useParams } from "react-router-dom";
import AuthContext from "../Context/auth-context";

const Appointments = () => {
  const { isLoading, isError, sendRequest, clearError } = useHttpClient();
  // const doctorId  = useParams().doctorId;
  // const  specializationId = useParams().specializationId;
  const auth = useContext(AuthContext);

  const [loadedAppointments, setLoadedAppointments] = useState();

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:8080/appointments/${auth.patientId}`
        );
        setLoadedAppointments(responseData.userAppointments);
        // console.log(loadedAppointments);
        console.log(responseData);
      } catch (err) {}
    };
    fetchDoctors();
  }, [sendRequest]);

  return <div>{loadedAppointments && <AppointmentsList items={loadedAppointments} />}</div>;
};

export default Appointments;
