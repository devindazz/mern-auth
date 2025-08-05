import Header from './components/Header.jsx';
import {Container} from 'react-bootstrap';
import {Outlet} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      <Header />
      <ToastContainer position="bottom-right" />
      <Container className="mt-4">
         <Outlet />
      </Container>
    </div>
  );
};

export default App;