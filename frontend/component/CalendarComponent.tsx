import React from "react";

const Calendar = (props: any) => {
  const numbers = Array.from({ length: 32 }, (_, i) => i);
  return (
    <div className="bg-red-500 w-auto grid grid-cols-7 grid-row-3 gap-1">
      {numbers.map((n) => (
        <div key={n} className="py-2.5 inline-block text-center p-5 text-3xl my-4 select-none border border-black rounded-6 font-bold text-black bg-white">
          {n}
        </div>
      ))}
      
    </div>
  );
};

export default Calendar;