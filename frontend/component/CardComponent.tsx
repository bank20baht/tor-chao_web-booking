import React from "react";

const CardComponent = (props: any) => {
  return (
    <div className="inline-block text-center p-3 text-3xl my-4 select-none border border-black rounded-6 font-bold text-black bg-white">
      {props.value}
    </div>
  );
};

export default CardComponent;
