"use client"
import Header from "../components/Header";
import NavMenu from "../components/NavMenu";
import { TenantContextProvider } from "../providers/TenantContext";
import TenantList from "./TenantList";

export default function Tenants() {
    return(
      <TenantContextProvider>
        <div className="">
        <Header />
        <div className="flex">
        <NavMenu />
        <TenantList />
        </div>
      </div>
      </TenantContextProvider>
    );
}