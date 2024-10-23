"use client";
import { randomUUID } from "crypto";
import TenantItem from "./TenantItem";
import { useTenantContext } from "../providers/TenantContext";

export default function TenantList() {
  const { tenantiteminfoarray } = useTenantContext();
  console.log(tenantiteminfoarray);
  return (
    <div className="border border-slate-800 border- bg-slate-900 p-2 w-full flex">
      <ol className="w-full max-h-screen overflow-auto">
        {tenantiteminfoarray.map((value) => {
          return (
            <li key={value.id}>
              <TenantItem
                id={value.id}
                name={value.name}
                property={value.property}
                image_url={value.image_url}
              />
            </li>
          );
        })}
      </ol>
    </div>
  );
}
