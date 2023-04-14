import React from "react";
import Head from "next/head";

const index = () => {
  return (
    <div>
      <Head>
        <title>TOR-CHAO</title>
      </Head>
      <button
        type="button"
        className="border border-black py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border-transparent font-semibold bg-white text-black hover:bg-red-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
      >
        Solid
      </button>
    </div>
  );
};

export default index;
