import  { useRef } from 'react';

// //--- STANDARD IMPORTS: DATA
import { DataEndpoint } from '../../components/data/data_endpoint';

//--- STANDARD IMPORTS: MAP
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { mapIcons } from '@/components/layout/mapIcons';

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
                        lat: Number(item.traffic_latitude.trim()),
                        lng: Number(item.traffic_longitude.trim())
                    };

                    let markerType = mapIcons.blue;

                    return <Marker key={index} position={position}  icon={markerType}>
                        <Popup>
                            {formatDate(item.traffic_dateofstop)} at {item.traffic_timeofstop}<br />
                            {item.traffic_description}<br />
                            {item.traffic_violationtype}<br />
                            {item.traffic_year} {item.traffic_make} {item.traffic_model}
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