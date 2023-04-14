import React from "react";

const Calendar = (props: any) => {
  const numbers = Array.from({ length: 31 }, (_, i) => i + 1);
  
  return (
    <div>
      <div className="grid  grid-cols-7 gap-6 mx-auto mt-6 bg-red-500">
        <p className="flex items-center justify-center h-16 text-white">Sunday</p>
        <p className="flex items-center justify-center h-16 text-white">Monday</p>
        <p className="flex items-center justify-center h-16 text-white">Tuesday</p>
        <p className="flex items-center justify-center h-16 text-white">Wednesday</p>
        <p className="flex items-center justify-center h-16 text-white">Thursday</p>
        <p className="flex items-center justify-center h-16 text-white">Friday</p>
        <p className="flex items-center justify-center h-16 text-white">Saturday</p>
      </div>
      <div className="bg-red-500 w-auto grid grid-cols-7 grid-row-3 gap-1">
        {numbers.map((n) => (
          <div
            key={n}
            className="py-2.5 inline-block text-center p-5 text-3xl my-4 select-none border border-black rounded-6 font-bold text-black bg-white"
          >
            {n}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
