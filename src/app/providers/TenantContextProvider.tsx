import React, { createContext, useContext } from "react";
import TenantItem from "../tenants/TenantItem";

interface tenantitem {
  tenant: {
    id: number;
    name: string;
    property: string;
    image: string;
  };
}

const TenantContext = createContext<tenantitem>({} as tenantitem);

export const useTenantContext = () => useContext(TenantContext);

export function TenantContextProvider(props: React.PropsWithChildren) {
  const value = {
    TenantItem,
  };

  return (
    <TenantContext.Provider value={value}>
      {props.children}
    </TenantContext.Provider>
  );
}
