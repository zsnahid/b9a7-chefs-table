import { IoTimeOutline } from "react-icons/io5";
import { PiFireSimple } from "react-icons/pi";
import BtnPrimarySm from "./BtnPrimarySm";

export default function Recipe() {
  return (
    <div className="card bg-base-100 border lg:col-span-2">
      <figure className="px-5 pt-5">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="p-5 space-y-5">
        <h3 className="font-semibold">Spaghetti Bolognese</h3>
        <p className="text-gray font-fira font-light hidden md:block">
          Classic Italian pasta dish with savory meat sauce.
        </p>
        <div className="border-b"></div>
        <h3 className="font-semibold">Ingredients: 6</h3>
        <ul className="text-gray font-fira font-light list-inside list-disc">
          <li>500g ground beef</li>
          <li>1 onion, chopped</li>
          <li>2 cloves garlic, minced</li>
        </ul>
        <div className="border-b"></div>
        <div className="flex flex-col lg:flex-row gap-5 text-gray text-sm">
          <div className="flex items-center gap-2">
            <IoTimeOutline />
            <span>30 minutes</span>
          </div>
          <div className="flex items-center gap-2">
            <PiFireSimple />
            <span>600 calories</span>
          </div>
        </div>
        <div className="card-actions">
          <BtnPrimarySm btnText={"Want to cook"}/>
        </div>
      </div>
    </div>
  );
}
