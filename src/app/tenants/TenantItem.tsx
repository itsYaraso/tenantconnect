import { TenantItemInfo } from "../providers/TenantContext";

export default function TenantItem(props: TenantItemInfo) {
  return (
    <div className="border border-transparent rounded  mb-2 bg-slate-700 max-h-36 flex">
      <img src={props.image_url} className="max-w-24 m-4"></img>
      <p className="pr-2 pl-2">{props.name}</p>
      <p className="pr-2 pl-2">{props.property}</p>
      <p className="pr-2 pl-2">{props.property}</p>
      <button></button>
    </div>
  );
}
