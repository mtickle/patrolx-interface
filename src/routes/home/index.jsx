
import Card from 'react-bootstrap/Card';

export default function HomePage() {
	return (


		<div className="container-xl">
			<div className="px-4 py-10 my-6 text-center">
				<h1 className="display-5 fw-bold">Highly-Focused Data Collection</h1>
				<div className="col-lg-6 mx-auto">
					<div className="container">
						
						<div className='row'>
							<div className="col-sm">
								<Card style={{ width: '18rem' }}>
									<Card.Img variant="top" src="https://eapps.ncdot.gov/services/traffic-prod/v1/cameras/images?filename=I40_US70.jpg&t=1739970403174" />
									<Card.Body>
										<Card.Title>I-40 at US-70</Card.Title>
									</Card.Body>
								</Card>
							</div>
							<div className="col-sm">
								<Card style={{ width: '18rem' }}>
									<Card.Img variant="top" src="https://eapps.ncdot.gov/services/traffic-prod/v1/cameras/images?filename=I-40_WB_NC_42.jpg&t=1739970322197" />
									<Card.Body>
										<Card.Title>I-40 at NC-42</Card.Title>
									</Card.Body>
								</Card>
							</div>
							<div className='row'>
								<div className="col-sm">&nbsp;</div>
							</div>
							<div className="col-sm">
								<Card style={{ width: '18rem' }}>
									<Card.Img variant="top" src="https://eapps.ncdot.gov/services/traffic-prod/v1/cameras/images?filename=I87_NeuseRiver.JPG&t=1739970465341" />
									<Card.Body>
										<Card.Title>I-87 at Neuse River</Card.Title>
									</Card.Body>
								</Card>
							</div>
							<div className="col-sm">
								<Card style={{ width: '18rem' }}>
									<Card.Img variant="top" src="https://eapps.ncdot.gov/services/traffic-prod/v1/cameras/images?filename=I540_I87.JPG&t=1739970588254" />
									<Card.Body>
										<Card.Title>I-540 at I-87</Card.Title>
									</Card.Body>
								</Card>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}


