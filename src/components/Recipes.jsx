import Recipe from "./Recipe";
import Sidebar from "./Sidebar";

export default function Recipes() {
  return (
    <div>
      <h2 className="text-center font-semibold text-3xl mb-3">Our Recipes</h2>
      <p className="text-center text-gray max-w-2xl mx-auto mb-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur iure
        rerum reiciendis officiis doloremque pariatur repellat atque quia sint
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-7 gap-5">
        <Recipe />
        <Recipe />
        <Sidebar />
      </div>
    </div>
  );
}
