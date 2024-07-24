import React from "react";
import { FaCar } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";






export const Header = () => {





    return (
        <div className="flex justify-between items-center px-28 my-6">
            <div className="flex gap-3 items-center">
                <FaCar className="text-3xl" />
                <h3 className="font-bold">InnovaCars</h3>
            </div>

            <div className="flex justify-around  w-[45%] items-center">
                <p>Home</p>
                <p>vehicles</p>
                <p>Details</p>
                <p>About Us</p>
                <p>Contact Us</p>
            </div>

            <div className="flex items-center gap-3">
            <FaPhone  className="text-white p-2 rounded-full bg-[#5937e0] text-4xl phone" />
                <div className="">
                <p>Need help?</p>
                <p className="font-bold ">+212 69931-2362</p>
                </div>
            </div>
        </div>
    )
}