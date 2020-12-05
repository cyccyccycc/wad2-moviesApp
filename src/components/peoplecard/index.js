import React from "react";
import "./peopleCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../globals/fontawesome";

const PeopleCard = props => {
  return (
    <div className="col-sm-3">
      <div className="card  bg-white">
        <img
          className="card-img-tag center "
          alt={props.people.id}
          src={
            props.people.poster_path
              ? `https://image.tmdb.org/t/p/w500/${props.people.poster_path}`
              : "./film-poster-placeholder.png"
          }
        />
        <div className="card-body">
          <h4 className="card-title ">{props.people.id}</h4>
          <p>
            <FontAwesomeIcon icon={["fas", "calendar"]} />
            <span> {props.people.birthday}</span>
          </p>
          <p>
            <FontAwesomeIcon icon={["fas", "star"]} />
            <span> {props.people.name}</span>
          </p>
          <p>
            <FontAwesomeIcon icon={["fas", "star"]} />
            <span> {props.people.gender}</span>
          </p>
          <p>
            <FontAwesomeIcon icon={["fas", "star"]} />
            <span> {props.people.place_of_birth}</span>
          </p>
          <p>
            <FontAwesomeIcon icon={["fas", "star"]} />
            <span> {props.people.biography}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard ;