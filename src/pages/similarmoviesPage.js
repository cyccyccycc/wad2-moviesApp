import React, { useState, useEffect } from "react";
import Header from "../components/headersimilar";
import MovieList from "../components/similarList";

//const SimilarMoviePage = props => {
  //  const { id } = props.match.params
    //const [movies, setMovie] = useState(null)
    //useEffect(() => {
      //fetch(
       // `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}`
       //https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}
       //https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=<<api_key>>
       //`https://api.themoviedb.org/3/movie/${id}/recommendations??api_key=${process.env.REACT_APP_TMDB_KEY}`
       //`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
     // ).then(res => res.json())    
     // .then(movie => {
      //  setMovie(movie);
      //})
    //}, [id])
    const SimilarMoviePage = props => {
        const { id } = props.match.params
        const [movies, setMovies] = useState([]);
        useEffect(() => {
          fetch(
            `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}`
          )
            .then(res => res.json())
            .then(json => {
              console.log(json)
              return json.results
            })
            .then(movies => {
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