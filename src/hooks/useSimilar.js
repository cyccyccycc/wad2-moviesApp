import { useEffect, useState } from "react";
import {getsimilarmovies} from '../api/tmdb-api'

const useSimilar = id => {
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    getsimilarmovies(id).then(movies => {
      setMovies(movies);
    });
  }, [id]);
  return [movies, setMovies];
};

export default useSimilar