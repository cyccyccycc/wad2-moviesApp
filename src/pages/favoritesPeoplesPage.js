import React from "react";
import StubAPI from "../api/stubAPIpeople";
import PageTemplate from "../components/templatepeopleListPage";
import AddBlessingButton from '../components/buttons/addBlessing'

const FavoritePeoplesPage = props => {

  return (
    <PageTemplate
      peoples={StubAPI.getAll()}
      title={"Favorite People"}
      action={people => <AddBlessingButton people={people} />}
    />
  );
};

export default FavoritePeoplesPage;