import { UUID } from "crypto";
import React, { createContext, SetStateAction, useContext } from "react";

interface TenantItemInfo {
  id: UUID[];
  name: string;
  property: string;
  image_url: string;
}


const TenantContext = createContext<TenantItemInfo>({} as TenantItemInfo);

export const useTenantContext = () => useContext(TenantContext);

export function TenantContextProvider(props: React.PropsWithChildren) {
  const value = {
    TenantItemInfo,
  };

  return (
    <TenantContext.Provider value={value}>
      {props.children}
    </TenantContext.Provider>
  );
}
