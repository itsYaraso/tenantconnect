import { usePropertyContext } from "../providers/PropertyContext";
import PropertyItem from "./PropertyItem";

export default function PropertyList() {
    const { propertyInfoArray } = usePropertyContext()
    return(
        <div>
            <ol>
                {propertyInfoArray.map((value) => {
                    return(
                        <li>
                            <PropertyItem id={value.id} image_url={value.image_url} location={value.location} rentprice={value.rentprice} sqrft={value.sqrft} bedrooms={value.bedrooms} />
                        </li>
                    )
                })}
            </ol>
        </div>
    );
}