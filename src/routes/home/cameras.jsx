import Card from 'react-bootstrap/Card';

export const TrafficCameras = () => {
    return (
        <>
            <div className='row'>
                <div className="col-sm">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://eapps.ncdot.gov/services/traffic-prod/v1/cameras/images?filename=I87_Arendell.JPG&t=1747305658098" />
                        <Card.Body>
                            <Card.Title>I-87 at NC-96</Card.Title>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-sm">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://eapps.ncdot.gov/services/traffic-prod/v1/cameras/images?filename=I87_mm434.JPG&t=1747305560393" />
                        <Card.Body>
                            <Card.Title>I-87 at Green Pace</Card.Title>
                        </Card.Body>
                    </Card>
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

        </>
    );
};