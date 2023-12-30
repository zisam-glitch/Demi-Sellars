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
    <div className='min-w-[20%] h-full bg-white border-r-2 border-t-2'>
      <div className='h-screen flex flex-col justify-between pt-2 relative'>
        <div>
          <div className='border-b-2'>
            <div className=''>
              <nav className=' flex flex-col gap-1 ' id='sidebar'>
                <NavLink
                  className='text-lg px-4 py-2'
                  to='/my-account'
                  exact
                  activeClassName=''
                >
                  <span className='flex items-center gap-3 text-sm md:text-lg'>
                    <IoHomeOutline className=' ' />
                    Dashboard
                  </span>
                </NavLink>

                <NavLink
                  className='text-lg px-4 py-2'
                  to='/dashboard/mortgage-calculator'
                  exact
                  activeClassName=''
                >
                  <span className='flex items-center gap-3 text-sm md:text-lg'>
                    <CiCalculator1 className='' />
                    Mortgage Calculator{" "}
                  </span>
                </NavLink>
                <NavLink
                  className='text-lg px-4 py-2'
                  to='/stamp'
                  exact
                  activeClassName=''
                >
                  <span className='flex items-center gap-3 text-sm md:text-lg'>
                    <TfiStamp className=' ' />
                    Stamp Duty Calculator{" "}
                  </span>
                </NavLink>
              </nav>
            </div>
          </div>
          <div className=' py-6  '>
            <nav className=' flex flex-col gap-0 ' id='sidebar'>
              <NavLink
                className='text-lg px-4 py-2'
                to='/listing/saved'
                exact
                activeClassName=''
              >
                <span className='flex items-center gap-3 text-sm md:text-lg'>
                  <CiBookmark className='text-normal ' />
                  Saved listings
                </span>
              </NavLink>
              <NavLink
                className='text-lg px-4 py-2'
                to='/create-listing'
                exact
                activeClassName=''
              >
                <span className='flex items-center gap-3 text-sm md:text-lg'>
                  <IoCreateOutline className='text-lg' />
                  Create listing
                </span>
              </NavLink>
              <NavLink
                className='text-lg px-4 py-2'
                to='/my-listings'
                exact
                activeClassName=''
              >
                <span className='flex items-center gap-3 text-sm md:text-lg'>
                  <CiBoxList className='text-lg' />
                  My listings
                </span>
              </NavLink>
              {currentUser && currentUser.role === "admin" ? (
                <NavLink
                  className='text-lg px-4 py-2'
                  to='/listing/requests'
                  exact
                  activeClassName=''
                >
                  <span className='flex items-center gap-3 text-sm md:text-lg'>
                    <MdManageSearch className='text-lg' />
                    Manage listings
                  </span>
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
              className='text-lg px-4 py-2'
              to='/settings'
              exact
              activeClassName=''
            >
              <span className='flex items-center gap-3 text-sm md:text-lg'>
                <CiSettings className=' text-lg' />
                Settings
              </span>
            </NavLink>
            <NavLink
              className='text-lg px-4 py-2'
              to='/sign-out'
              exact
              activeClassName=''
            >
              <span className='flex items-center gap-3 text-sm md:text-lg'>
                <IoIosLogOut className='' />
                Sign Out
              </span>
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
}
