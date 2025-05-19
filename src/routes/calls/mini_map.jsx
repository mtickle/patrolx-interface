import { useRef } from 'react';

// //--- STANDARD IMPORTS: DATA
import { DataEndpoint } from '../../components/data/data_endpoint';

//--- STANDARD IMPORTS: MAP
//const MapContainer = dynamic(() => import('react-leaflet'), {ssr: false})
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { mapIcons } from '@/components/layout/mapIcons';

//--- BUILD MAP
function PageMap({ data }) {

    const mapRef = useRef();
    const zoom = 10;
    const containerStyle = {
        width: "100%",
        height: "410px"
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
                        lat: Number(item.call_latitude.trim()),
                        lng: Number(item.call_longitude.trim())
                    };

                    let markerType = mapIcons.blue;

                    switch (item.call_type) {
                        case "MVC - Damage":
                            markerType = mapIcons.red;
                            break;
                        case "Road Hazard":
                            markerType = mapIcons.yellow;
                            break;
                        case "Assist Motorist":
                            markerType = mapIcons.green;
                            break;
                        default:
                            markerType = mapIcons.blue;
                    }

                    return <Marker key={index} position={position} icon={markerType}>
                        <Popup>
                            {item.call_date} at {item.call_time}<br />
                            {item.call_agency}<br />
                            {item.call_type}<br />
                            {item.call_address}<br />
                        </Popup>
                    </Marker>
                })}

            </MapContainer>

        </>

    );
}


export const CallsMiniMap = () => {

    //--- LOAD DATA
    var getAllName = "getAllCalls"
    var mapData = DataEndpoint(getAllName, 10);

    return (
        <>
            <PageMap data={mapData} />
        </>
    );
};