import { useState } from 'react'
import { Menu } from './Components/Menu'
import { Container } from 'react-bootstrap'
import { Footer } from './components/Footer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Container>
    <Menu/>
    <Footer/>
    </Container>
     
     
    </>
  )
}

export default App
