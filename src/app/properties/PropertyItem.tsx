import { PropertyInfo } from "../providers/PropertyContext";

export default function PropertyItem(props: PropertyInfo) {
    return(
        <div className="border border-transparent rounded  mb-2 bg-slate-700 max-h-36 flex">
        <img src={props.image_url} className="max-w-24 m-4"></img>
        <p className="pr-2 pl-2">{props.location}</p>
        <p className="pr-2 pl-2">{props.sqrft}</p>
        <p className="pr-2 pl-2">{props.rentprice}</p>
        <button></button>
        </div>
    );
}