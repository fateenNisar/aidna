import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import UilListUiAlt from '@iconscout/react-unicons/icons/uil-list-ui-alt';
import { PrimaryButton } from '../button/PrimaryButton';
// import Logo from "../../assets/aidna.svg"
export const Navbar = () => {

  const [isOpen,setIsOpen ] = useState(false)
  const [colorChange,setColorChange ] = useState(false)

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
        setColorChange(true);
    } else {
        setColorChange(false);
    }
};
window.addEventListener("scroll", changeNavbarColor);  return (
    <>
    <nav     className=''  >
      <div className={`nav-container  flex justify-between    items-center sm:hidden lg:flex max-sm:hidden md:flex w-full  ${colorChange ? "nav-overlay" : null}`}>

      <NavLink to={"/"} className="logo  text-white "><img  className="w-[250px] h-[220px] mt-3 " src={"aidna.svg"} alt="" /></NavLink >
      <ul className="links">
        <li>
          <NavLink className={"text-white hover:text-primarayColor"}  to={"/"} >Home</NavLink>
        </li>
        <li>
          <NavLink className={"text-white  hover:text-primarayColor"}  to={"/about"} >About</NavLink>
        </li>

 
        <li>
          <NavLink className={"text-white hover:text-primarayColor"}  to={"/aidna"} >Aidna</NavLink>
        </li>


        <li>
          <NavLink className={"text-white hover:text-primarayColor"}  to={"/udos"} >üdos</NavLink>
        </li>



        <li>
          <NavLink className={"text-white hover:text-primarayColor"}  to={"/ucdp"} >ücdp</NavLink>
        </li>

        <li>
          <NavLink className={"text-white hover:text-primarayColor"}  to={"/solutions"} >Solutions </NavLink>
        </li>


      </ul>

        <div className="learn-more mr-16  ">
          {/* <NavLink >Contact Us</NavLink> */}
        <PrimaryButton to={"/contactus"} >Contact Us</PrimaryButton>
        </div>


      </div>

        {/* hamburger menu  */}



        <div  className="  bg-transparent m-5  w-full md:hidden sm:block z-[11] cursor-pointer" >
            <UilListUiAlt size="10px" onClick={()=> {
              setIsOpen(!isOpen)
              // alert(isOpen)
            }}  className={"float-right cursor-pointer  scale-50   "}  color={"white"} />
            {/* <h4 className='text-white float-right' >X</h4> */}
         </div>





    </nav>



    <div  className={`  md:hidden fixed top-0  bottom-0 left-0  mobile-menu  transition   bg-backgroundColor z-10  w-full ease-in-out   ${isOpen ? "translate-x-0" : "translate-x-full "} `}>
          <ul className={`mobile_links  " ${isOpen ? "flex" : "hidden"} `}>
          <li  className='mt-4'>
          {/* <NavLink className={"text-white hover:text-primarayColor"}  to={"/home"} >Home</NavLink> */}
          <PrimaryButton  onPress={() => {
            setIsOpen(false)
          }}   to={"/"}>Home</PrimaryButton>
        </li>
        <li>
          <PrimaryButton  onPress={() => {
            setIsOpen(false)
          }}  to={"/about"}>About</PrimaryButton>
        </li>



        <li>
          <PrimaryButton onPress={() => {
            setIsOpen(false)
          }}  to={"/aidna"}>Aidna</PrimaryButton>
        </li>

        <li>
          
          <PrimaryButton onPress={() => {
            setIsOpen(false)
          }}  to={"/udos"}>üdos</PrimaryButton>

                </li>

                <li>
          
          <PrimaryButton onPress={() => {
            setIsOpen(false)
          }}  to={"/ucdp"}>ücdp</PrimaryButton>

                </li>



                <li>
          
          <PrimaryButton onPress={() => {
            setIsOpen(false)
          }}  to={"/contactus"}>Contact Us</PrimaryButton>

                </li>
                <li>
          <PrimaryButton onPress={() => {
            setIsOpen(false)
          }}  to={"/solutions"}>Solutions </PrimaryButton>

                </li>

            
          </ul>
          
        

        </div>
            </>

            
    
  );
};