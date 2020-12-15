import React, { useContext } from "react";
import {PeoplesContext} from "../../contexts/peoplesContext";
import './button.css'
const AddFavoriteButton = ({ people }) => {
  const context = useContext(PeoplesContext);

  const handleAddFavorite = e => {
    e.preventDefault();
    context.addFavorites(people.id);
  };
  return (
    <button
      type="button"
      class="css_bt_class"
      onClick={handleAddFavorite}
    >
      Add people to Favorites
    </button>
  );
};

export default AddFavoriteButton;