import React from "react";
import { Link } from "react-router-dom";
import PeopleHeader from '../peopleheader'
import "./peoplepage.css";

const TemplatePeoplePage = ({ people, children }) => {
  return (
    <>
      <PeopleHeader people={people} />
      <div className="row">
        <div className="col-3">
        <Link to={`/people/${people.id}`}>
          <img
            src={
                people.profile_path
                ? `https://image.tmdb.org/t/p/w500/${people.profile_path}`
                : "./film-poster-placeholder.png"
            }
            className="people"
            alt={people.id}
          />
           </Link>
        </div>
        <div className="col-9">{children}</div>
      </div>
    </>
  );
};

export default TemplatePeoplePage;