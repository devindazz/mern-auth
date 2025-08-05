import {Navbar, Nav, Container} from 'react-bootstrap';
import {FaSignInAlt, FaSignOutAlt} from 'react-icons/fa';
import {LinkContainer} from 'react-router-bootstrap';

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <LinkContainer to="/">
                    <Navbar.Brand>MERN Auth</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to="/login">
                            <Nav.Link><FaSignInAlt /> Login</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/register">
                            <Nav.Link><FaSignInAlt /> Register</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>    
        </header>
    );
}

export default Header;