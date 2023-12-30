import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SaveListings from "../components/saveListings";
import AccountHeader from "../components/AccountHeader";

const Tabs = () => {
  const [openTab, setOpenTab] = React.useState(1);
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
  return (
    <div className='md:bg-footer bg-white border-t-2 w-full h-screen'>
      <header className='bg-white hidden md:block py-3 px-10'>
        <form onSubmit={handleSubmit} className='flex   '>
          <input
            type='text'
            required
            placeholder='Search..'
            className='bg-footer w-1/2 noout py-2 px-4 rounded-s-lg'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className='bg-footer pr-4 flex items-center rounded-e-lg'>
            <span className=''>
              <IoSearchOutline className=' text-lg' />
            </span>
          </button>
        </form>
      </header>

      <div className='md:p-10 p-0'>
        <div>
          <div className=' flex gap-10 '>
            <div className='w-full bg-white md:border-2 border-0 md:rounded-xl'>
              <div className=''>
                <h1 className='text-xl p-5 border-b-2 font-semibold'>
                  Saved Listings
                </h1>
                <p className='text-base opacity-80 '></p>
                <div className='scroll'>
                  <SaveListings />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
