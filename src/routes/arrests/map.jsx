import { useRef } from 'react';

// //--- STANDARD IMPORTS: DATA
import { DataEndpoint } from '../../components/data/data_endpoint';

//--- STANDARD IMPORTS: MAP
//const MapContainer = dynamic(() => import('react-leaflet'), {ssr: false})
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"

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
    var mapData = DataEndpoint(getAllName, 20);

    return (
        <>
            <h5>Map</h5>
            <PageMap data={mapData} />
        </>
    );
};