import React, {useState, useEffect } from "react";
import Header from "../components/headersimilarList";
import MovieList from "../components/similarList";


const NowplayingPage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(json => {
        console.log(json)
        return json.results
      })
      .then(movies => {
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