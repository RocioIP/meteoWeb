import React, { useState } from 'react';
import '../App.css';
import Header from './Header';
import { Container, Form, Row, Col, Button, FormSelect } from 'react-bootstrap';
import { get } from '../api/api';
import { apiKey } from '../api/keys';
import WeatherInfo from './Weatherinfo';

export default function WeatherForm(props) {
  const [valueCityForm, setValueCityForm] = useState();
  const [valueCountryForm, setValueCountryForm] = useState();

  const [paintInfo, setPaintInfo] = useState(false);
  const [datos, setDatos] = useState({
    temperature: '',
    temperature_min: '',
    temperature_max: '',
    description: '',
    humidity: '',
    wind_speed: 0,
    city: '',
    country: '',
    icon: '',
    error: null,
  });

  const datosWeather = (body) => {
    console.log(body);
    setDatos({
      temperature: body.main.temp,
      temperature_min: body.main.temp_min,
      temperature_max: body.main.temp_max,
      description: body.weather[0].description,
      humidity: body.main.humidity,
      wind_speed: body.wind.speed,
      city: body.name,
      country: body.sys.country,
      icon: body.weather[0].icon,
      error: null,
    });
  };

  const handleChange = () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${valueCityForm},${valueCountryForm}&APPID=${apiKey}&units=metric&lang=es`;
    const reqDatos = async () => {
      get(url, datosWeather);
    };
    reqDatos();
    setPaintInfo(true);
  };

  function handleInputChangeCity(e) {
    e.preventDefault();
    const valueCity = e.target.value;
    setValueCityForm(valueCity);
  }
  function handelInputChangeCountry(e) {
    e.preventDefault();
    const valueCountry = e.target.value;
    setValueCountryForm(valueCountry);
  }

  return (
    <>
      <Container
        style={{
          backgroundColor: 'rgba(6,15,51,255)',
          marginTop: '20px',
          borderRadius: '1rem',
        }}
      >
        <Row>
          <Col>
            <Header />
          </Col>
          <Col>
            <Form>
              <Row>
                <Col sm={7}>
                  <Form.Group className='mt-5'>
                    <Form.Control
                      size='lg'
                      type='text'
                      name='city'
                      onChange={handleInputChangeCity}
                      placeholder='Ciudad'
                      style={{ fontFamily: 'fantasy' }}
                      className='form-control border border-primary'
                      autoFocus
                    />
                  </Form.Group>
                </Col>

                <Col sm={5}>
                  <Form.Group className='mt-5'>
                    <FormSelect
                      style={{ fontFamily: 'fantasy' }}
                      aria-label='Large'
                      aria-describedby='inputGroup-sizing-sm'
                      type='select'
                      size='lg'
                      name='pais'
                      id='pais'
                      onChange={handelInputChangeCountry}
                      value={valueCountryForm}
                    >
                      <option value=''>Selecciona País</option>
                      <option value='ES'>España</option>
                      <option value='US'>Estados Unidos</option>
                      <option value='MX'>México</option>
                      <option value='AR'>Argentina</option>
                      <option value='CO'>Colombia</option>
                      <option value='CR'>Costa Rica</option>
                      <option value='PE'>Perú</option>
                    </FormSelect>
                  </Form.Group>
                </Col>
              </Row>
              <div className='d-grid gap-2 mt-3'>
                <Button
                  style={{
                    background: 'cornflowerblue',
                    fontFamily: 'fantasy',
                    borderColor: 'cornflowerblue',
                  }}
                  size='lg'
                  onClick={handleChange}
                >
                  Vai chover ?
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>

      {paintInfo === true ? <WeatherInfo {...datos} /> : ''}
    </>
  );
}
