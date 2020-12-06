import React from "react";
import StubAPI from "../api/stubAPIpeople";
import PageTemplate from "../components/templatepeopleListPage";

const FavoritePeoplesPage = props => {
  const toDo = () => true;

  return (
    <PageTemplate
      peoples={StubAPI.getAll()}
      title={"Favorite People"}
      buttonHandler={toDo}
    />
  );
};

export default FavoritePeoplesPage;