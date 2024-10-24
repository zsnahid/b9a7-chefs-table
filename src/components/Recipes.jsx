import { useEffect, useState } from "react";
import Recipe from "./Recipe";
import Sidebar from "./Sidebar";

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [cookingList, setCookingList] = useState([]);

  useEffect(() => {
    const getRecipes = async () => {
      const response = await fetch("/recipes.json");
      const data = await response.json();
      setRecipes(data.recipes);
    };
    getRecipes();
  }, []);

  function addToSavedRecipes(recipe) {
    setSavedRecipes([...savedRecipes, recipe]);
  }

  function addToCookingList(recipe) {
    setCookingList([...cookingList, recipe]);
  }

  return (
    <div>
      <h2 className="text-center font-semibold text-3xl mb-3">Our Recipes</h2>
      <p className="text-center text-gray font-light max-w-2xl mx-auto mb-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur iure
        rerum reiciendis officiis doloremque pariatur repellat atque quia sint
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-5">
        <div className="col-span-4 grid grid-cols-2 gap-5">
          {recipes.map((recipe) => (
            <Recipe
              key={recipe.recipe_id}
              recipe={recipe}
              handleClick={() => addToSavedRecipes(recipe)}
            />
          ))}
        </div>
        <Sidebar
          savedRecipes={savedRecipes}
          handleClick={addToCookingList}
          cookingList={cookingList}
        />
      </div>
    </div>
  );
}
