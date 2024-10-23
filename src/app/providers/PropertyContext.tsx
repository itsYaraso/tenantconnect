"use client"
import { randomUUID, UUID } from "crypto";
import React, { createContext, SetStateAction, useContext } from "react";

interface PropertyInfo {
    id: UUID
    image_url: string
    location: string
    rentprice: string
    sqrft: string
    bedrooms: number
}

const propertyInfoArray: Array<PropertyInfo> = [
    {id: randomUUID(), image_url: "test", location: "test", rentprice: "test", sqrft: "test", bedrooms: 1}
  ]

const PropertyContext = createContext<PropertyInfo>({} as PropertyInfo);

export const usePropertyContext = () => useContext(PropertyContext);

export function PropertyContextProvider(props: React.PropsWithChildren) {
    
  const value = {
    propertyInfoArray
  };

  return (
    <PropertyContext.Provider value={value}>
      {props.children}
    </PropertyContext.Provider>
  );
}