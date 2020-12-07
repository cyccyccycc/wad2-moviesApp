import React, { useContext } from "react";
import PageTemplate from '../components/templatepeopleListPage'
import {PeoplesContext} from '../contexts/peoplesContext'

const PeopleListPage = () => {
  const context = useContext(PeoplesContext) 

  return (
      <PageTemplate 
        title='No. people'
        peoples={context.peoples}
        buttonHandler={context.addFavorites}
      />
  );
};

export default PeopleListPage;
