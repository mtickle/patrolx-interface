


import { TrafficCameras } from './cameras';
import { Weather } from './weather';

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
					Weather
				</div>
				<div className="card-body">
					<Weather />
				</div>
			</div>

			<p></p>
			<div className="card">
				<div className="card-header">
					Data
				</div>
				<div className="card-body">
					{/* <PageDataTable /> */}
				</div>
			</div>
		</div>

	)
}


