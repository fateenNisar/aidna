import React from "react";
import { Tilt } from "react-tilt";
import "./TiltCard.css";
const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  // perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  scale: 1,
  // reset:          true,    // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

export const TiltCard = ({title, subtitle,classes}) => {
  return (
    <div className="flex gap-8 mx-auto w-[90%] mt-10 max-md:flex-col">
      <Tilt options={defaultOptions} className="flex-1">
        {/* <div className='flex-1'> */}
        <div className="card-container card-services text-center  big-card">
          <div className="card-body card-service-body">
            <h4 className= {classes}>{title && title}</h4>
            <p className="card-para">
              {subtitle}
            </p>
          </div>
        </div>

        {/* </div> */}
      </Tilt>


    </div>
  );
};
