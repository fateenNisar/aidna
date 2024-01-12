import React, { useEffect } from 'react'
import {ScrollableSection} from '../../components/scrollable/Scrollable';
import { AboutHero } from '../../components/aboutHero/AboutHero';
import {Title} from "../../components/title/Title.jsx"
import { Leadership } from '../../components/leadership/Leadership.jsx';
import AOS from 'aos';
import "aos/dist/aos.css";
import { TiltCard } from '../../components/TiltCards/TiltCard.jsx';

export const About = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div  className='pt-[90px]'>
      <div data-aos='fade-up'  data-aos-duration="3000">  

      <AboutHero />
      </div>

    <div data-aos="flip-left" data-aos-duration="3000" >

    <div className="hidden">
    
      <Title heading={"Our Leadership"} />

      {/* <Leadership  /> */}
      </div>
    </div>


    <div className="flex gap-8 mx-auto w-[90%] mt-10 max-md:flex-col">
              <TiltCard  classes={"text-xl"}  title={"Forward Thinking"} subtitle={"We pride ourselves on pushing the boundaries of digital technologies. We combine relevant trends and best practices to build platforms, products, and solutions with longevity."} / >
        <TiltCard  classes={"text-xl"} title={"Constant Growth"} subtitle={"Our team is composed of ambitious creatives and strategists; each member is dedicated to perfecting their craft and taking brands to the next level."} / >
        <TiltCard  classes={"text-xl"} title={"Pure Passion"} subtitle={"Every member of our team is genuinely passionate about doing great work for brands we believe in—from global technology giants, to ambitious startups.s"} / >
      </div>


    </div>
  )
}
