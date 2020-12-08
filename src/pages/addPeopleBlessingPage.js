import React from "react";
import PageTemplate from "../components/templatePeoplePage";
import BlessingForm from '../components/blessingForm'

const BlessingFormPage = props => {

  return (
      <PageTemplate people={props.location.state.people}>
          <BlessingForm people={props.location.state.people} />
      </PageTemplate>
  );
};
export default BlessingFormPage;