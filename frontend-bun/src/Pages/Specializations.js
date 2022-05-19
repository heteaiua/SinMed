import React, { useState, useEffect } from "react";
import SpecializationsList from "../Components/SpecializationsList";
import { useHttpClient } from "../Hooks/http-hook";

const Specializations = () => {
  const { isLoading, isError, sendRequest, clearError } = useHttpClient();
  
  const [loadedSpecializations, setLoadedSpecializations] = useState();

  useEffect(() => {
    const fetchSpecializations = async () => {
      try {
        const responseData = await sendRequest(
          "http://localhost:8080/specializations"
        );
        setLoadedSpecializations(responseData.specializations);
        console.log(responseData);
      } catch (err) {}
    };
    fetchSpecializations();
  }, [sendRequest]);
  return (
    <div>
      {loadedSpecializations && (
        <SpecializationsList items={loadedSpecializations} />
      )}
    </div>
  );
};

export default Specializations;
