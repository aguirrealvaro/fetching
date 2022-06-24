import React, { FunctionComponent, useEffect } from "react";

export const AsyncFetch: FunctionComponent = () => {
  useEffect(() => {
    const handleFetch = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/user/getall");
        const data = await response.json();

        if (response.ok) {
          console.log("Success");
          console.log(data);
        } else {
          console.log("Failure!");
          console.log({ statusCode: response.status, originalError: data });
        }
      } catch (err) {
        console.log(err);
      }
    };

    handleFetch();
  }, []);

  return <h1>Async Fetch</h1>;
};
