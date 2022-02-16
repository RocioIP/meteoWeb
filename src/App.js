import { Container, Row } from 'react-bootstrap';
import './App.css';
import WeatherForm from './componentes/Weatherform';

function App() {
  return (
    <Container>
      <Row>
        <div>
          <WeatherForm />
        </div>
      </Row>
    </Container>
  );
}

export default App;
