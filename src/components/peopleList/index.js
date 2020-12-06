import React from "react";
import People from "../peoplecard/";
import "./peopleList.css";

const PeopleList = props => {
  const peoplecards = props.peoples.map(m => (
    <People key={m.id} people={m} buttonHandler={props.buttonHandler} />
  ));
  return <div className="row movies bg-info">{peoplecards}</div>;
};

export default PeopleList;