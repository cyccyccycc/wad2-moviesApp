import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToListButton from '../components/buttons/addtolist'

const NowPlayingPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.nowplaying.filter((m) => {  // New
    return !("list" in m);
  });
 
  return (
    <PageTemplate
      title='NowPlaying Movies'
      movies={movies}
      action={(movie) => {
        return <AddToListButton movie={movie} />
      }}
    />
  );
};
  
  
export default NowPlayingPage;
