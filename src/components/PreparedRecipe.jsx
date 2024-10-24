import PropTypes from "prop-types";

PreparedRecipe.propTypes = {
  recipe: PropTypes.object,
};

export default function PreparedRecipe({ recipe }) {
  const {recipe_name, preparing_time, calories} = recipe
  return (
    <tr className="odd:bg-gray-light">
      <td className="p-3">1</td>
      <td className="p-3">{recipe_name}</td>
      <td className="p-3">{preparing_time}</td>
      <td className="p-3">{calories}</td>
    </tr>
  );
}
