import React from 'react'
import "./AboutHero.css"
export const AboutHero = () => {
  return (
    <section className='hero' >
        <div className='max-w-[500px] mx-auto mt-10' >

    <h1 className='text-white font-medium text-[64px] text-center' >We are AIDNA</h1>
    <p className='text-white text-center text-[22px] font-normal mt-3' >
    Innovative, Focused and Dedicated Industry Specialists braking out silo’s by sharing ideas, methodologies, and knowledge across all organizational teams.

</p>
        </div>


    {/* TODO  change hidden to flex  */}
    <div className="hidden  justify-between max-w-[1200px] flex-col md:flex-row mx-auto   items-center   mt-20">
            <div className=" text-white  text-[48px]  ">Our Story</div>
            <div className='w-[900px] h-[1px] horizontal-row hidden md:block' ></div>
        </div>    

  </section>
  )
}
