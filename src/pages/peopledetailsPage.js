import React from "react";
import { withRouter } from "react-router-dom";
import PeopleDetails from "../components/peopledetails";
import PageTemplate from "../components/templatePeoplePage";
import usePeople from "../hooks/usePeople";
const PeoplePage = props => {
  const { id } = props.match.params;
  const [people] = usePeople(id) 
  return (
    <>
    {people ? (
      <>
        <PageTemplate people={people}>
          <PeopleDetails people={people} />
        </PageTemplate>
      </>
    ) : (
      <p>Waiting for people details</p>
    )}
  </>
  );
};

export default withRouter(PeoplePage);
