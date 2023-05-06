import React from "react";

const CardRoom = (props:any) => {
  return (
<div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="https://images.unsplash.com/photo-1446057468532-87b7525217d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{props.value}</h2>
    <p>99/897 Thailand</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Infomation</button>
      <button className="btn btn-primary">Reserve</button>
    </div>
  </div>
</div>
  );
};

export default CardRoom;