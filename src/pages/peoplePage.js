import React, { useState, useEffect } from "react";
import StubAPI from "../api/stubAPIpeople";
import PageTemplate from '../components/templatepeopleListPage'
import { getpeoples } from "../api/tmdb-api";

const PeopleListPage = () => {
  const [peoples, setPeoples] = useState([]);
  useEffect(() => {
    getpeoples().then(peoples => {
      setPeoples(peoples);
    });
  }, []);

  const addFavorites = peopleId => {
    setPeoples(peoples => {
      const index = peoples.map(m => m.id).indexOf(peopleId);
      StubAPI.add(peoples[index]);
      let newPeoplesState = [...peoples]
      newPeoplesState.splice(index, 1);
      return newPeoplesState;
    });
  };

  return (
      <PageTemplate
        title='NO People'
        peoples={peoples}
        buttonHandler={addFavorites}
      />
  );
};

export default PeopleListPage;