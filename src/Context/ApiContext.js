import { createContext, useEffect, useState } from "react";

export const ApiContext = createContext() ; 

export const ApiContextProvider = ({children}) => {
    const [api, setApi] = useState([]);

    const getApi = async() => {
        const response = await fetch(`
            http://openapi.seoul.go.kr:8088/${process.env.REACT_APP_ART_KEY}/json/culturalEventInfo/1/500/전시/미술
        `) ;
        const json = await response.json() ; 
        setApi(json.culturalEventInfo.row) ;
    } ; 

    useEffect(() => {
        getApi(); 
    }, []); 

    return (
        <ApiContext.Provider value={{api}}>
            {children}
        </ApiContext.Provider>   
    )
}