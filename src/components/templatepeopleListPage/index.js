import React, { useState } from "react";
import Header from "../peopleheaderList";
import PeopleList from "../peopleList";

const PeopleListPageTemplate = ({peoples, name, buttonHandler}) => {
  const [nameFilter] = useState("");
  let displayedPeoples = peoples
    .filter(m => {
      return m.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    });
  return (
    <>
      <Header numPeoples={displayedPeoples.length} />
      <PeopleList
        buttonHandler={buttonHandler}
        peoples={displayedPeoples}
      ></PeopleList>
    </>
  );
};

export default PeopleListPageTemplate ;