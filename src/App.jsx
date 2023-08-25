import { useState } from 'react'
import { Menu } from './Components/Menu'
import { Container } from 'react-bootstrap'
import { Footer } from './components/Footer'
import { Outlet } from 'react-router-dom'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Container>
    <Menu/>
    <Outlet/>
    <Footer/>
    </Container>
     
     
    </>
  )
}

export default App
