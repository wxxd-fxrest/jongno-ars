import { useCallback, useContext, useEffect, useState } from "react";
import { ApiContext } from "../Context/ApiContext";
import Map from "../kakaoMap/Map";

const Api = ({apiData}) => {
    const [jongno, setJongno] = useState([]); 

    const getApiData = useCallback(() => {
        // console.log(apiData)
        // let date = new Date() ;
        // let endDate = apiData.END_DATE.split(' ')[0] ;
        // let todayDate = date.toJSON().split('T')[0] ;
        // console.log(apiData.END_DATE.split(' ')[0])
        // console.log('date => ', date.toJSON().split('T')[0])
        
        if(apiData.GUNAME === '종로구') {
            // if (endDate > todayDate) {
                let oo = (apiData.PLACE.split('(')[0]) ; 
                setJongno(oo);
                // console.log(jongno.PLACE.split('(')[0])
                // console.log(jongno)
            // }
        }; 
        
    }, [apiData]);

    useEffect(() => {
        getApiData()
    }, [getApiData]) ;

    return (
        <div>
            <Map jongno={jongno}/> 
        </div>
    )
}

export default Api; 