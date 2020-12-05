import React from "react";
import PeopleHeader from "../components/peopleheader";
import Peopledetails from "../components/peopledetails";

const peopledetailsPage = ({ people }) => {
  return (
    <>
      {people ? (
        <>
          <PeopleHeader people={people} />
          <div className="row">
            <div className="col-3">
              <img
                src={
                  people.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${people.poster_path}`
                    : "./film-poster-placeholder.png"
                }
                className="people"
                alt={people.id}
              />
            </div>
            <div className="col-9">
              <Peopledetails people={people} />
            </div>
          </div>
        </>
        ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default peopledetailsPage;