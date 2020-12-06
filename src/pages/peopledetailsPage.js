import React from "react";
import { Link, Route, withRouter } from "react-router-dom";
import PeopleDetails from "../components/peopledetails";
import PageTemplate from "../components/templateMoviePage";
import PeopleTranslations from "../components/peopleTranslations";
import usePeople from "../hooks/usepeople";

const PeopledetailsPage = props => {
  const { id } = props.match.params;
  const [people] = usePeople(id)  // NEW
  return (
    <>
    {people ? (
      <>
        <PageTemplate people={people}>
          <PeopleDetails people={people} />
        </PageTemplate>
        <div className="row">
          <div className="col-12 ">
            {!props.history.location.pathname.endsWith("/translations") ? (
              <Link
                className="btn btn-primary btn-block active"
                to={`/peoples/${id}/translations`}
              >
                Show Translations (Extracts)
              </Link>
            ) : (
              <Link
                className="btn btn-primary btn-block active"
                to={`/peoples/${id}`}
              >
                Hide Translations 
              </Link>
            )}
          </div>
        </div>
        <Route
          path={`/peoples/:id/translations`}
          render={props => <PeopleTranslations people={people} {...props} />}
        />
      </>
    ) : (
      <p>Waiting for people details</p>
    )}
  </>
  );
};

export default withRouter(PeopledetailsPage);