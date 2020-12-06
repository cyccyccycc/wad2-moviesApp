import React from "react";
import PageTemplate from '../components/templatePeoplePage'
import PeopleTranslation from "../components/peopleTranslation";

const PeopleTranslationPage = (props) => {
  return (
      <PageTemplate people={props.location.state.people}>
        <PeopleTranslation translation={props.location.state.translation} /> 
      </PageTemplate>
  );
};

export default PeopleTranslationPage;