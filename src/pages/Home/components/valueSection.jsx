import React from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaCarSide } from "react-icons/fa";
import { LuWallet } from "react-icons/lu";

export const ValueSection = ()=>{


    return(
        <div className="mx-28 flex justify-between items-center p-12">
            <div className="w-[30%] flex flex-col items-center justify-center gap-3">
                <FaMapLocationDot className="text-5xl"/>
                <p className="text-2xl font-bold">Availability</p>
                <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae distinctio porro similique iusto </p>
            </div>
            <div className="w-[30%] flex flex-col items-center justify-center gap-3">
                <FaCarSide className="text-5xl"/>
                <p className="text-2xl font-bold">Comfort</p>
                <p className="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, delectus.</p>
            </div>
            <div className="w-[30%] flex flex-col items-center justify-center gap-3">
                <LuWallet className="text-5xl"/>
                <p className="text-2xl font-bold">Saving</p>
                <p className="text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque sunt necessitatibus atque.</p>
            </div>
        </div>
    )
}