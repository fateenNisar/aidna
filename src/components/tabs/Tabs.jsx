import React, { useEffect, useState } from "react";
import "./Tab.css";
export const Tabs = ({ data }) => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };



  // const slide = () => {
  //   const intervalId = setInterval(() => {
  //     setActiveTab((prevTab) => (prevTab % data.length) + 1);
  //   }, 3000);
  
    // Clear the interval when the component unmounts
    // return () => clearInterval(intervalId);
  // }

  useEffect( () => {
  // slide()
  }, [])

  return (
    <div className="relative">
      <div className="container   mt-20   self-center items-center justify-center mx-auto  hidden  md:flex">
        <div className=" relative z-[10]  ">
          <div className="flex  text-white  bg-backgroundColor   border-gray-600 p-[3px] b rounded-lg  ">
            {data &&
              data.map((item ,index) => {
                return (
                  <div key={index} className="button ">
                    <button
                      onClick={() => {
                        handleTabClick(index+1);
                      }}
                      className={`tab-btn ${
                        activeTab == index+1  ? "tab-btn-active" : ""
                      }`}
                    >
                      {item.btnTitle}
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      <div className="max-w-[1300px] mx-auto  b h-[500px] border-gray-600   rounded-xl mt-[-28px] relative overflow-hidden  p-10  flex justify-center">
        {/* {activeTab === 1 && <div className="text-white">Content for Tab 1</div>} */}
        {/* {activeTab === 2 && <div className="text-white">Content for Tab 2</div>} */}
        {data &&
          data.map((item,index) => {
            return (
              activeTab === index+1 && (
                <div key={index} className="text-white font-medium text-sm md:text-xl  items-center  px-5  md:flex">
                <div  className="flex-1 " >{item.content}</div>
                {/* <div>{item.image}</div> */}
                <div className="flex-1">
                <img    className="h-full w-full" src={item.img} />

                </div>
                </div>
              )
            );
          })}
      </div>
    </div>
  );
};
