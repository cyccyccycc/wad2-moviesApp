import React, { useState, useEffect } from "react";
import StubAPI from "../api/stubAPIpeople";
import { getpeoples } from "../api/tmdb-api";

export const PeoplesContext = React.createContext(null)

const PeoplesContextProvider = props => {
  const [peoples, setPeoples] = useState([]);

  const addFavorites = peopleId => {
    setPeoples(peoples => {
      const index = peoples.map(m => m.id).indexOf(peopleId);
      StubAPI.add(peoples[index])
      peoples.splice(index, 1)
      return [...peoples]
    });
  };
  useEffect(() => {
    getpeoples().then(peoples => {
      setPeoples(peoples);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PeoplesContext.Provider
      value={{
        peoples: peoples,
        addFavorites: addFavorites
      }}
    >
      {props.children}
    </PeoplesContext.Provider>
  );
};

export default PeoplesContextProvider