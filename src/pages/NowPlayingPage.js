import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'

const NowPlayingPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.nowplaying.filter((m) => {  // New
    return !("watchlist" in m);
  });
 
  return (
    <PageTemplate
      title='NowPlaying Movies'
      movies={movies}
      action={(movie) => {
        return <AddToWatchListButton movie={movie} />
      }}
    />
  );
};
  
  
export default NowPlayingPage;
