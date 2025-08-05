import { Container,Card, Button } from "react-bootstrap";

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
                        <Button className="mt-2" variant="primary" href="/login">Sign in</Button>
                        <Button className="mt-2" variant="primary" href="/register">Sign up</Button>
                    </div>    
                </Card.Body>
            </Card>
        </Container>
    </div>    
  );
}

export default Hero;