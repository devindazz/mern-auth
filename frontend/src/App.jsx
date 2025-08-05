import Header from './components/Header.jsx';
import {Container} from 'react-bootstrap';
import {Outlet} from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Header />
      <Container className="mt-4">
         <Outlet />
      </Container>
    </div>
  );
};

export default App;