import { useContext } from "react";
import Api from "../Component/Api.js";
import { ApiContext } from "../Context/ApiContext.js";

const Main = () => {
    const {api} = useContext(ApiContext) ;

    return (
        <div>
            {api.map((a, i) => (
                <Api key={i} apiData={a} /> 
            ))}
        </div>
    )
}

export default Main; 