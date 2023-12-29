import React from "react";
import Sidebar from "../components/sidebar";
import Account from "../components/Account";

const Tabs = () => {
  return (
    <>
      <div className='md:px-20 px-0 md:py-20 py-0 bg-white md:bg-footer min-h-screen'>
        <div className='md:flex block gap-10'>
          <Sidebar />
          <div className=' md:shadow-lg shadow-transparent rounded-xl bg-white scrolly w-full md:w-[75%]'>
            <Account />
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
