import React from 'react'
import "./Leadership.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export const Leadership = () => {
  return (
    <div className='flex max-w-[1200px] mx-auto flex-col md:flex-row   gap-4 '>
        <div className='flex-1  flex border-leadership ' >
            <div className="leadership-left p-8    ">

                <img className='h-[170px] w-[170px] rounded-md'  src="https://www.hubble.net/_next/image/?url=https%3A%2F%2Fhubblecms.wpengine.com%2Fwp-content%2Fuploads%2F2022%2F06%2FTom-Parker.png&w=1920&q=75" alt="" />
            </div>
            <div className="leadership-right mt-10 ml-4">
                <h2 className='text-white text-[32px] font-medium'>Tom Parker</h2>
                <p className='text-white   text-[20px] font-normal pb-3' >Ceo & Janitor</p>
                <div className="linkedInIcon inline bg-white rounded-full p-1     ">
                    <LinkedInIcon color='white' className='' />
                </div>
            </div>
        </div>
        <div className='flex-1  flex border-leadership ' >
            <div className="leadership-left p-8    ">

                <img className='h-[170px] w-[170px] rounded-md'  src="https://www.hubble.net/_next/image/?url=https%3A%2F%2Fhubblecms.wpengine.com%2Fwp-content%2Fuploads%2F2022%2F06%2FTom-Parker.png&w=1920&q=75" alt="" />
            </div>
            <div className="leadership-right mt-10 ml-4">
                <h2 className='text-white text-[32px] font-medium'>Tom Parker</h2>
                <p className='text-white   text-[20px] font-normal pb-3' >Ceo & Janitor</p>
                <div className="linkedInIcon inline bg-white rounded-full p-1     ">
                    <LinkedInIcon color='white' className='' />
                </div>
            </div>
        </div>
    </div>
  )
}
