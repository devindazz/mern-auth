import { Container,Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Hero = () => {
  return (
    <div className="py-5 bg-light">
        <Container className="d-flex justify-content-center">
            <Card className="text-center" style={{ width: '24rem' }}>
                <Card.Body>
                    <Card.Title>Welcome to MERN Auth</Card.Title>
                    <Card.Text>
                        This is a simple authentication system built with the MERN stack.
                    </Card.Text>
                    <div className="d-flex justify-content-around">
                        <LinkContainer to="/login">
                        <Button className="mt-2" variant="primary">Sign in</Button>
                        </LinkContainer>
                        <LinkContainer to="/register">
                        <Button className="mt-2" variant="primary">Sign up</Button>
                        </LinkContainer>
                    </div>    
                </Card.Body>
            </Card>
        </Container>
    </div>    
  );
}

export default Hero;