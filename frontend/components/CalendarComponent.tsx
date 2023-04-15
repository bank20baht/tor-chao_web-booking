import React, { useState } from "react";
import { useRouter } from "next/router";

const Calendar = (props: any) => {
  const [active, setActive] = useState(false);
  const router = useRouter()
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
      <div className="m-0 p-3 bg-red-500 w-auto grid grid-cols-7 ">
        {numbers.map((day) => (
          <div
            key={day}
            onClick={() => {
              router.push("/article/" + day) 
            }}
            className="m-0 hover:bg-black hover:text-white py-10 inline-block text-center text-3xl my-4 select-none border border-black rounded-6 font-bold text-black bg-white"
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
