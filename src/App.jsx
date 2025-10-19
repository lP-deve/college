
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Slider } from './components/home/Slider'
import Footer from './Footer'
import Header from './Header'
import { Menu } from './components/menu/Menu'
import { Drinks } from './components/menu/Drinks'
import { Dessets } from './components/menu/Desserts'
import { About } from './components/about/About'
import { Contact } from './components/contact/Contact'

function App() {
 

  return (
 <>

   <Header/>


<Routes>
  <Route path="/" element={<Slider/>}/>
  <Route path="/menu" element={<Menu/>}/>
  <Route path="/drinks" element={<Drinks/>}/>
  <Route path="/desserts" element={<Dessets/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/contact" element={<Contact/>}/>
</Routes>

<Footer/>
 </>
  )
}

export default App
