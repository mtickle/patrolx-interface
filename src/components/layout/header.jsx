import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {

    return (
        <Navbar expand="lg" className='bg-body-secondary'>
            <Container>
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">                       
                        <Nav.Link href="/patrolx-interface/Calls">Calls</Nav.Link>
                        <Nav.Link href="/patrolx-interface/Incidents">Incidents</Nav.Link>
                        <Nav.Link href="/patrolx-interface/TrafficStops">Traffic Stops</Nav.Link>
                        <Nav.Link href="/patrolx-interface/CrashLocations">Crash Locations</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                
            </Container>
        </Navbar>
    );
}
