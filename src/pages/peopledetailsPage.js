import React, {useState, useEffect}  from "react";
import PeopleHeader from "../components/peopleheader";
import PeopleDetails from "../components/peopledetails";


const PeoplePage = props => {
  const { id } = props.match.params
  const [people, setPeople] = useState(null)
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then(res => res.json())    
    .then(people => {
      setPeople(people);
    })
  }, [id])
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
                alt={people.name}
              />
            </div>
            <div className="col-9">
              <PeopleDetails people={people} />
            </div>
          </div>
        </>
        ) : (
        <p>Waiting for people details</p>
      )}
    </>
  );
};

export default PeoplePage;