import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { TbAutomaticGearbox } from "react-icons/tb";
import { MdOilBarrel } from "react-icons/md";
import { IoSnow } from "react-icons/io5";
import card1 from '../../../assets/img/card-1.webp';



export const CardSection = () => {



    const cars = [

        {
            img : card1 ,
            mark : 'Mercedece',
            type :'Amg' ,
            price : '30£' ,
        },
        {
            img : card1 ,
            mark : 'Mercedece',
            type :'Amg' ,
            price : '30£' ,
        },
        {
            img : card1 ,
            mark : 'Mercedece',
            type :'Amg' ,
            price : '30£' ,
        },
        {
            img : card1 ,
            mark : 'Mercedece',
            type :'Amg' ,
            price : '30£' ,
        },
        {
            img : card1 ,
            mark : 'Mercedece',
            type :'Amg' ,
            price : '30£' ,
        },
        {
            img : card1 ,
            mark : 'Mercedece',
            type :'Amg' ,
            price : '30£' ,
        },



    ];




    return (
        <div className="mx-28 p-5 ">
            <div className="flex justify-between">
                <h3 className="text-4xl font-bold w-[38%] p-10">Choose the car that suits you</h3>
                <p className="flex items-center gap-2 ">view All <FaLongArrowAltRight />  </p>
            </div>



            <div className="card-container w-[100%] flex flex-wrap gap-9 justify-center">
             {cars.map((element,index)=>



                <div key={index} className="card w-[30%] bg-[#fafafa] flex flex-col justify-center gap-5 rounded-lg p-3">
                    <img className="rounded-lg" src={element.img} alt="" srcset="" />
                    <div className="flex justify-between ">
                        <div className="flex flex-col gap-1">
                            <h4 className="font-bold text-xl ">{element.mark}</h4>
                            <p>{element.mark}</p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="font-bold text-xl text-[#5937e0]">{element.price}</p>
                            <p>Per day</p>
                        </div>
                    </div>
                    <div className="flex gap-4 justify-around w-[100%]">
                        <p className="flex items-center gap-2"><TbAutomaticGearbox className="text-xl" /> Automat</p>
                        <p className="flex items-center gap-2"><MdOilBarrel className="text-xl" /> Pb 95</p>
                        <p className="flex items-center gap-2"><IoSnow className="text-xl" /> Air Conditioner</p>
                    </div>
                    <button className="w-[100%] bg-[#5937e0] rounded-lg self-center p-2 text-white"><b>View details</b></button>
                </div>



             )}

            </div>


        </div>
    )
}