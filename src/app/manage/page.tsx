import Header from "../components/Header";
import NavMenu from "../components/NavMenu";

export default function Manage() {
    return(
        <div className="">
        <Header />
        <div className="flex gap-24">
        <NavMenu />
        </div>
      </div>
    );
}