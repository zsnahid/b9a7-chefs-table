import CookingList from "./CookingList";
import SavedRecipes from "./SavedRecipes";

export default function Sidebar() {
  return (
    <div className="border p-5 rounded-xl col-span-2 lg:col-span-3">
      <SavedRecipes />
      <CookingList />
    </div>
  );
}
