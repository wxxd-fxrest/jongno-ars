import { createContext, useEffect, useState } from "react";

export const ApiContext = createContext() ; 

export const ApiContextProvider = ({children}) => {
    const [api, setApi] = useState([]);

    const getApi = async() => {
        const fetchExhibitions = async () => {
            try {
              const apiKey = process.env.REACT_APP_ART_KEY; // 서울시 문화행사 정보 API 키
              const apiUrl = `http://openapi.seoul.go.kr:8088/${apiKey}/json/culturalEventInfo/1/500/전시/미술`; // 필터링 조건에 전시 및 미술 추가
              const response = await fetch(apiUrl);
              const data = await response.json();
      
              // 종료일이 오늘 날짜 이후인 전시회 정보만 추려내기
              const today = new Date().toISOString().split('T')[0];
              const filteredExhibitions = data.culturalEventInfo.row.filter((exhibition) => exhibition.END_DATE > today);
      
              setApi(filteredExhibitions); // 필터링된 전시회 정보를 상태에 저장
            } catch (error) {
              console.error(error);
            }
          };
      
          fetchExhibitions(); // 컴포넌트가 마운트될 때 API 호출
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