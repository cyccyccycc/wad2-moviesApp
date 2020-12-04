import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {getnowplaying} from"../api/tmdb-api";
import ffff from '../components/buttons/ffff'

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
        return <ffff movie={movie} />
      }}
    />
  );
};
  
  
export default NowPlayingPage;
