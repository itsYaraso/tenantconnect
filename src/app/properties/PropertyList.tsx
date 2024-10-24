"use client";
import { usePropertyContext } from "../providers/PropertyContext";
import PropertyItem from "./PropertyItem";

export default function PropertyList() {
  const { propertyInfoArray } = usePropertyContext();
  return (
    <div className="border border-slate-800 border- bg-slate-900 p-2 w-full flex">
      <ol className="w-full max-h-screen overflow-auto">
        {propertyInfoArray.map((value) => {
          return (
            <li key={value.id}>
              <PropertyItem
                id={value.id}
                image_url={value.image_url}
                location={value.location}
                rentprice={value.rentprice}
                sqrft={value.sqrft}
                bedrooms={value.bedrooms}
              />
            </li>
          );
        })}
      </ol>
    </div>
  );
}
