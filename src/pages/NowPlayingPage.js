import React, {useState, useEffect } from "react";
import Header from "../components/headersimilarList";
import MovieList from "../components/similarList";
import { getnowplaying } from "../api/tmdb-api";


const NowplayingPage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getnowplaying().then(movies => {
      setMovies(movies);
    });
  }, []);
  return (
    <>
      <Header numMovies={movies.length} />
      <MovieList movies={movies} />
    </>
  );
};

export default NowplayingPage;