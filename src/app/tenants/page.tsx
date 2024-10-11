import Header from "../components/Header";
import NavMenu from "../components/NavMenu";
import TenantList from "./TenantList";

export default function Tenants() {
    return(
        <div className="">
        <Header />
        <div className="flex">
        <NavMenu />
        <TenantList />
        </div>
      </div>
    );
}