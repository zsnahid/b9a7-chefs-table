import PropTypes from "prop-types";
import { IoTimeOutline } from "react-icons/io5";
import { PiFireSimple } from "react-icons/pi";
import BtnPrimarySm from "./BtnPrimarySm";

Recipe.propTypes = {
  recipe: PropTypes.object,
  handleClick: PropTypes.func,
};

export default function Recipe({ recipe, handleClick }) {
  const {
    recipe_id,
    recipe_image,
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;

  return (
    <div className="card bg-base-100 border">
      <figure className="px-5 pt-5">
        <img
          src={recipe_image}
          alt={`image of ${recipe_name}`}
          className="rounded-xl w-full aspect-video object-cover object-center"
        />
      </figure>
      <div className="p-5 space-y-5">
        <h3 className="font-semibold">{recipe_name}</h3>
        <p className="text-gray font-fira font-light hidden md:block">
          {short_description}
        </p>
        <div className="border-b"></div>
        <h3 className="font-semibold">Ingredients: {ingredients.length}</h3>
        <ul className="text-gray font-fira font-light list-inside list-disc">
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <div className="border-b"></div>
        <div className="flex flex-col lg:flex-row gap-5 text-gray text-sm">
          <div className="flex items-center gap-1">
            <IoTimeOutline />
            <span>{preparing_time}</span>
          </div>
          <div className="flex items-center gap-1">
            <PiFireSimple />
            <span>{calories}</span>
          </div>
        </div>
        <div className="card-actions">
          <BtnPrimarySm
            btnText={"Want to cook"}
            handleClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
}
