import React, {useState, useEffect } from "react";
import Header from "../components/peopleheader";
import PeopleList from "../components/peopleList";
import { getpeople } from "../api/tmdb-api";



const peoplePage = () => {
  const [peoples, setPeoples] = useState([]);
  useEffect(() => {
    getpeople().then(peoples => {
      setMovies(peoples);
    });
  }, []);
  return (
    <>
      <Header idPeoples={peoples.length} />
      <PeopleList peoples={peoples} />
    </>
  );
}
export default peoplePage;