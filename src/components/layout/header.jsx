import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {

    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/Adsb">ADSB</Nav.Link>
                        <Nav.Link href="/Arrests">Arrests</Nav.Link>
                        <Nav.Link href="/Calls">Calls</Nav.Link>
                        <Nav.Link href="/Incidents">Incidents</Nav.Link>
                        <Nav.Link href="/TrafficStops">Traffic Stops</Nav.Link>
                        <Nav.Link href="/CrashLocations">Crash Locations</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
