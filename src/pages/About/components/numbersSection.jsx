import React from "react";


export const NumbersSection = ()=>{

    return(
        <div className="mx-28 flex justify-around p-10 my-5">
            <div className="flex flex-col justify-center items-start gap-2">
                <h1 className="text-7xl font-bold text-[#5937e0] ">20K+</h1>
                <p className="font-bold">Happy Customers</p>
            </div>
            <div className="flex flex-col justify-center items-start gap-2">
                <h1 className="text-7xl font-bold text-[#5937e0] ">540+</h1>
                <p className="font-bold">Count of cars</p>
            </div>
            <div className="flex flex-col justify-center items-start gap-2">
                <h1 className="text-7xl font-bold text-[#5937e0] ">25+</h1>
                <p className="font-bold">Years of Experience</p>
            </div>
        </div>
    )
}