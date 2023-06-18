import { useEffect, useRef, useState } from "react";

const Map = ({jongno}) => {
    // console.log(jongno)

    const [address, setAddress] = useState([]);

    const mapContainer = useRef(null);
    const { kakao } = window;
    const position = new kakao.maps.LatLng(37.5665, 126.9780);
    const mapOptions = {
        center: position, // 지도의 중심좌표
        level: 4 // 지도의 확대 레벨
    };

    var infowindow = new kakao.maps.InfoWindow({zIndex:1});

    const app = () => {
        const map = new kakao.maps.Map(mapContainer.current, mapOptions);

        // 장소 검색 객체를 생성합니다
        const ps = new kakao.maps.services.Places(); 

        // 키워드로 장소를 검색합니다
        ps.keywordSearch('고희동미술관', placesSearchCB); 

        // 키워드 검색 완료 시 호출되는 콜백함수 입니다
        function placesSearchCB (data, status, pagination) {
            // if (status === kakao.maps.services.Status.OK) {

                // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
                // LatLngBounds 객체에 좌표를 추가합니다
                // const bounds = new kakao.maps.LatLngBounds();

                // for (let i=0; i<data.length; i++) {
                //     displayMarker(data[i]);    
                //     bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
                // }       

                // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
                // map.setBounds(bounds);
                // setAddress(...jongno, data)
            // } 
            console.log(data)
        }

        // // 지도에 마커를 표시하는 함수입니다
        // function displayMarker(place) {
                
        //     // 마커를 생성하고 지도에 표시합니다
        //     const marker = new kakao.maps.Marker({
        //         map: map,
        //         position: new kakao.maps.LatLng(place.y, place.x) 
        //     });

        //     // 마커에 클릭이벤트를 등록합니다
        //     kakao.maps.event.addListener(marker, 'click', function() {
        //         // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
        //         infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
        //         infowindow.open(map, marker);
        //     });
        // }    
    }

    useEffect(() => {
        app();        
    }, []);

    return (
        <div className="App">
            <div id="map"
                ref={mapContainer}
                style={{ width: '100%', height: '350px', display: 'block' }}>
            </div>
        </div>
    );
}

export default Map; 