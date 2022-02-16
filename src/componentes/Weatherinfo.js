import React, { useState } from 'react';
import '../App.css';
import { Row, Col, Button, Card, Collapse, Container } from 'react-bootstrap';

export default function WeatherInfo(props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <style type='text/css'>
        {`
    .btn-flat {
      background-color: #060f33;
      color: white;
      
    }
    .btn-flat:hover {
        color: white;  
       background-color: rgba(6,15,51,0.8); 
      
    }
    .btn-xxl {
      padding: 10px ;
      font-size: 20px;
    }
    `}
      </style>
      <Container>
        <Row>
          <Col sm={5}>
            <Card
              style={{
                width: '400px',
                backgroundColor: 'rgba(202, 195, 247, 0.5)',
                boxShadow: '10px 10px 10px 5px rgba(100, 100, 100, 0.8)',
                fontFamily: 'fantasy',
              }}
              className='card card-body m-4'
            >
              <Row>
                <Col
                  sm={9}
                  className='p-2'
                  style={{ color: '#232121', height: '50px' }}
                >
                  <h1>{props.city}</h1>
                  <p
                    style={{
                      color: '#232121',
                      textAlign: 'center',
                      background: '#ffa933',
                      /* background: '#D6D01F', */
                      width: '25px',
                      borderRadius: '50%',
                    }}
                  >
                    {props.country}
                  </p>
                </Col>
                <Col style={{ paddingLeft: '10px' }}>
                  <Button
                    variant='flat'
                    size='xxl'
                    onClick={() => setOpen(!open)}
                    aria-controls='tabla info'
                    aria-expanded={open}
                  >
                    + info
                  </Button>
                </Col>
                <Row style={{ paddingLeft: '30px' }}>
                  <Col>
                    <img
                      width='160px'
                      src={`http://openweathermap.org/img/wn/${props.icon}@2x.png `}
                      alt='Icono del tiempo'
                    />
                  </Col>
                  <Col>
                    <h2
                      style={{
                        color: '#232121',
                        paddingTop: '50px',
                        fontSize: '45px',
                      }}
                    >
                      {Math.round(props.temperature)}°C
                    </h2>
                  </Col>
                  <h4
                    style={{
                      paddingLeft: '80px',
                      color: '#9A1761',
                    }}
                  >
                    {props.description.toUpperCase()}
                  </h4>
                </Row>
              </Row>
            </Card>
          </Col>
          <Col sm={7}>
            <Collapse in={open}>
              <Row
                responsive='md'
                style={{
                  textAlign: 'center',
                  marginTop: '25px',
                  fontFamily: 'fantasy',
                  fontSize: '20px',
                }}
              >
                <Col>
                  <Card
                    border='primary'
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.8)',
                      width: '130px',
                      boxShadow: '10px 10px 10px 5px rgba(100, 100, 100, 0.8)',
                    }}
                  >
                    <Card.Header>Tº Min</Card.Header>
                    <Card.Body>
                      <i
                        class='bi bi-thermometer-snow '
                        style={{
                          fontSize: '50px',
                          color: 'cornflowerblue',
                        }}
                      />
                      <Card.Text>
                        {Math.round(props.temperature_min)}
                        °C
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card
                    border='primary'
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.8)',
                      width: '130px',
                      boxShadow: '10px 10px 10px 5px rgba(100, 100, 100, 0.8)',
                    }}
                  >
                    <Card.Header>Tº Max</Card.Header>
                    <Card.Body>
                      <i
                        class='bi bi-thermometer-sun '
                        style={{ fontSize: '50px', color: 'orange' }}
                      />
                      <Card.Text>
                        {Math.round(props.temperature_max)}
                        °C
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card
                    border='primary'
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.8)',
                      width: '130px',
                      boxShadow: '10px 10px 10px 5px rgba(100, 100, 100, 0.8)',
                    }}
                  >
                    <Card.Header>Viento</Card.Header>
                    <Card.Body>
                      <i
                        class='bi bi-wind '
                        style={{ fontSize: '50px', color: 'cornflowerblue' }}
                      />
                      <Card.Text>
                        {Math.round(props.wind_speed) * 3.6 + ' '}
                        km/h
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card
                    border='primary'
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.8)',
                      width: '130px',
                      boxShadow: '10px 10px 10px 5px rgba(100, 100, 100, 0.8)',
                    }}
                  >
                    <Card.Header>Humedad</Card.Header>
                    <Card.Body>
                      <i
                        class='bi bi-droplet '
                        style={{ fontSize: '50px', color: 'cornflowerblue' }}
                      />
                      <Card.Text>{Math.round(props.humidity) + ' '}%</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              {/* <Table
                striped
                bordered
                hover
                variant='dark'
                responsive='sm'
                style={{
                  marginTop: '20px',
                  fontFamily: 'fantasy',
                  fontSize: '20px',
                }}
              >
                <thead>
                  <tr>
                    <th>Humedad</th>
                    <th>Viento</th>
                    <th>Tº Min</th>
                    <th>Tº Max</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{props.humidity}</td>

                    <td>{props.wind_speed}</td>

                    <td>
                      {Math.round(props.temperature_min)}
                      °C
                    </td>

                    <td>
                      {Math.round(props.temperature_max)}
                      °C
                    </td>
                  </tr>
                </tbody>
              </Table> */}
            </Collapse>
          </Col>
        </Row>
      </Container>
    </>
  );
}
