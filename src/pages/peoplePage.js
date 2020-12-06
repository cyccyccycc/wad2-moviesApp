import React, {useState, useEffect } from "react";
import Header from "../components/peopleheaderList";
import PeopleList from "../components/peopleList";
import { getpeople } from "../api/tmdb-api";
import StubAPI from "../api/stubAPIpeople";

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

    const addFavorites = peopleId => {
      const index = peoples.map(m => m.id).indexOf(peopleId)
      StubAPI.add(peoples[index])
      const updatedList = [...peoples]
      updatedList.splice(index, 1)
      setPeoples(updatedList)  
    }
  return (
    <>
      <Header numPeoples={displayedPeoples.length} />
      <PeopleList peoples={displayedPeoples}
        buttonHandler={addFavorites} />
    </>
  );
}
export default PeoplePage;