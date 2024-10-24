import Header from "../components/Header";
import NavMenu from "../components/NavMenu";
import { PropertyContextProvider } from "../providers/PropertyContext";
import PropertyList from "./PropertyList";

export default function Properties() {
    return(
      <PropertyContextProvider>
        <div className="">
        <Header />
        <div className="flex gap-24">
        <NavMenu />
        </div>
        <PropertyList />
      </div>
      </PropertyContextProvider>
    );
}