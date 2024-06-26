import React, { useRef } from 'react';
import axios from "axios";

// //--- STANDARD IMPORTS: DATA
// import { DataEndpoint } from '../../components/data/data_endpoint';

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
                        lat: Number(item.latitude.trim()),
                        lng: Number(item.longitude.trim())
                    };

                    return <Marker key={index} position={position}>
                        <Popup>
                            {item.callDate} at {item.callTime}<br />
                            {item.agency}<br />
                            {item.incidentType}<br />
                            {item.location}<br />
                        </Popup>
                    </Marker>
                })}

            </MapContainer>
        </>
    )
}

export const CallsMap = () => {

    console.log("map loading ...")

    var getAllName = "getAllCalls"
    var getRecordCount = 20

    const [Items, setItems] = React.useState([]);

    const config = {
        headers: {
            'x-api-key': '9YGxIQziMuYzgMSWmYePfxRWYdeiwLKn'
        }
    };

    const client = axios.create({
        baseURL: "http://192.168.86.2:8080/api/" + getAllName
    });

    React.useEffect(() => {
        client.get('?limit=' + getRecordCount, config)
            .then((response) => {
                setItems(response.data);
            });
    }, []);

    //--- LOAD DATA
    var mapData = Items;

    return (
        <>
            <h5>Call Map</h5>
            <PageMap data={mapData} />
        </>
    );
};