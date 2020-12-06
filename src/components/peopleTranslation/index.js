import React from "react";

export default ({ translation }) => {
  return (
    <>
      <p>Review By: {translation.name} </p>
      <p>{translation.biography} </p>
    </>
  );
};