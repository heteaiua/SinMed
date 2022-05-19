import React, { useEffect, useState } from "react";

import DoctorsList from "../Components/DoctorsList";
import { useHttpClient } from "../Hooks/http-hook";
import { useParams } from "react-router-dom";

const Doctors = () => {
  const { isLoading, isError, sendRequest, clearError } = useHttpClient();
  const doctorId  = useParams().doctorId;
  const  specializationId = useParams().specializationId;

  const [loadedDoctors, setLoadedDoctors] = useState();

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:8080/doctors/`
        );
        // console.log(responseData.doctors);
        // console.log(doctorId);
        console.log(specializationId);
        setLoadedDoctors(responseData.doctors);
      } catch (err) {}
    };
    fetchDoctors();
  }, [sendRequest]);

  return <div>{loadedDoctors && <DoctorsList items={loadedDoctors} />}</div>;
};

export default Doctors;
