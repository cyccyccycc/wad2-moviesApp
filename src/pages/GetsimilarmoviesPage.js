import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {getsimilar} from"../api/tmdb-api";
import Getsimilarmovies from '../components/buttons/Getsimilarmovies'
const GetsimilarmoviesPage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getsimilar().then(movies => {
      setMovies(movies);
    });

  }, []);
 
  return (
    <PageTemplate
      title='GetSimilar Movies'
      movies={movies}
      action={(movie) => {
        return <Getsimilarmovies movie={movie} />
      }}
    />
  );
};
  
  
export default GetsimilarmoviesPage;