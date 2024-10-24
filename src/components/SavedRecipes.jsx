import PropTypes from 'prop-types'
import SavedRecipe from './SavedRecipe';

SavedRecipes.propTypes = {
  savedRecipes: PropTypes.array,
  handleClick: PropTypes.func
}

export default function SavedRecipes({savedRecipes, handleClick}) {
  return (
    <div className="overflow-x-auto mb-10">
      <h3 className="font-semibold text-center mb-2">Want to cook: {savedRecipes.length}</h3>
      <div className="border-b max-w-sm mx-auto mb-5"></div>
      <table className="table-auto text-left font-fira text-gray w-full">
        <thead>
          <tr>
            <th></th>
            <th className="p-3">Name</th>
            <th className="p-3">Time</th>
            <th className="p-3">Calories</th>
          </tr>
        </thead>
        <tbody className="font-light">
          {
            savedRecipes.map(savedRecipe => <SavedRecipe key={savedRecipe.recipe_id} savedRecipe={savedRecipe} handleClick={handleClick}/>)
          }
        </tbody>
      </table>
    </div>
  );
}
