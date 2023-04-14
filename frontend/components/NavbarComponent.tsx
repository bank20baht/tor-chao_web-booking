import React from "react";

const NavbarComponent = () => {
  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-red-500 text-sm py-4">
    <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
      <a className="flex-none text-xl font-semibold dark:text-white" href="#">TOR-CHAO</a>
      <div className=" flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:pl-5">
        <a className="font-medium text-white" href="/" aria-current="page">main</a>
        <a className="font-medium text-white hover:text-gray-400 " href="/Account">Account</a>
        <a className="font-medium text-white hover:text-gray-400 " href="/Login">Login</a>
        <a className="py-2 px-4 border border-black font-medium text-black bg-white hover:bg-red-600 hover:text-white" href="/Register">Register</a>
        
      </div>
    </nav>
  </header>
  );
};

export default NavbarComponent;
