import React from 'react'
import "./ClientLogo.css"
// import Carousel from 'react-material-ui-carousel';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export const ClientLogo = () => {
  const clientLogos = [
    "./src/assets/client-logos/1.png",
    "./src/assets/client-logos/2.png",
    "./src/assets/client-logos/3.png",
    "./src/assets/client-logos/4.png",
    "./src/assets/client-logos/5.png",
    "./src/assets/client-logos/6.png",
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed:3000,
  arrows:false    
  };
  return (
    <div  className='client-logo-carousel  mx-auto max-w-[1200px] ' >  
       <Slider {...settings} className='text-white'>
       <div className='bg-white h-32  md:h-64 p-5  '>
        <img src=" ./src/assets/client-logos/1.png" className='client-logo-img' alt="" />
      </div>
      <div className='bg-white h-32  md:h-64 p-10 ' >
      <img src=" ./src/assets/client-logos/2.png" className='client-logo-img' alt="" />
      </div>
      <div className='bg-white h-32  md:h-64  p-0'>
      <img src=" ./src/assets/client-logos/8.jpg" className='client-logo-img' alt="" />

      </div>
      <div className='bg-white  h-32  md:h-64  p-5'>
      <img src=" ./src/assets/client-logos/4.png" className='client-logo-img' alt="" />

      </div>
      <div className='bg-white h-32  md:h-64  p-0'>
      <img src=" ./src/assets/client-logos/5.png" className='client-logo-img' alt="" />

      </div >
      <div className='bg-white h-32  md:h-64  p-5'>
      <img src=" ./src/assets/client-logos/6.jpeg" className='client-logo-img' alt="" />

      </div>

      </Slider>

    {/* <div className="flex justify-center items-center  flex-nowrap  flex-col md:flex-row     gap-11   "> */}

    {/* <div className="">
      <img className="client-logo-img" src="./src/assets/client-logos/1.png" />
    </div>

    <div className="">
      <img className="client-logo-img" src="./src/assets/client-logos/2.png" />
    </div>



    <div className="">
      <img className="client-logo-img" src="./src/assets/client-logos/3.png" />
    </div>


    <div className="">
      <img className="client-logo-img" src="./src/assets/client-logos/4.png" />
    </div>


    <div className="">
      <img className="client-logo-img" src="./src/assets/client-logos/5.png" />
    </div>



    <div className="">
      <img className="client-logo-img" src="./src/assets/client-logos/6.png" />
    </div>


 */}

  {/* </div> */}
    </div>

  )
}
