import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/sidebar";
import Account from '../components/Account'

const Tabs = () => {

  return (
    <>
      <Header />
      <div className="md:px-20 px-6 md:py-20 py-6  bg-footer">
        <div className="md:flex block gap-[5%]">
          <Sidebar />
          <div className=" shadow-lg rounded-xl bg-white scrolly w-full md:w-[75%]">
            <Account />
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
