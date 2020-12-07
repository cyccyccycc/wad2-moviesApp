import React, {useContext} from "react";
import PeopleListPageTemplate from "../components/templatepeopleListPage";
import AddBlessingButton from '../components/buttons/addBlessing'
import {PeoplesContext} from '../contexts/peoplesContext'

const FavoritePeoplesPage = props => {
  const context = useContext(PeoplesContext);
  const favorites = context.peoples.filter( m => m.favorite )
  return (
    <PeopleListPageTemplate
      peoples={favorites}
      title={"Favorite Peoples"}
      action={people=> <AddBlessingButton people={people} />}
    />
  );
};

export default FavoritePeoplesPage;