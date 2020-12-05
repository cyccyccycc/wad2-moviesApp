import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {getnowplaying} from"../api/tmdb-api";
import Getsimilarmovies from '../components/buttons/Getsimilarmovies'

const NowPlayingPage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getnowplaying().then(movies => {
      setMovies(movies);
    });

  }, []);
 
  return (
    <PageTemplate
      title='NowPlaying Movies'
      movies={movies}
      action={(movie) => {
        return <Getsimilarmovies movie={movie} />
      }}
    />
  );
};
  
  
export default NowPlayingPage;
