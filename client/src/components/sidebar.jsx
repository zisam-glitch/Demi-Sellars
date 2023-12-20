import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { VscAccount } from "react-icons/vsc";
import { IoCreateOutline } from "react-icons/io5";

export default function Sidebar() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="w-[20%] bg-footer flex flex-col rounded-xl  h-[calc(100vh-252px)] ">
      <div className="rounded-xl h-[30%] mb-6 shadow-xl bg-white flex flex-col gap-4 p-14 justify-center items-center">
        <img
          className="w-20 h-20 rounded-full"
          src={currentUser.avatar}
          alt=""
        />
        <h4 className="text-xl font-semibold capitalize">
          {currentUser.username}
        </h4>
      </div>
      <nav
        className="bg-white h-[70%] flex flex-col rounded-xl justify-center gap-0 py-8 shadow-xl "
        id="sidebar"
      >
        <NavLink
          className=" text-[20px]  px-6 py-5 font-semibold"
          to="/my-account"
          exact
        >
          <span className="flex items-center gap-3">
            <VscAccount className="text-2xl" />
            Profile
          </span>
        </NavLink>
        <NavLink className=" text-[20px]  px-6 py-5 font-semibold" to="/" exact>
          <span className="flex items-center gap-3">
            <VscAccount className="text-2xl" />
            Profile
          </span>
        </NavLink>
        <NavLink
          className=" text-[20px]  px-6 py-5 font-semibold"
          to="/create-listing"
          exact
        >
          <span className="flex items-center gap-3">
            <IoCreateOutline className="text-2xl" />
            Create listing
          </span>
        </NavLink>
        <NavLink
          className=" text-[20px]  px-6 py-5 font-semibold"
          to="/12"
          exact
        >
          <span className="flex items-center gap-3">
            <VscAccount className="text-2xl" />
            Account
          </span>
        </NavLink>
        <NavLink
          className=" text-[20px]  px-6 py-5 font-semibold"
          to="/123"
          exact
        >
          <span className="flex items-center gap-3">
            <VscAccount className="text-2xl" />
            Account
          </span>
        </NavLink>
        <NavLink
          className=" text-[20px]  px-6 py-5 font-semibold"
          to="/1234"
          exact
        >
          <span className="flex items-center gap-3">
            <VscAccount className="text-2xl" />
            Account
          </span>
        </NavLink>
        <NavLink
          className=" text-[20px]  px-6 py-5 font-semibold"
          to="/12345"
          exact
        >
          <span className="flex items-center gap-3">
            <VscAccount className="text-2xl" />
            Account
          </span>
        </NavLink>
      </nav>
    </div>
  );
}
