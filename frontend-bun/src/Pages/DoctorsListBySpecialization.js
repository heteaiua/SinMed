import React, { useEffect, useState } from "react";

import DoctorsList from "../Components/DoctorsList";
import SpecializationsList from "../Components/SpecializationsList";

import { useHttpClient } from "../Hooks/http-hook";
import { useParams } from "react-router-dom";

const DoctorsListBySpecialization = (props) => {
  const { isLoading, isError, sendRequest, clearError } = useHttpClient();
  const specializationId = useParams().sid;
  const [loadedDoctors, setLoadedDoctors] = useState();

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:8080/doctors/specializations/${specializationId}`
        );
        console.log(responseData);
        // console.log(props);
        console.log(specializationId);
        setLoadedDoctors(responseData.doctors);
      } catch (err) {}
    };
    fetchDoctors();
  }, [sendRequest, specializationId]);

  return <div>{loadedDoctors && <DoctorsList items={loadedDoctors} />}</div>;
};

export default DoctorsListBySpecialization;
