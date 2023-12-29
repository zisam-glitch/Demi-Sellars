import React from "react";
import Sidebar from "../components/side-Bar";
import Account from "../components/Account";

const Tabs = () => {
  return (
    <>
      <div className=''>
        <div className='md:flex block gap-10'>
          <Sidebar />
          <div className='md:shadow-lg mt-10 shadow-transparent rounded-xl bg-white scrolly w-full md:w-[75%]'>
            <Account />
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
