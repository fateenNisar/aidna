import React from 'react'
import "./Title.css";
import { NavLink } from 'react-router-dom';
// import { ArrowRightCircleIcon } from "@heroicons/24/";
import {useNavigate} from "react-router-dom"

export const Title = ({heading, subheading,icon}) => {
  const navigation = useNavigate()
  return (
    <>
    <div className='title' >
      <div className='flex gap-14 items-center '>

        <h1 >

        {heading}
        </h1>

        
      {
        heading && icon &&

        <svg   onClick={() => {
          navigation("/contactus")
          
        }} className='scale-[0.5] cursor-pointer'  fill="none" strokeWidth={1.5} stroke="#8755FE" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
        }
      </div>

        </div>
        <p className='text-center text-white subheading text-sm md:text-2xl my-24' >
            {subheading}
        </p>

    </>
  )
}
