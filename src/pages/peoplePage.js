import React, {useState, useEffect } from "react";
import Header from "../components/peopleheaderList";
import PeopleList from "../components/peopleList";
import { getpeople } from "../api/tmdb-api";

const PeoplePage = () => {
  const [nameFilter] = useState("");       // NEW

  const [peoples, setPeoples] = useState([]);
  useEffect(() => {
    getpeople().then(peoples => {
      setPeoples(peoples);
    });
  }, []);
  let displayedPeoples = peoples
    .filter(m => {
      return m.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    });

  return (
    <>
      <Header numPeoples={displayedPeoples.length} />
      <PeopleList peoples={displayedPeoples} />
    </>
  );
}
export default PeoplePage;