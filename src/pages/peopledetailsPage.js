import React  from "react";
import { Link, Route, withRouter } from "react-router-dom";
import PeopleHeader from "../components/peopleheader";
import Peopledetails from "../components/peopledetails";
import usePeople from "../hooks/usepeople";

const DetailsPage = props => {
  const { id } = props.match.params;
  const [people] = usePeople(id)  // NEW

  return (

        <>
          <PeopleHeader people={people} />
          <div className="row">
            <div className="col-3">
              <img
                src={
                  people.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${people.profile_path}`
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
        ) 


};

export default withRouter(DetailsPage);