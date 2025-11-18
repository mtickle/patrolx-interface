import { useRef } from 'react';

// //--- STANDARD IMPORTS: DATA
import { useApiDataEndpoint } from '@/hooks/useApiDataEndpoint.jsx';

//--- STANDARD IMPORTS: MAP
import { mapIcons } from '@/components/layout/mapIcons';
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const formatDate = (isoDate) => {
    const d = new Date(isoDate);
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const year = d.getFullYear();
    return `${month}-${day}-${year}`;
};

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
                            {formatDate(item.call_date)} at {item.call_time}<br />
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

export const PageDataMap = () => {

    //--- LOAD DATA
    var getAllName = "getAllCalls"

    const { data: mapData, isLoading } = useApiDataEndpoint(getAllName, 20);
    if (isLoading) return <div>Loading...</div>;
    return (
        <>
            <h5>Map</h5>
            <PageMap data={mapData} />
        </>
    );
};