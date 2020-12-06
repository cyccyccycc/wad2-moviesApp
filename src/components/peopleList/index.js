import React from "react";
import People from "../peoplecard/";
import "./peopleList.css";

const PeopleList = ({peoples, action}) => {
  const peoplecards = peoples.map(m => (
    <People key={m.id} people={m} action={action} />
  ));
  return <div className="row movies bg-info">{peoplecards}</div>;
};

export default PeopleList;