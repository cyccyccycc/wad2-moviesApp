import React from "react";
import Movie from "../similarcard/";
import "./similarList.css";

const SimilarList = props => {
  const similarcards = props.movies.map(m => (
    <Movie key={m.id} movie={m} />
  ));
  return <div className="row movies bg-info">{similarcards}</div>;
};

export default SimilarList;