"use client"
import { randomUUID, UUID } from "crypto";
import React, { createContext, SetStateAction, useContext } from "react";

interface TenantItemInfo {
  id: UUID;
  name: string;
  property: string;
  image_url: string;
}

const tenantiteminfoarray: Array<TenantItemInfo> = [
  {id: randomUUID(), name: "George", property: "test", image_url: "test"}
]

const TenantContext = createContext<TenantItemInfo>({} as TenantItemInfo);

export const useTenantContext = () => useContext(TenantContext);

export function TenantContextProvider(props: React.PropsWithChildren) {
  const value = {
  };

  return (
    <TenantContext.Provider value={value}>
      {props.children}
    </TenantContext.Provider>
  );
}
