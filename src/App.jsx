import 'react'
import './App.css'
import Gallery from './components/Gallery/Gallery'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Bookings from './components/Bookings/Bookings'
import Navbar from './components/Navbar/Navbar'
import Member from './components/Member_msg/Member'

function App() {

  return (
    <>
        {/* <Navbar/> */}
        <BrowserRouter>
          <Routes>
            <Route exact path='/gallery' Component={Gallery}/>
            <Route exact path='/about_us' Component={Member}/>
            <Route exact path='/booking' Component={Bookings}/>
            <Route exact path='/' Component={Navbar}/>
          </Routes>
        </BrowserRouter>

    </>
  )
}

export default App
