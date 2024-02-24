import React from 'react'
import "./Insights.css"
export const Insights = () => {
  return (
    <div className='flex w-[70%] justify-center items-center  mx-auto align-self gap-8  my-12    max-sm:flex-col   max-md:flex-col max-lg:w-[90%]   max-sm:mx-3' >
        <div className="  left  flex-1  h-24 flex justify-center items-center rounded-md   border-[1.3px] border-gray-700">
            <span className='  z-10 font-bold text-white text-4xl px-4 max-sm:py-4   max-md:py-6 '>67%</span>
            <span className='h-10 w-[1px] mr-4   left-seperator '   ></span>
            <span className='text-white'>of Digital security practitioners have blind-spots. </span>
        </div>
    
        <div className="  right  flex-1  h-24 flex justify-center items-center rounded-md   border-[1.3px] border-gray-700">
            <span className=' z-10 font-bold text-white text-4xl px-5 max-sm:py-4  max-md:py-4   '>74%</span>
            <span className='h-10 w-[1px] mr-4  right-seperator'   ></span>
            <span className='text-white'>
            of organizations fail to unlock true data & AI potential. 

              </span>
        </div>
    </div>
  )
}
