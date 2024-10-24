import PropTypes from "prop-types";
import PreparedRecipe from "./PreparedRecipe";

CookingList.propTypes = {
  cookingList: PropTypes.array,
};

export default function CookingList({ cookingList }) {
  return (
    <div className="overflow-x-auto mb-5">
      <h3 className="font-semibold text-center mb-2">
        Currently cooking: {cookingList.length}
      </h3>
      <div className="border-b max-w-sm mx-auto mb-5"></div>
      <table className="table-auto w-full text-left font-fira text-gray">
        <thead>
          <tr>
            <th></th>
            <th className="p-3">Name</th>
            <th className="p-3">Time</th>
            <th className="p-3">Calories</th>
          </tr>
        </thead>
        <tbody className="font-light">
          {cookingList.map((item) => (
            <PreparedRecipe key={item.recipe_id} recipe={item} />
          ))}
        </tbody>
        {/* <tfoot>
          <td colSpan={2}></td>
          <td className="p-3">Total Time = 45 minutes</td>
          <td className="p-3">Total Calories = 1060 calories</td>
        </tfoot> */}
      </table>
    </div>
  );
}
