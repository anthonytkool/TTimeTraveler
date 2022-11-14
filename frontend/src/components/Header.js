import { Container, Navbar, Nav } from 'react-bootstrap'
import Logo from '../assets/gold.png'
import { BsCart4 } from 'react-icons/bs'
import { BsPersonBoundingBox } from 'react-icons/bs'
const Header = () => {
  return (
    <header>
      <Navbar collapseOnSelect expand='lg' bg='primary' variant='dark'>
        <Container>
          <Navbar.Brand href='/' style={{ marginRight: '4rem' }}>
            {' '}
            <img
              alt=''
              src={Logo}
              width='30'
              height='30'
              className='d-inline-block align-top'
            />{' '}
            T.TIME TRAVELER
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='#features' style={{ marginRight: '1rem' }}>
                ALL CAPITALHERE
              </Nav.Link>
              <Nav.Link href='#pricing' style={{ marginRight: '1rem' }}>
                ALL CAPITALHERE
              </Nav.Link>
              <Nav.Link href='#pricing'>ALL CAPITALHERE</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href='/cart'>
                <BsCart4 size={'1.5em'} /> CART{' '}
              </Nav.Link>
              <Nav.Link eventKey={2} href='/login'>
                <BsPersonBoundingBox size={'1.5em'} /> SIGN IN
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
