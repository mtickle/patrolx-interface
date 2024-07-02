import React, { useRef } from 'react';

// //--- STANDARD IMPORTS: DATA
import { DataEndpoint } from '../../components/data/data_endpoint';

//--- STANDARD IMPORTS: MAP
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
        lat: 39.1547,
        lng: -77.2405
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
                        lat: Number(item.latitude.trim()),
                        lng: Number(item.longitude.trim())
                    };

                    return <Marker key={index} position={position}>
                        <Popup>
                            {item.dateOfStop} at {item.timeOfStop}<br />
                            {item.description}<br />
                            {item.violationType}<br />
                            {item.make} {item.model}
                        </Popup>
                    </Marker>
                })}

            </MapContainer>
        </>
    )
}

export const PageDataMap = () => {

    //--- LOAD DATA
    var getAllName = "getAllTraffic"
    var mapData = DataEndpoint(getAllName, 20);

    return (
        <>
            <h5>Map</h5>
            <PageMap data={mapData} />
        </>
    );
};