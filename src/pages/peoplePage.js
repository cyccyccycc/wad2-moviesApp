import React, { useContext } from "react";
import PageTemplate from '../components/templatepeopleListPage'
import {PeoplesContext} from '../contexts/peoplesContext'
import AddFavoritesButton from '../components/buttons/addFavorites'

const PeopleListPage = () => {
  const context = useContext(PeoplesContext);
  const peoples = context.peoples.filter((m) => {  
    return !("favorite" in m);
  });

  return (
    <PageTemplate
      title="No. People"
      peoples={peoples}  /* Changed */
      action={(people) => {
        return <AddFavoritesButton people={people} />;
      }}
    />
  );
};

export default PeopleListPage;