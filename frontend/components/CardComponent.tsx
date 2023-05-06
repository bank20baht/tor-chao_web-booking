import React from "react";

const CardComponent = (props: any) => {
  return (
    <div className="card w-100 bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="flex flex-row justify-between">
          <h2 className="card-title m-1">#1</h2>
          <div>
            <p className="text-xl">{props.value}</p>
            <p>date 5 may 2023</p>
          </div>
          <div>
            <button className="btn btn-primary m-1">infomation</button>
          <button className="btn btn-primary m-1">add document</button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
