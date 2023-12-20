import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/sidebar";
import Account from '../components/Account'

const Tabs = () => {

  return (
    <>
      <Header />
      <div className="px-20 py-20  bg-footer">
        <div className="flex gap-[5%]">
          <Sidebar />
          <div className=" rounded-xl bg-white scrolly w-[75%]">
            <Account />
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
