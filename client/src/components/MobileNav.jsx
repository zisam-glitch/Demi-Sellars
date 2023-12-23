import { Link, useNavigate, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { Button, Drawer } from "antd";
import { RxAvatar } from "react-icons/rx";
import { HiOutlineMail } from "react-icons/hi";
import { RxPencil1 } from "react-icons/rx";
import { LuLogOut } from "react-icons/lu";
import MobileNav from "./MobileNav";

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
    <>
      <ul className="flex text-lg gap-6 items-center">
        <li>
          <div className="inline font-medium text-blac ">
            <li className="profile">
              <Button
                className="text-black shadow-none text-lg p-0 outline-none border-[0]  inline font-light"
                onClick={showDrawer}
              >
                <li className="inline font-medium text-black py-3 ">
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
                width={500}
                placement="right"
                onClose={onClose}
                open={open}
                className="w-20"
              >
                <div className="px-8 py-4  bg-purple">
               
                </div>
              </Drawer>
            </li>
          </div>
        </li>
      </ul>
    </>
  );
}
