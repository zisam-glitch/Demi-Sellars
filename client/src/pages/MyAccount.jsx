import React from "react";
import Account from "../components/Account";

const Tabs = () => {
  return (
    <div className='max-w-screen min-h-screen md:bg-footer md:pt-14 pt-4'>
      <div className='md:shadow-lg shadow-transparent md:border md:w-[90%] w-full  rounded-xl bg-white mb-10 mx-auto md:px-10'>
        <Account />
      </div>
    </div>
  );
};

export default Tabs;
