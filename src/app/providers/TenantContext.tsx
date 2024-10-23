"use client"
import React, { createContext, useContext } from "react";

export interface TenantItemInfo {
  id: number;
  name: string;
  property: string;
  image_url: string;
}

interface TenantContextType {
  tenantiteminfoarray: Array<TenantItemInfo>
}

const tenantiteminfoarray: Array<TenantItemInfo> = [
  {id: 1, name: "George", property: "test", image_url: "test"},
  {id: 2, name: "Billy", property: "test", image_url: "test"},
  {id: 3, name: "Justin", property: "test", image_url: "test"},
  {id: 4, name: "Rose", property: "test", image_url: "test"},
  {id: 6, name: "Grace", property: "test", image_url: "test"},
  {id: 7, name: "Nathan", property: "test", image_url: "test"},
  {id: 8, name: "Leonard", property: "test", image_url: "test"},
  {id: 5, name: "Frederick", property: "test", image_url: "test"},
  {id: 9, name: "Joseph", property: "test", image_url: "test"},
  {id: 10, name: "Raymond", property: "test", image_url: "test"}
]

const tenantContext = createContext<TenantContextType>({} as TenantContextType);

export const useTenantContext = () => useContext(tenantContext);

export function TenantContextProvider(props: React.PropsWithChildren) {
  const value = {
    tenantiteminfoarray
  };

  return (
    <tenantContext.Provider value={value}>
      {props.children}
    </tenantContext.Provider>
  );
}
