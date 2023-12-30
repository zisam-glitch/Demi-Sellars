import React from "react";
import Account from "../components/Account";

const Tabs = () => {
  return (
    <div className='max-w-screen min-h-screen bg-footer pt-14'>
      <div className='shadow-lg shadow-transparent border w-[90%] rounded-xl bg-white mb-10 mx-auto px-10'>
        <Account />
      </div>
    </div>
  );
};

export default Tabs;
