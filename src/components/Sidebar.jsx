import PropTypes from "prop-types";
import CookingList from "./CookingList";
import SavedRecipes from "./SavedRecipes";

Sidebar.propTypes = {
  savedRecipes: PropTypes.array,
  handleClick: PropTypes.func,
  cookingList: PropTypes.array,
};

export default function Sidebar({ savedRecipes, handleClick, cookingList }) {
  return (
    <div className="border p-5 rounded-xl col-span-2 h-fit">
      <SavedRecipes
        savedRecipes={savedRecipes}
        handleClick={handleClick}
      />
      <CookingList cookingList={cookingList} />
    </div>
  );
}
