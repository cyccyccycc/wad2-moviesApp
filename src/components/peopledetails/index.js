import React from "react";
import "./peopledetails.css";

export default ({ people }) => {
  return (
    <>
      <h4>also_known_as</h4>
      <p>{people.also_known_as}</p>
      <ul className="list-group list-group-horizontal">
        <li key="bir" className="list-group-item list-group-item-dark">
        place_of_birth
        </li>
        <li key="bir" className="list-group-item ">
          {people.place_of_birth}
        </li>
      </ul>
      <ul className="list-group list-group-horizontal">
        <li key="gh" className="list-group-item list-group-item-dark">
          biography
        </li>
        <li key="kno" className="list-group-item ">
          {people.biography}
        </li>
      </ul>
      <ul className="list-group list-group-horizontal">
        <li key="slh" className="list-group-item list-group-item-dark">
         popularity
        </li>
        <li key="kno" className="list-group-item ">
          {people.popularity}
        </li>
      </ul>
      <ul className="list-group list-group-horizontal">
        <li key="pch" className="list-group-item list-group-item-dark">
        known_for_department
        </li>
        <li key="kno" className="list-group-item ">
          {people.known_for_department}
        </li>
      </ul>
    </>
  );
};