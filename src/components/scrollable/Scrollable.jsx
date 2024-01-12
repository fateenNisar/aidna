import React from "react";
import "./Scrollable.css";
export const ScrollableSection = ({data}) => {
  return (
    <>
    <div>

      
      {data && data.map( (item,index) => {
return (<div key={index} className="card   flex flex-col md:flex-row">

<div className="left- flex-1">
  <img className="object-cover" src={item.img} alt="" />
</div>
<div className="right-context flex-1">
  <h1>{item.title}</h1>
  <div>
    {item.content}
  </div>
</div>

</div>
)
      })}

      






    </div>

    </>
  );
};
