import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {getUpcomingMovie} from"../api/tmdb-api";
import AddToWatchListButton from '../components/buttons/addtowatchlist'

const UpcomingMoviePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getUpcomingMovie().then(movies => {
      setMovies(movies);
    });

  }, []);
 
  return (
    <PageTemplate
      title='Upcoming Movies'
      movies={movies}
      action={(movie) => {
        return <AddToWatchListButton movie={movie} />
      }}
    />
  );
};
  
  
export default UpcomingMoviePage;



