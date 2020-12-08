import React, { useEffect, createContext, useReducer } from "react";
import { getpeoples } from "../api/tmdb-api";

export const PeoplesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "add-favorite":
      return {
        peoples: state.peoples.map((n) =>
          n.id === action.payload.people.id ? { ...n, favorite: true } : n
        ),
      };
    case "load":
      return { peoples: action.payload.peoples };
    case "add-blessing":
        return {
          peoples: state.peoples.map((n) =>
            n.id === action.payload.people.id
              ? { ...n, blessing: action.payload.blessing }
              : n
          ),
        };
      break;
    default:
      return state;
  }
};

const PeoplesContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { peoples: [] });

  const addFavorites = (peopleId) => {
    const index = state.peoples.map((n) => n.id).indexOf(peopleId);
    dispatch({ type: "add-favorite", payload: { people: state.peoples[index] } });
  };

  const addBlessing = (people, blessing) => {
    dispatch({ type: "add-blessing", payload: { people, blessing } });
  };
  useEffect(() => {
    getpeoples().then((peoples) => {
      dispatch({ type: "load", payload: { peoples } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PeoplesContext.Provider
      value={{
        peoples: state.peoples,
        favorites: state.favorites,
        addFavorites: addFavorites,
        addBlessing: addBlessing,
      }}
    >
      {props.children}
    </PeoplesContext.Provider>
  );
};

export default PeoplesContextProvider;