


import { TrafficCameras } from './cameras';
import { ActiveCalls } from './active_calls';
import { Weather } from './weather';
import { WeatherChart } from './charts/weather_chart';
import { WeatherDetails } from './charts/weather_details';

//--- SET PAGE NAME
function PageName() {
	return "Home"
}

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
					Weather
				</div>
				<div className="card-body">
					{/* <Weather /> */}
				</div>
				<div className="card-body">
					{/* <WeatherDetails /> */}
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


