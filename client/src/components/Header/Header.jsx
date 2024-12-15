import React, { useState, useContext, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { userContext } from '../context/RiderContext';

import { CiSearch } from "react-icons/ci";
import { IoIosAddCircleOutline, IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { IoCarSport } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";

const Header = () => {
  const { user, setUser } = useContext(userContext);

  const [log, setLog] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const divRef = useRef(null);
  const navigate = useNavigate();

  // Close dropdown when clicking outside
  const handleClickOutside = (event) => {
    if (divRef.current && !divRef.current.contains(event.target)) {
      setIsVisible(false);
      setLog(false);
    }
  };

  const toggleDropdown = () => {
    setLog((prev) => !prev);
    setIsVisible((prev) => !prev);
  };

  // Attach and clean up event listener
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full h-[4.5em] bg-white flex items-center justify-between pr-6 pl-6 text-md fixed z-20">
      <div className="flex">
        <p
          className="flex items-center justify-between text-3xl font-semibold pr-3 pl-3 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <IoCarSport className="text-[#0F4FB4] text-5xl" />
          Pooool
        </p>
      </div>
      <div className="flex">
        <p
          className="flex items-center justify-between text-[#0F4FB4] hover:text-[#008EC2] font-semibold w-[7em] pr-3 pl-3 mr-1 cursor-pointer"
          onClick={() => navigate("/search")}
        >
          <CiSearch className="text-3xl" />
          Search
        </p>
        <p
          className="flex items-center justify-between text-[#0F4FB4] hover:text-[#008EC2] font-semibold w-[10em] pr-3 pl-3 mr-1 cursor-pointer"
          onClick={() => navigate("/publishRide")}
        >
          <IoIosAddCircleOutline className="text-2xl" />
          Publish a ride
        </p>
        <div className="flex flex-col relative" ref={divRef}>
          <div
            className="flex items-center justify-between text-[#0F4FB4] hover:text-[#008EC2] font-semibold w-[6em] pr-3 pl-3 cursor-pointer"
            onClick={toggleDropdown}
          >
            <FaUserCircle className="text-5xl" />
            {log ? (
              <IoIosArrowUp className="text-2xl text-gray-400" />
            ) : (
              <IoIosArrowDown className="text-2xl text-gray-400" />
            )}
          </div>
          {isVisible && (
            <div className="bg-white text-gray-900 w-[20em] absolute top-[4em] right-0 shadow-lg border rounded">
              {user ? (
                <>
                  <p
                    className="w-full flex items-center justify-between p-4 hover:bg-[#EDEDED] cursor-pointer"
                    onClick={() => navigate("/profile")}
                  >
                    Profile
                    <MdKeyboardArrowRight className="text-3xl text-gray-400" />
                  </p>
                  <p
                    className="w-full flex items-center justify-between p-4 hover:bg-[#EDEDED] cursor-pointer"
                    onClick={() => {
                      setUser(null); // Clear user context
                      navigate("/"); // Redirect to home
                    }}
                  >
                    Logout
                    <MdKeyboardArrowRight className="text-3xl text-gray-400" />
                  </p>
                </>
              ) : (
                <>
                  <p
                    className="w-full flex items-center justify-between p-4 hover:bg-[#EDEDED] cursor-pointer"
                    onClick={() => navigate("/login")}
                  >
                    Log in
                    <MdKeyboardArrowRight className="text-3xl text-gray-400" />
                  </p>
                  <p
                    className="w-full flex items-center justify-between p-4 hover:bg-[#EDEDED] cursor-pointer"
                    onClick={() => navigate("/signin")}
                  >
                    Sign up
                    <MdKeyboardArrowRight className="text-3xl text-gray-400" />
                  </p>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
