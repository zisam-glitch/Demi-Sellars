import React from "react";
import { Link, NavLink } from "react-router-dom";
import { CiBookmark } from "react-icons/ci";
import { IoCreateOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { CiCalculator1 } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { CiBoxList } from "react-icons/ci";
import { TfiStamp } from "react-icons/tfi";
import { useSelector } from "react-redux";
import { MdManageSearch } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";

export default function Sidebar() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className='md:min-w-[20%] min-w-[10%] h-full bg-white border-r-2 border-t-2'>
      <div className='h-screen flex flex-col justify-between pt-2 relative'>
        <div>
          <div className='border-b-2'>
            <div className=''>
              <nav className=' flex flex-col gap-1 ' id='sidebar'>
                <NavLink
                  className='text-lg justify-center md:justify-start md:pl-4 py-2 flex gap-2 items-center'
                  to='/my-account'
                  exact
                  activeClassName=''
                >
                  <IoHomeOutline className=' ' />
                  <span className='hidden md:block'>Dashboard</span>
                </NavLink>

                <NavLink
                  className='text-lg justify-center md:justify-start md:pl-4 py-2 flex gap-2 items-center'
                  to='/dashboard/mortgage-calculator'
                  exact
                  activeClassName=''
                >
                  <CiCalculator1 className='' />
                  <span className='hidden md:block'>Mortgage Calculator </span>
                </NavLink>
                <NavLink
                  className='text-lg justify-center md:justify-start md:pl-4 py-2 flex gap-2 items-center'
                  to='/stamp'
                  exact
                  activeClassName=''
                >
                  <TfiStamp className=' ' />
                  <span className='hidden md:block'>
                    Stamp Duty Calculator{" "}
                  </span>
                </NavLink>
              </nav>
            </div>
          </div>
          <div className=' py-6  '>
            <nav className=' flex flex-col gap-0 ' id='sidebar'>
              <NavLink
                className='text-lg justify-center md:justify-start md:pl-4 py-2 flex gap-2 items-center'
                to='/listing/saved'
                exact
                activeClassName=''
              >
                <CiBookmark className='text-normal ' />
                <span className='hidden md:block'>Saved listings</span>
              </NavLink>
              <NavLink
                className='text-lg justify-center md:justify-start md:pl-4 py-2 flex gap-2 items-center'
                to='/create-listing'
                exact
                activeClassName=''
              >
                <IoCreateOutline className='text-lg' />
                <span className='hidden md:block'>Create listing</span>
              </NavLink>
              <NavLink
                className='text-lg justify-center md:justify-start md:pl-4 py-2 flex gap-2 items-center'
                to='/my-listings'
                exact
                activeClassName=''
              >
                <CiBoxList className='text-lg' />
                <span className='hidden md:block'>My listings</span>
              </NavLink>
              {currentUser && currentUser.role === "admin" ? (
                <NavLink
                  className='text-lg justify-center md:justify-start md:pl-4 py-2 flex gap-2 items-center'
                  to='/listing/requests'
                  exact
                  activeClassName=''
                >
                  <MdManageSearch className='text-lg' />
                  <span className='hidden md:block'>Manage listings</span>
                </NavLink>
              ) : (
                ""
              )}
            </nav>
          </div>
        </div>
        <div className='sticky bottom-0'>
          <nav className=' flex flex-col gap-0 ' id='sidebar'>
            <NavLink
              className='text-lg justify-center md:justify-start md:pl-4 py-2 flex gap-2 items-center'
              to='/settings'
              exact
              activeClassName=''
            >
              <CiSettings className=' text-lg' />
              <span className='hidden md:block'>Settings</span>
            </NavLink>
            <NavLink
              className='text-lg justify-center md:justify-start md:pl-4 py-2 flex gap-2 items-center'
              to='/sign-out'
              exact
              activeClassName=''
            >
              <IoIosLogOut className='' />
              <span className='hidden md:block'>Sign Out</span>
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
}
