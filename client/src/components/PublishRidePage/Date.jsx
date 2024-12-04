import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Time from "./Time";

import { FaAnglesLeft ,FaAnglesRight } from "react-icons/fa6";

const RideDate = () => {
    const [rideDate, setRideDate] = useState(null);

    const navigate=useNavigate();

    return (
        <div className="pt-[5em] flex flex-col items-center">
            <h2 className='text-4xl text-blue-950 font-semibold p-4 mb-4'>When are you going?</h2>
            <DatePicker
    selected={rideDate}
    onChange={(date) => {
        setRideDate(date);
        navigate("/rideTime");
    }}
    inline minDate={new Date()} dateFormat="dd/MM/yyyy"
    calendarClassName="bg-white border border-gray-300 shadow-xl rounded-xl p-4"
    renderCustomHeader={({ monthDate, decreaseMonth, increaseMonth }) => (
        <div className="flex justify-between items-center mb-4">
            <button
                onClick={decreaseMonth}
                className="text-blue-500 text-2xl font-semibold hover:text-blue-700"
            >
                <FaAnglesLeft />
            </button>
            <span className="text-lg font-medium">
                {monthDate.toLocaleString("default", { month: "long", year: "numeric" })}
            </span>
            <button
                onClick={increaseMonth}
                className="text-blue-500 text-2xl font-semibold hover:text-blue-700"
            >
                <FaAnglesRight />
            </button>
        </div>
    )}
/>

        </div>
    );
};

export default RideDate;


