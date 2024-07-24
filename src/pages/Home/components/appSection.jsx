import React from "react";
import appstor from '../../../assets/img/app/app_store.png'
import playstor from '../../../assets/img/app/playStore.png'
import mobile from '../../../assets/img/app/mobile.png'

export const AppSection = () => {


    return (
        <div className="mx-28 p-16 flex justify-between items-center ">
            <div className="w-[50%] flex flex-col gap-10 ">
                <div className="flex flex-col   gap-10">
                    <h3 className="font-bold text-5xl w-[50%]">Dowload mobile app</h3>
                    <p className="my-5 w-[85%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum enim earum adipisci mollitia explicabo eos! Lorem,
                        ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, optio molestiae quos delectus veritatis illo necessitatibus
                        asperiores tempore maiores quae accusantium illum, repellendus temporibus officia dolorem, minima doloremque laudantium eos?</p>
                </div>
                <div className="flex gap-7">
                    <img src={appstor} width={180} className="rounded-lg" alt="" srcset="" />
                    <img src={playstor} width={180} className="rounded-lg" alt="" srcset="" />
                </div>
            </div>
            <div className="w-[50%] flex justify-center ml-10">
                <img className="relative" src={mobile} width={250} alt="" />
                <img className="absolute left-[50%] mt-10" src={mobile} width={250} alt="" />
            </div>
        </div>
    )
} 