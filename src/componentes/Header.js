import { Row, Col, Container } from 'react-bootstrap';

export default function Header() {
  return (
    <Container
      style={{
        backgroundColor: 'rgba(6,15,51,255)',
        marginTop: '20px',
        borderRadius: '1rem',
      }}
    >
      <Row>
        <Col>
          <Row
            style={{
              paddingTop: '20px',
              paddingLeft: '40px',
              paddingBottom: '20px',
            }}
          >
            <Col sm={5}>
              <img
                width='160px'
                style={{ borderRadius: '20%' }}
                src='/logo.png'
                alt='Icono del tiempo'
              />
            </Col>
            <Col>
              <h1
                style={{
                  paddingTop: '40px',
                  fontFamily: 'fantasy',
                  color: '#ff9300',
                }}
              >
                MeteoWeb
              </h1>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
