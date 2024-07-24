import React from "react";
import card1 from '../../../assets/img/card-1.webp';
import { TbAutomaticGearbox } from "react-icons/tb";
import { MdOilBarrel } from "react-icons/md";
import { IoSnow } from "react-icons/io5";
export const FirstSection = () => {
    const cars = [

        {
            img: card1,
            mark: 'Mercedece',
            type: 'Amg',
            price: '30£',
        },
        {
            img: card1,
            mark: 'Mercedece',
            type: 'Amg',
            price: '30£',
        },
        {
            img: card1,
            mark: 'Mercedece',
            type: 'Amg',
            price: '30£',
        },
        {
            img: card1,
            mark: 'Mercedece',
            type: 'Amg',
            price: '30£',
        },
        {
            img: card1,
            mark: 'Mercedece',
            type: 'Amg',
            price: '30£',
        },
        {
            img: card1,
            mark: 'Mercedece',
            type: 'Amg',
            price: '30£',
        },



    ];

    return (

        <div className="flex flex-col justify-center items-center gap-6 mx-28 p-12">
            <h1 className="font-bold text-5xl text-center">Select Vehicle group</h1>
            <div className="flex justify-around w-[80%]">
                <p className="bg-[#f9f8f8] p-3 rounded-2xl">All veciles</p>
                <p className="bg-[#f9f8f8] p-3 rounded-2xl flex gap-2 ">
                    <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1_4079)">
                            <path d="M27.7608 12.7462L19.4521 11.9205L18.7121 10.0706C18.0857 8.50443 16.5909 7.49243 14.9041 7.49243C10.0156 7.49243 19.9187 7.49243 9.83723 7.49243C8.67638 7.49243 7.56524 7.98727 6.78872 8.85014L4.07335 11.8672H2.96221C1.60532 11.8672 0.501397 12.9711 0.501397 14.328C0.501397 14.8111 0.489257 15.0817 0.536559 15.4216C0.792046 17.3233 2.43385 18.7575 4.35558 18.7575H5.06588C5.40908 19.7735 6.37065 20.5074 7.50104 20.5074C8.63143 20.5074 9.59301 19.7735 9.93621 18.7575H19.0651C19.4083 19.7735 20.3699 20.5074 21.5003 20.5074C22.6307 20.5074 23.5922 19.7735 23.9354 18.7575H24.6457C26.7709 18.7575 28.4999 17.0285 28.4999 14.9033V13.5624C28.5 13.1409 28.1803 12.7879 27.7608 12.7462ZM17.189 10.6799L17.6639 11.8672H13.3611L12.5408 9.13297H14.9042C15.9162 9.13303 16.8131 9.74019 17.189 10.6799ZM8.00813 9.94761C8.47405 9.42991 9.14071 9.13303 9.83723 9.13303H10.828L11.6483 11.8673H6.28048L8.00813 9.94761ZM7.50104 18.8669C6.98843 18.8669 6.5714 18.4499 6.5714 17.9373C6.5714 17.4247 6.98843 17.0076 7.50104 17.0076C8.01366 17.0076 8.43068 17.4247 8.43068 17.9373C8.43068 18.4499 8.01366 18.8669 7.50104 18.8669ZM21.5003 18.8669C20.9877 18.8669 20.5707 18.4499 20.5707 17.9373C20.5707 17.4247 20.9877 17.0076 21.5003 17.0076C22.0129 17.0076 22.43 17.4247 22.43 17.9373C22.43 18.4499 22.0129 18.8669 21.5003 18.8669ZM26.8594 14.9034C26.8594 16.124 25.8664 17.117 24.6458 17.117H23.9356C23.5924 16.101 22.6308 15.3671 21.5004 15.3671C20.37 15.3671 19.4084 16.101 19.0652 17.117H9.93621C9.59301 16.101 8.63143 15.3671 7.50104 15.3671C6.37065 15.3671 5.40908 16.101 5.06588 17.117H4.35558C3.59819 17.117 2.91666 16.7295 2.51593 16.1327H2.68879C3.14179 16.1327 3.50906 15.7654 3.50906 15.3124C3.50906 14.8594 3.14179 14.4921 2.68879 14.4921H2.14194V14.3281C2.14194 13.8758 2.50991 13.5078 2.96221 13.5078H11.9305V14.4374C11.9305 14.8905 12.2978 15.2577 12.7508 15.2577C13.2038 15.2577 13.571 14.8905 13.571 14.4374V13.5078H18.8348L26.8594 14.3053V14.9034Z" fill="black" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1_4079">
                                <rect width="28" height="28" fill="white" transform="translate(0.5)" />
                            </clipPath>
                        </defs>
                    </svg>
                    All veciles</p>
                <p className="bg-[#f9f8f8] p-3 rounded-3xl">All veciles</p>
                <p className="bg-[#f9f8f8] p-3 rounded-3xl">All veciles</p>
                <p className="bg-[#f9f8f8] p-3 rounded-3xl">All veciles</p>
                <p className="bg-[#f9f8f8] p-3 rounded-3xl">All veciles</p>
            </div>
            <div className="card-container w-[100%] flex flex-wrap gap-9 justify-center">
                {cars.map((element, index) =>



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