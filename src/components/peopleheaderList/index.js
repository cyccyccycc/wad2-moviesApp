import React from "react";

const Header = ({ numPeoples }) => {
  return (
    <div className="row">
      <div className="col-md-6 offset-4">
        <h2>
          No. people{" "}
          <span className="badge badge-pill badge-success">{numPeoples}</span>
        </h2>
      </div>
    </div>
  );
};

export default Header;