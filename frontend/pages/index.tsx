import React from "react";
import Head from "next/head";
import CardComponent from "@/components/CardComponent";
import Calendar from "@/components/CalendarComponent";
import CardRoomComponent from "@/components/CardRoom";
const index = () => {
  return (
    <div>
      <Head>
        <title>TOR-CHAO</title>
      </Head>
      <div className="m-10">
        <h1>รายการทั้งหมด</h1>
        <CardComponent value="Hello" />
        <div className="flex justify-center m-3">
          <div className="grid grid-cols-3 gap-3">
            <CardRoomComponent value="room S503" />
            <CardRoomComponent value="room A708" />
            <CardRoomComponent value="room A709" />
            <CardRoomComponent value="room A710" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
