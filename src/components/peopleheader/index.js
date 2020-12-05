import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../globals/fontawesome";

const peopleHeader = ({ people }) => {
  return (
    <div className="row">
      <div className="col-6 offset-3">
        <h2>
          {people.id}
          {"  "}
          <a href={people.homepage}>
            <FontAwesomeIcon icon={["fas", "home"]} size="1x" />
          </a>
        </h2>
      </div>
    </div>
  );
};

export default peopleHeader;