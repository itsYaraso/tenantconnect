import Header from "../components/Header";
import NavMenu from "../components/NavMenu";
import TenantItem from "./TenantItem";

export default function TenantList() {
    return(
        <div className="border border-slate-800 border- bg-slate-900 p-2 w-full flex justify-center">
            <ol className="">
                <TenantItem />
                <TenantItem />
                <TenantItem />
                <TenantItem />
                <TenantItem />
                <TenantItem />
                <TenantItem />
                <TenantItem />
            </ol>
        </div>
    );
}