import { Link, useNavigate, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { Button, Drawer } from "antd";
import { RxAvatar } from "react-icons/rx";
import { HiOutlineMail } from "react-icons/hi";
import { RxPencil1 } from "react-icons/rx";
import { LuLogOut } from "react-icons/lu";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <header className="shadow">
      <div className="flex justify-between items-center max-w-full mx-auto py-5 px-10">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-2xl flex flex-wrap">
            <span className="text-darkblue">Demi</span>
            <span className="text-lightblue">Sellars</span>
          </h1>
        </Link>
        {/* <form
          onSubmit={handleSubmit}
          className='bg-slate-100 p-3 rounded-lg flex items-center'
        >
          <input
            type='text'
            placeholder='Search...'
            className='bg-transparent focus:outline-none w-24 sm:w-64'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch className='text-slate-600' />
          </button>
        </form> */}
        <ul className="flex text-lg gap-6">
          <NavLink
            to="/search?type=sale"
            exact
            className="hidden sm:inline font-medium text-black decoration-lightblue decoration-2	hover:underline hover:underline-offset-4 py-3 "
          >
            <li>For Sale</li>
          </NavLink>
          <NavLink
            to="/search?type=rent"
            exact
            className="hidden sm:inline font-medium text-black decoration-lightblue decoration-2	hover:underline hover:underline-offset-4 py-3 "
          >
            <li>To Rent</li>
          </NavLink>
          <NavLink
            to="/search"
            exact
            className="hidden sm:inline font-medium text-black decoration-lightblue decoration-2	hover:underline hover:underline-offset-4 py-3 "
          >
            <li>House prices</li>
          </NavLink>
          <NavLink
            to="/about-us"
            exact
            className="hidden sm:inline font-medium text-black decoration-lightblue decoration-2	hover:underline hover:underline-offset-4 py-3 "
          >
            <li>About Us</li>
          </NavLink>
          <NavLink
            to="/our-services"
            exact
            className="hidden sm:inline font-medium text-black decoration-lightblue decoration-2	hover:underline hover:underline-offset-4 py-3 "
          >
            <li>Our Services</li>
          </NavLink>
          <NavLink
            to="/contact-us"
            exact
            className="hidden sm:inline font-medium text-black decoration-lightblue decoration-2	hover:underline hover:underline-offset-4 py-3 "
          >
            <li>Contact Us</li>
          </NavLink>
        </ul>
        <ul className="flex gap-6">
          {/* <Link to="/">
            <li className="hidden sm:inline font-medium text-black decoration-lightblue decoration-2	hover:underline hover:underline-offset-4 py-3 ">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline font-medium text-black decoration-lightblue decoration-2	hover:underline hover:underline-offset-4 py-3">
              About
            </li>
          </Link> */}

          {currentUser ? (
            <>
              <ul className="flex text-lg gap-6 items-center">
                <li>
                  <div className="hidden sm:inline font-medium text-blac ">
                    <li className="profile">
                      <Button
                        className="text-black shadow-none text-lg p-0 outline-none border-[0] hidden sm:inline font-light"
                        onClick={showDrawer}
                      >
                        <li className="hidden  sm:inline font-medium text-black py-3 ">
                          <div className="flex flex-row gap-3 items-center">
                            <span>Account</span>
                            <span>
                              <img
                                className="w-8 h-8 rounded-full"
                                src={currentUser.avatar}
                                alt=""
                              />
                            </span>
                          </div>
                        </li>
                      </Button>
                      <Drawer
                        width={340}
                        placement="right"
                        onClose={onClose}
                        open={open}
                        className="w-20"
                      >
                        <div className="px-8 py-4  bg-purple">
                          <ul>
                            <Link
                              to="/my-account"
                            >
                              <li className="text-2xl cursor-pointer pb-5 font-semibold decoration-lightblue decoration-2	hover:underline hover:underline-offset-4 ">
                                Account
                              </li>
                            </Link>
                            <li className="text-2xl cursor-pointer py-5 font-semibold decoration-lightblue decoration-2	hover:underline hover:underline-offset-4 ">
                              My listings
                            </li>
                            <li className="text-2xl cursor-pointer py-5 font-semibold decoration-lightblue decoration-2	hover:underline hover:underline-offset-4">
                              Saved listings
                            </li>
                            <li className="text-2xl cursor-pointer py-5 font-semibold decoration-lightblue decoration-2	hover:underline hover:underline-offset-4 ">
                              Create listing
                            </li>
                            <li className="text-2xl cursor-pointer py-5 font-semibold decoration-lightblue decoration-2	hover:underline hover:underline-offset-4 ">
                              Edit listing
                            </li>
                          </ul>
                        </div>
                        <div className="px-8 py-4">
                          <ul>
                            <li className="text-lg cursor-pointer flex gap-3 items-center py-5 font-semibold ">
                              <RxAvatar className="text-[28px]" />
                              <p className="decoration-lightblue decoration-2	hover:underline hover:underline-offset-4">
                                Profile
                              </p>
                            </li>

                            <li className="text-lg cursor-pointer flex gap-3 items-center py-5 font-semibold ">
                              <HiOutlineMail className="text-[28px]" />
                              <p className="decoration-lightblue decoration-2	hover:underline hover:underline-offset-4">
                                Email preferences
                              </p>
                            </li>
                            <li className="text-lg cursor-pointer flex gap-3 items-center py-5 font-semibold ">
                              <RxPencil1 className="text-[28px]" />
                              <p className="decoration-lightblue decoration-2	hover:underline hover:underline-offset-4">
                                Change Email
                              </p>
                            </li>
                            <li className="text-lg cursor-pointer flex gap-3 items-center py-5 font-semibold ">
                              <RxPencil1 className="text-[28px]" />
                              <p className="decoration-lightblue decoration-2	hover:underline hover:underline-offset-4">
                                Change Password
                              </p>
                            </li>

                            <li className="text-lg cursor-pointer flex gap-3 items-center py-5 font-semibold ">
                              <LuLogOut className="text-[28px]" />
                              <p className="decoration-lightblue decoration-2	hover:underline hover:underline-offset-4">
                                Sing Out
                              </p>
                            </li>
                          </ul>
                        </div>
                      </Drawer>
                    </li>
                  </div>
                </li>
              </ul>
            </>
          ) : (
            <button className="flex gap-2 items-center bg-lightblue py-2 px-6 outline outline-lightblue outline-1 rounded hover:shadow-lg hover:bg-litedarkblue">
              <span className="text-white	"> Sign in</span>
            </button>
          )}
        </ul>
      </div>
    </header>
  );
}
