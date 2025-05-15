import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { MiniWeather } from './mini_weather';

export default function Header() {

    return (
        <Navbar expand="lg" className='bg-body-secondary'>
            <Container>
                <Navbar.Brand>PX-DCP</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/calls">Calls</Nav.Link>
                        <Nav.Link as={Link} to="/incidents">Incidents</Nav.Link>
                        <Nav.Link as={Link} to="/trafficStops">Traffic Stops</Nav.Link>
                        <Nav.Link as={Link} to="/crashLocations">Crash Locations</Nav.Link>
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <MiniWeather />
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
