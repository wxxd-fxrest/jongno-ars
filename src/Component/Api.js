import { useCallback, useContext, useEffect, useState } from "react";
import { ApiContext } from "../Context/ApiContext";
import Map from "../kakaoMap/Map";

const Api = ({apiData}) => {
    const [jongno, setJongno] = useState([]); 

    console.log(apiData.PLACE)

    return (
        <div>
            <Map jongno={jongno}/> 
        </div>
    )
}

export default Api; 