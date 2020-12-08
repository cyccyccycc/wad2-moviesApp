import React from "react";
import { Link } from "react-router-dom";

const BlessingButton = ({ people }) => {
  return (
    <Link
      className="btn w-100 btn-primary "
      to={{
        pathname: `/blessings/form`,
        state: {
          people: people
        }
      }}
    >
      Write a Blessing
    </Link>
  );
};

export default BlessingButton;