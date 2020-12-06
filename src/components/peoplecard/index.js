import React from "react";
import "./peoplecard.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../globals/fontawesome";

const peopleCard = props => {
  return (
    <div className="col-sm-3">
      <div className="card  bg-white">
      <Link to={`/people/${props.people.id}`}>
        <img
          className="card-img-tag center "
          alt={props.people.name}
          src={
            props.people.profile_path
              ? `https://image.tmdb.org/t/p/w500/${props.people.profile_path}`
              : "./film-poster-placeholder.png"
          }
        />
         </Link>
        <div className="card-body">
          <h4 className="card-title ">{props.people.name}</h4>
          <p>
            <FontAwesomeIcon icon={["fas", "star"]} />
            <span>
               {props.people.original_language}</span>
          </p>
          <p>
            <FontAwesomeIcon icon={["fas", "star"]} />
            <span> {props.people.name}</span>
          </p>
          <p>
            <FontAwesomeIcon icon={["fas", "star"]} />
            <span> {props.people.popularity}</span>
          </p>
          <p>
            <FontAwesomeIcon icon={["fas", "star"]} />
            <span> {props.people.profile_path}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default peopleCard ;