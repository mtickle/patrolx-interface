import { useApiDataEndpoint } from '@/hooks/useApiDataEndpoint.jsx';
import { useRef } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

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
                        lat: Number(item.latitude),
                        lng: Number(item.longitude)
                    };

                    let markerType = mapIcons.blue;

                    switch (item.severity) {
                        case 1:
                            markerType = mapIcons.red;
                            break;
                        case 2:
                            markerType = mapIcons.yellow;
                            break;
                        case 3:
                            markerType = mapIcons.green;
                            break;
                        default:
                            markerType = mapIcons.blue;
                    }


                    return <Marker key={index} position={position} icon={markerType}>
                        <Popup>
                            <InputGroup className="input-group input-group-sm mb-3">
                                <InputGroup.Text className="w-50" >Start Date: </InputGroup.Text>
                                <Form.Control value={formatDate(item.start_time)} readOnly />
                            </InputGroup>

                            Starts: {formatDate(item.start_time)}<br />
                            Condition: {item.condition}<br />
                            Location: {item.location}<br />
                            Road effected: {item.road}<br />
                        </Popup>
                    </Marker>
                })}

            </MapContainer>
        </>
    )
}

export const PageDataMap = () => {

    //--- LOAD DATA
    var getAllName = "getAllRoadIncidents"
    const { data: mapData } = useApiDataEndpoint(getAllName, 20);

    return (
        <>
            <h5>Map</h5>
            <PageMap data={mapData} />
        </>
    );
};