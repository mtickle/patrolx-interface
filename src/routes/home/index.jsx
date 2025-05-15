


import { TrafficCameras } from './cameras';
import { ActiveCalls } from './active_calls';
import { Weather } from './weather';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import { WeatherChart } from './charts/weather_chart';
import { WeatherDetails } from './charts/weather_details';
import WeatherMap from './wxmap';

//--- SET PAGE NAME
function PageName() {
	return "Home"
}

const getMostRecentWeatherMap = async () => {
  const res = await fetch(
    "https://api.rainviewer.com/public/weather-maps.json"
  );
  const resJson = await res.json();
  return resJson.radar.nowcast[0].path;
};

//--- BUILD PAGE
export default function HomePage() {
	return (

		<div className="container-xl">
			<h1 className="display-6"><PageName /></h1>

			<p></p>
			<div className="card">
				<div className="card-header">
					Live Look
				</div>
				<div className="card-body">
					<TrafficCameras />
				</div>
			</div>

			<p></p>

			<div className="card">
				<div className="card-header">
					Active Calls
				</div>
				<div className="card-body">
					<ActiveCalls />
				</div>
			</div>

			<p></p>
			<div className="card">
				<div className="card-header">
					Current Conditions: <Weather />
				</div>
				<div className="card-body">
					
					<WeatherMap />						

				</div>
			</div>

			{/* <p></p>
			<div className="card">
				<div className="card-header">
					Data
				</div>
				<div className="card-body">
					
				</div>
			</div> */}
		</div>

	)
}


