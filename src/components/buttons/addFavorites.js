import React, { useContext } from "react";
import {PeoplesContext} from "../../contexts/peoplesContext";

const AddFavoriteButton = ({ people }) => {
  const context = useContext(PeoplesContext);

  const handleAddFavorite = e => {
    e.preventDefault();
    context.addFavorites(people.id);
  };
  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleAddFavorite}
    >
      Add people to Favorites
    </button>
  );
};

export default AddFavoriteButton;