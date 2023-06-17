import { useContext } from "react";
import { ApiContext } from "../Context/ApiContext";
import Map from "../kakaoMap/Map";

const Api = () => {
    const {api} = useContext(ApiContext) ; 
    
    return (
        <div>
            {api.map((a, i) => (
                <Map key={i} apiData={a} /> 
            ))}
        </div>
    )
}

export default Api; 