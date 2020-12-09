import React, { useState, useEffect } from "react";
import Header from "../components/headersimilar";
import MovieList from "../components/similarList";
import {getsimilarmovies} from '../api/tmdb-api'
    const SimilarMoviePage = props => {
        const { id } = props.match.params
        const [movies, setMovies] = useState([]);
        useEffect(() => {
          getsimilarmovies(id).then(movies => {
            setMovies(movies);
          });
        }, [id]);
    return (
        <>
          <Header numMovies={movies.length} />
          <MovieList movies={movies} />
        </>
      );
};

export default SimilarMoviePage;