import React from "react";
import Head from "next/head";
import CardComponent from "@/components/CardComponent";
import Calendar from "@/components/CalendarComponent";

const index = () => {
  return (
    <div>
      <Head>
        <title>TOR-CHAO</title>
      </Head>
      <div className="m-10">
        <Calendar />
      </div>
    </div>
  );
};

export default index;
