import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Hero from './components/hero/Hero'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <main className='py-3'>
        <Container></Container>
      </main>
      <Footer />
    </>
  )
}

export default App
