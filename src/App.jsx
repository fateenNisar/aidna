import { useState } from 'react'
// import './App.css'

import { BrowserRouter, createBrowserRouter ,Outlet , Routes, Route} from 'react-router-dom';
import { Home } from './pages/Home/Home';
import {Navbar} from './components/Navbar/Navbar';
import { About } from './pages/AboutUs/About';
import { Footer } from './components/footer/Footer';
import { Aidna } from './pages/Aidna/Aidna';
import { Solutions } from './pages/Solutions/Solutions';
import { ContactUs } from './pages/ContactUs/ContactUs';
import { Udos } from './pages/Udos/Udos';
import { Udcp } from './pages/Ucdp/Ucdp';
const router  = createBrowserRouter([{
  path:"/",
  element:  <Outlet />,
  children:[
    {
      path:"/home",
      element:<Home />
    }
  ]
},

])
function App() {

  return (
    <BrowserRouter>
    <div className='App' >
      <Navbar/>
      <Routes>
        <Route element={<Home/>} path='/' />
        <Route element={<About/>} path='/about' />
        <Route element={<Aidna/>} path='/aidna' />
        <Route element={<Solutions/>} path='/solutions' />
        <Route element={<Udos/>} path='/udos' />
        <Route element={<Udcp/>} path='/udcp' />
        <Route element={<ContactUs/>} path='/contactus' />
        <Route element={<ContactUs/>} path='/contactus' />
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  );
      
  
}

export default App
