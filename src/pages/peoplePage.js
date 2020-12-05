import React from "react";
import Header from "../components/peopleheader";


const peoplePage = ({people}) => {
  return (
    <>
      <Header numpeople={people.length} />

    </>
  );
};

export default peoplePage;