import React, { useEffect, useState } from 'react';

const Map = () => {
    const getCoordinatesByKeyword = async (keyword) => {
        try {
          const apiKey = process.env.REACT_APP_KAKAOMAP_KEY; // 카카오맵 자바스크립트 API 키
          const apiUrl = `https://dapi.kakao.com/v2/local/search/keyword.json?query=${encodeURIComponent(keyword)}`;
      
          const response = await fetch(apiUrl, {
            headers: {
              Authorization: `KakaoAK ${apiKey}`,
            },
          });
      
          const data = await response.json();
      
          if (data.documents.length > 0) {
            const { x: longitude, y: latitude } = data.documents[0].address;
      
            return { latitude, longitude };
          } else {
            return null; // 검색 결과가 없을 경우 null 반환
          }
        } catch (error) {
          console.error(error);
          return null;
        }
      };
      
      // 사용 예시
      getCoordinatesByKeyword('전라남도 강진군 강진읍 중앙로 205')
        .then((coordinates) => {
          if (coordinates) {
            console.log('위도:', coordinates.latitude);
            console.log('경도:', coordinates.longitude);
          } else {
            console.log('검색 결과가 없습니다.');
          }
        });
      

    return (
        <div>
        {/* 전시회 목록 표시 */}
        </div>
    );
};

export default Map;
