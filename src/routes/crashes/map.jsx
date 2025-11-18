import { useRef } from 'react';

//--- STANDARD IMPORTS: DATA
import { useApiDataEndpoint } from '@/hooks/useApiDataEndpoint.jsx';

//--- STANDARD IMPORTS: MAP
import { mapIcons } from '@/components/layout/mapIcons';
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
                        lat: Number(item.crash_latitude.trim()),
                        lng: Number(item.crash_longitude.trim())
                    };

                    let markerType = mapIcons.blue;

                    return <Marker key={index} position={position} icon={markerType}>
                        <Popup>
                            {item.crash_date} at {item.crash_time}<br />
                            {item.crash_locationroadname}<br />
                            {item.crash_mostharmfulevent}<br />
                        </Popup>
                    </Marker>
                })}

            </MapContainer>
        </>
    )
}

export const PageDataMap = () => {

    //--- LOAD DATA
    var getAllName = "getAllCrashes"
    const { data: mapData } = useApiDataEndpoint(getAllName, 20);

    return (
        <>
            <h5>Map</h5>
            <PageMap data={mapData} />
        </>
    );
};