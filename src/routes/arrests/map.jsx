import { useRef } from 'react';

// //--- STANDARD IMPORTS: DATA
import { useApiDataEndpoint } from '@/hooks/useApiDataEndpoint.jsx';

//--- STANDARD IMPORTS: MAP
//const MapContainer = dynamic(() => import('react-leaflet'), {ssr: false})
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

//--- BUILD MAP
function PageMap({ data }) {

    const mapRef = useRef();
    const zoom = 11;
    const containerStyle = {
        width: "100%",
        height: "400px"
    }
    const center = {
        lat: 35.8158871065979,
        lng: -78.65528542793695
    }

    return (
        <>
            <MapContainer
                style={containerStyle}
                center={center}
                zoom={zoom}
                scrollWheelZoom={false}
                ref={mapRef}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {data.map((item, index) => {
                    let position = {
                        lat: Number(item.arrestLat.trim()),
                        lng: Number(item.arrestLng.trim())
                    };

                    console.log(position)

                    return <Marker key={index} position={position}>
                        <Popup>
                            {item.name} at {item.dateOfArrest} <br />
                            {item.arrestingAgency}<br />
                            {item.charge}<br />
                            {item.arrestLocation}<br />
                        </Popup>
                    </Marker>
                })}

            </MapContainer>

        </>

    );
}


export const PageDataMap = () => {

    //--- LOAD DATA
    var getAllName = "getAllCcbiArrests"
    const { data: mapData } = useApiDataEndpoint(getAllName, 20);

    return (
        <>
            <PageMap data={mapData} />
        </>
    );
};