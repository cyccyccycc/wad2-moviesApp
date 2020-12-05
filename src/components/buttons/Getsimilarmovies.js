
import React from "react";
import { Link } from "react-router-dom";
const Getsimilarmovies = ({ movie }) => {
    return (
        <button id="button1" 
        >
         <a href="/movies/similarmovies">Find simliar movies  </a> 
         
        </button>

          
      );
};

export default Getsimilarmovies;