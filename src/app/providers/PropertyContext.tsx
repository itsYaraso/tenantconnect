"use client";
import React, { createContext, SetStateAction, useContext } from "react";

export interface PropertyInfo {
  id: number;
  image_url: string;
  location: string;
  rentprice: string;
  sqrft: string;
  bedrooms: number;
}

interface PropertyContextType {
  propertyInfoArray: Array<PropertyInfo>;
}

const propertyInfoArray: Array<PropertyInfo> = [
  {
    id: 1,
    image_url: "test",
    location: "test",
    rentprice: "test",
    sqrft: "test",
    bedrooms: 1,
  },
  {
    id: 2,
    image_url: "test",
    location: "test",
    rentprice: "test",
    sqrft: "test",
    bedrooms: 1,
  },
];

const propertyContext = createContext<PropertyContextType>( {} as PropertyContextType
);

export const usePropertyContext = () => useContext(propertyContext);

export function PropertyContextProvider(props: React.PropsWithChildren) {
  const value = {
    propertyInfoArray,
  };

  return (
    <propertyContext.Provider value={value}>
      {props.children}
    </propertyContext.Provider>
  );
}
