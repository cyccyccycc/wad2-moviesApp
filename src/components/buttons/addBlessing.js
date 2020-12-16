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
      <button id ='99'>
      Write a Blessing
      </button>
    </Link>
  );
};

export default BlessingButton;