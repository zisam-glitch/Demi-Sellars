import { IoSearchOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header() {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    urlParams.set("type", "sale");
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
    <div>
      <p className="pb-2 font-medium">Enter a location</p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row justify-between gap-4"
      >
        <input
          type="text"
          required
          placeholder="e.g Oxford or NW3"
          className="w-full outline outline-1 focus:outline-lightblue rounded p-3"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="flex gap-2  bg-lightblue py-3 justify-center px-6 outline outline-lightblue outline-1 rounded hover:shadow-lg hover:bg-litedarkblue">
          <div className="flex items-center gap-3 ">
              <div className="w-full flex gap-2 items-center ">
                <span>
                  <IoSearchOutline className="text-white text-xl" />
                </span>
                <span className="text-white	">Search</span>
              </div>
          </div>
        </button>
      </form>
    </div>
  );
}
