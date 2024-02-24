import { useEffect, useState } from 'react'
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
import { useLocation } from "react-router-dom";
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

export const ScrollToTop =  () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
function App() {
  // window.scrollTo(0, 0)

  return (
    <BrowserRouter  >
    {/* <div className='App' > */}
      {/* <ScrollToTop /> */}
      <Navbar/>
        <ScrollToTop/>
      <Routes>
        <Route element={<Home/>}  path='/' />
        <Route element={<About/>} path='/about' />
        <Route element={<Aidna/>} path='/aidna' />
        <Route element={<Solutions/>} path='/solutions' />
        <Route element={<Udos/>} path='/udos' />
        <Route element={<Udcp/>} path='/ucdp' />
        {/* <Route element={<ContactUs/>} path='/contactus' /> */}
        <Route element={<ContactUs/>} path='/contactus' />
      </Routes>
      <Footer/>
    {/* </div> */}
    </BrowserRouter>
  );
      
  
}

export default App
