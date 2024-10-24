import PropTypes from "prop-types";
import BtnPrimarySm from "./BtnPrimarySm";

SavedRecipe.propTypes = {
  savedRecipe: PropTypes.object,
  handleClick: PropTypes.func,
};

export default function SavedRecipe({ savedRecipe, handleClick }) {
  const { recipe_name, preparing_time, calories } = savedRecipe;
  return (
    <tr className="odd:bg-gray-light">
      <td className="p-3">1</td>
      <td className="p-3">{recipe_name}</td>
      <td className="p-3">{preparing_time}</td>
      <td className="p-3">{calories}</td>
      <td className="p-3">
        <BtnPrimarySm
          btnText={"Preparing"}
          handleClick={() => handleClick(savedRecipe)}
        />
      </td>
    </tr>
  );
}
