import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div className="flex flex-col justify-center items-center my-32 space-y-4">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-xl font-semibold">
        Opps! Unexpected error has occurred
      </p>
      <p className="italic opacity-75">{error.statusText || error.message}</p>
    </div>
  );
};

export default Error;
