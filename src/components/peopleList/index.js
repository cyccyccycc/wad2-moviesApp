import React from "react";
import People from "../peoplecard/";
import "./peopleList.css";

const peopleList = props => {
  const peoplecards = props.people.map(m => (
    <People key={m.id} people={m} />
  ));
  return <div className="row movies bg-info">{peoplecards}</div>;
};

export default peopleList;