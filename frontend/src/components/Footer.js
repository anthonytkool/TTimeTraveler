import { Container, Row, Col } from 'react-bootstrap'
const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            <h3>Copyright &copy; T Time Traveler</h3>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
