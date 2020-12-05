import React from "react";
import "./peopleDetails.css";

export default ({ people }) => {
  return (
    <>
      <h4>Overview</h4>
      <p>{people.homepage}</p>
      <ul className="list-group list-group-horizontal">
        <li key="bir" className="list-group-item list-group-item-dark">
        birthday
        </li>
        <li key="bir" className="list-group-item ">
          {movie.birthday}
        </li>
        <li key="kno" className="list-group-item list-group-item-dark">
        known_for_department
        </li>
        <li key="kno" className="list-group-item ">
          {movie.known_for_department}
        </li>
      </ul>

      <ul className="list-group list-group-horizontal">
        <li key="gh" className="list-group-item list-group-item-dark">
          biography
        </li>
        <li key="kno" className="list-group-item ">
          {movie.biography}
        </li>
      </ul>
      <ul className="list-group list-group-horizontal">
        <li key="slh" className="list-group-item list-group-item-dark">
         popularity
        </li>
        <li key="kno" className="list-group-item ">
          {movie.popularity}
        </li>
      </ul>
      <ul className="list-group list-group-horizontal">
        <li key="pch" className="list-group-item list-group-item-dark">
        place_of_birth
        </li>
        <li key="kno" className="list-group-item ">
          {movie.place_of_birth}
        </li>
      </ul>
    </>
  );
};