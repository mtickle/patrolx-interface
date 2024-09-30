import { useRef } from 'react';

import {
    setKey,
    setDefaults,
    setLanguage,
    setRegion,
    fromAddress,
    fromLatLng,
    fromPlaceId,
    setLocationType,
    geocode,
    RequestType,
} from "react-geocode";

// //--- STANDARD IMPORTS: DATA
import { DataEndpoint } from '../../components/data/data_endpoint';

//--- STANDARD IMPORTS: MAP
//const MapContainer = dynamic(() => import('react-leaflet'), {ssr: false})
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"

//--- BUILD MAP
function PageMap({ data }) {

    setDefaults({
        key: "AIzaSyAtjQtyzdW0u7SEdeKCL6623uO3RoUS30E", // Your API key here.
        language: "en", // Default language for responses.
    });

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
                id="map"
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {data.map((item, index) => {

                    fromAddress(item.arrestLocation)
                        .then(({ results }) => {
                            const { lat, lng } = results[0].geometry.location;
                            let position = {
                                lat: lat,
                                lng: lng
                            };

                           return(position);
                            // var Popup = L.popup()
                            // .setLatLng(lat, lng)
                            // .setContent("I am a standalone popup.")
                            // .openOn(map);

                            //marker = L.marker([lat, lng]).addTo(map);

                         
                           
                        //    console.log(position)
                        //     return <Marker key={index} position={position}>
                        //         <Popup>
                        //             {item.arrestLocation}<br />
                        //         </Popup>
                        //     </Marker>

                        })
                        .catch(console.error);
                        
                        console.log(fromAddress(item.arrestLocation))
                     


                })}


                        <Marker key={0} position={center}>
                                <Popup>
                                    {center}<br />
                                </Popup>
                            </Marker>

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