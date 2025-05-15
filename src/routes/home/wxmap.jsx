import { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const RADAR_MAPS_URL = "https://api.rainviewer.com/public/weather-maps.json";

const getMostRecentWeatherMap = async () => {
    const res = await fetch(RADAR_MAPS_URL);
    const resJson = await res.json();
    return resJson.radar.nowcast[0].path;
};

const WeatherMap = () => {
    const [mostRecentWeatherMap, setMostRecentWeatherMap] = useState(null);

    useEffect(() => {
        (async () => {
            const path = await getMostRecentWeatherMap();
            setMostRecentWeatherMap(path);
        })();
    }, []);

    if (!mostRecentWeatherMap) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <MapContainer
                center={[35.8158871065979, -78.65528542793695]}
                zoom={10}
                scrollWheelZoom={true}
                style={{ height: "50vh", width: "100%" }}
            >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <TileLayer
                    attribution="RainViewer.com"
                    url={`https://tilecache.rainviewer.com${mostRecentWeatherMap}/256/{z}/{x}/{y}/2/1_1.png`}
                    opacity={0.6}
                    zIndex={2}
                />
            </MapContainer>
        </div>
    );
};

export default WeatherMap;
