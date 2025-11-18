import { useRef } from 'react';

// //--- STANDARD IMPORTS: DATA
//import { useDataEndpoint } from "../../hooks/data_endpoint";

//--- STANDARD IMPORTS: MAP
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
                        lat: Number(item.incident_latitude.trim()),
                        lng: Number(item.incident_longitude.trim())
                    };

                    return <Marker key={index} position={position}>
                        <Popup>
                            {item.incident_date} at {item.incident_time}<br />
                            {item.incident_type}<br />
                            {item.incident_address}<br />
                            {item.incident_district}<br />
                        </Popup>
                    </Marker>
                })}

            </MapContainer>
        </>
    )
}

export const PageDataMap = () => {

    //--- LOAD DATA
    var getAllName = "getAllIncidents"
    const { data: mapData } = useDataEndpoint(getAllName, 20);

    return (
        <>
            <h5>Map</h5>
            <PageMap data={mapData} />
        </>
    );
};