import axios from "axios";
import React, { FunctionComponent, useEffect } from "react";

export const Axios: FunctionComponent = () => {
  useEffect(() => {
    const handleFetch = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/user/getall");
        console.log({ response });
      } catch (err) {
        const { status, data } = err.response;
        console.log({ statusCode: status, originalError: data });
      }
    };

    handleFetch();
  }, []);

  return <h1>Axios</h1>;
};
