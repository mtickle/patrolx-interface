import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { MiniWeather } from './mini_weather'; // Assuming this component is in the same folder

export default function Header() {
    return (
        <Navbar expand="lg" className='bg-body-secondary'>
            <Container>
                {/* 1. Make the Brand the "home" link, pointing to "/" */}
                <Navbar.Brand as={Link} to="/">
                    PX-DCP
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                {/* 2. Use only ONE Navbar.Collapse for everything */}
                <Navbar.Collapse id="basic-navbar-nav">

                    {/* These links will be on the left */}
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/calls">Calls</Nav.Link>
                        <Nav.Link as={Link} to="/incidents">Incidents</Nav.Link>

                        {/* 3. Fix case sensitivity to match your App.jsx routes */}
                        <Nav.Link as={Link} to="/roadincidents">Roads</Nav.Link>
                        <Nav.Link as={Link} to="/trafficstops">Traffic Stops</Nav.Link>
                        <Nav.Link as={Link} to="/crashlocations">Crash Locations</Nav.Link>
                        {/* I removed the extra "Home" link */}
                    </Nav>

                    {/* 4. Place this *inside* the collapse, but *after* the "me-auto" Nav.
               This will push it to the right on desktop and stack it on mobile. */}
                    <Navbar.Text>
                        <MiniWeather />
                    </Navbar.Text>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}