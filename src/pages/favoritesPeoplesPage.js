import React, {useContext} from "react";
import PeopleListPageTemplate from "../components/templatepeopleListPage";
import AddBlessingButton from '../components/buttons/addBlessing'
import {PeoplesContext} from '../contexts/peoplesContext'

const FavoritePeoplesPage = props => {
  const context = useContext(PeoplesContext);
  const favorites = context.peoples.filter( n => n.favorite )
  return (
    <PeopleListPageTemplate
      peoples={favorites}
      title={"Favorite People"}
      action={people => <AddBlessingButton people={people} />}
    />
  );
};

export default FavoritePeoplesPage;