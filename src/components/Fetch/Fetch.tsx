import React, { FunctionComponent, useEffect } from "react";

export const Fetch: FunctionComponent = () => {
  useEffect(() => {
    fetch("http://localhost:4000/api/user/getall")
      .then((response) => Promise.all([response.ok, response.json(), response.status]))
      .then(([isSuccess, data, statusCode]) => {
        if (isSuccess) {
          console.log("Success!");
          console.log(data);
        } else {
          console.log("Failure!");
          console.log({ statusCode, originalError: data });
          throw new Error(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <h1>Regular Fetch</h1>;
};
