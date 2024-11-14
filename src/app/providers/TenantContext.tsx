"use client";
import React, { createContext, useContext } from "react";
import { PropertyInfo } from "./PropertyContext";

export interface TenantItemInfo {
  id: number;
  name: string;
  property: Array<PropertyInfo>;
  image_url: string | null;
}

interface TenantContextType {
  tenantiteminfoarray: Array<TenantItemInfo>;
}

const tenantiteminfoarray: Array<TenantItemInfo> = [
  { id: 1, name: "George", property: [], image_url: "" },
  { id: 2, name: "Billy", property: [], image_url: "https://i.pinimg.com/736x/38/93/07/389307d6af5c4be0051b7d3c4f93bf3d.jpg" },
  { id: 3, name: "Justin", property: [], image_url: "https://i.pinimg.com/736x/38/93/07/389307d6af5c4be0051b7d3c4f93bf3d.jpg" },
  { id: 4, name: "Rose", property: [], image_url: "https://th.bing.com/th/id/R.14f6725d26bdd1c08d671556819fa78b?rik=PefFmlprW6kzjg&pid=ImgRaw&r=0" },
  { id: 6, name: "Grace", property: [], image_url: "https://th.bing.com/th/id/R.14f6725d26bdd1c08d671556819fa78b?rik=PefFmlprW6kzjg&pid=ImgRaw&r=0" },
  { id: 7, name: "Nathan", property: [], image_url: "https://i.pinimg.com/736x/38/93/07/389307d6af5c4be0051b7d3c4f93bf3d.jpg" },
  { id: 8, name: "Leonard", property: [], image_url: "https://i.pinimg.com/736x/38/93/07/389307d6af5c4be0051b7d3c4f93bf3d.jpg" },
  { id: 5, name: "Frederick", property: [], image_url: "https://i.pinimg.com/736x/38/93/07/389307d6af5c4be0051b7d3c4f93bf3d.jpg" },
  { id: 9, name: "Joseph", property: [], image_url: "https://i.pinimg.com/736x/38/93/07/389307d6af5c4be0051b7d3c4f93bf3d.jpg" },
  { id: 10, name: "Raymond", property: [], image_url: "https://i.pinimg.com/736x/38/93/07/389307d6af5c4be0051b7d3c4f93bf3d.jpg" },
  { id: 10, name: "Raymond", property: [], image_url: "https://i.pinimg.com/736x/38/93/07/389307d6af5c4be0051b7d3c4f93bf3d.jpg" },
];

const tenantContext = createContext<TenantContextType>({} as TenantContextType);

export const useTenantContext = () => useContext(tenantContext);

export function TenantContextProvider(props: React.PropsWithChildren) {
  const value = {
    tenantiteminfoarray,
  };

  return (
    <tenantContext.Provider value={value}>
      {props.children}
    </tenantContext.Provider>
  );
}
