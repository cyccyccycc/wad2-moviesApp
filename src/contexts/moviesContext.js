import React, { useEffect, createContext, useReducer } from "react";
import { getMovies, getUpcomingMovie,getnowplaying } from "../api/tmdb-api";

export const MoviesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "add-favorite":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: true } : m
        ),
        upcoming: [...state.upcoming],
      };
      case "add-watchlist":
      return {
        upcoming: state.upcoming.map((m) =>
          m.id === action.payload.movie.id ? { ...m, watchlist: true } : m
        ),
        movies: [...state.movies],
      };

      case "add-list":
      return {
        nowplaying: state.nowplaying.map((m) =>
          m.id === action.payload.movie.id ? { ...m, list: true } : m
        ),
        movies: [...state.movies],
      };
    case "load":
      return { movies: action.payload.movies, upcoming: [...state.upcoming] };
    case "load-upcoming":
      return { upcoming: action.payload.movies, movies: [...state.movies] };
      case "load-nowplaying":
      return { nowplaying: action.payload.movies, movies: [...state.movies] };
    case "add-review":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id
            ? { ...m, review: action.payload.review }
            : m
        ),
        upcoming: [...state.upcoming],
      };
    default:
      return state;
  }
};

const MoviesContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { movies: [], upcoming: [] });

  const addToFavorites = (movieId) => {
    const index = state.movies.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-favorite", payload: { movie: state.movies[index] } });
  };
  const addToWatchList = (movieId) => {
    const index = state.upcoming.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-watchlist", payload: { movie: state.upcoming[index] } });
  };

  const addToList = (movieId) => {
    const index = state.nowplaying.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-list", payload: { movie: state.nowplaying[index] } });
  };
  const addReview = (movie, review) => {
    dispatch({ type: "add-review", payload: { movie, review } });
  };

  useEffect(() => {
    getMovies().then((movies) => {
      dispatch({ type: "load", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getUpcomingMovie().then((movies) => {
      dispatch({ type: "load-upcoming", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getnowplaying().then((movies) => {
      dispatch({ type: "load-nowplaying", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        upcoming: state.upcoming,
        nowplaying: state.nowplaying,
        addToFavorites: addToFavorites,
        addReview: addReview,
        addToWatchList:addToWatchList,
        addToList:addToList
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;