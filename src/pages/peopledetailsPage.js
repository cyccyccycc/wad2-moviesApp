import React, {useState, useEffect}  from "react";
import PeopleHeader from "../components/peopleheader";
import Peopledetails from "../components/peopledetails";
import {getpeopledetail} from '../api/tmdb-api'


const PeopledetailsPage = props => {
  const { id } = props.match.params
  const [people, setPeople] = useState(null)
  useEffect(() => {
    getpeopledetail(id).then(people => {
      setPeople(people);
    });
  }, [id]);

  return (
    <>
      {people ? (
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
        ) : (
        <p>Waiting for people details</p>
      )}
    </>
  );
};

export default PeopledetailsPage;