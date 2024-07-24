import React from "react";
import { FaCar } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { CiPhone } from "react-icons/ci";
import appstor from '../assets/img/app/app_store.png'
import playstor from '../assets/img/app/playStore.png'




export const Footer = () => {




    return (
        <div className=" mx-28 p-3 ">
            <div className="flex justify-between mb-[5%]">
                <div className="flex gap-2 items-center mr-28">
                    <FaCar className="text-2xl" />
                    <p className="font-bold text-xl">InnovaCars</p>
                </div>
                <div className="flex items-center gap-2 ">
                    <div className="bg-[#ff9e0c] p-2 rounded-full">
                        <CiLocationOn className="text-white text-2xl" />
                    </div>
                    <div>
                        <p className="">Adresse</p>
                        <p className="font-bold">Irlend, Dublin Mikhmaj 005</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 ">
                    <div className="bg-[#ff9e0c] p-2 rounded-full">
                        <MdOutlineEmail className="text-white text-2xl" />
                    </div>
                    <div>
                        <p className="">Email</p>
                        <p className="font-bold">Ba9i.hamza@ma3tanich.nemra</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 ">
                    <div className="bg-[#ff9e0c] p-2 rounded-full">
                        <CiPhone className="text-white text-2xl" />
                    </div>
                    <div>
                        <p className="">phone</p>
                        <p className="font-bold">00212699312362</p>
                    </div>
                </div>

            </div>
            <div className="flex  justify-between pb-4">
                <div className="flex flex-col justify-between  items-start  w-[25%] ">
                    <p className="font-bold text-2xl text-start w-[80%]">Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Vero necessitatibus repellat
                    </p>
                    <div className="flex justify-start gap-3">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.9921 12.0004C23.9921 18.0612 19.5008 23.0717 13.6663 23.8848C13.1208 23.9605 12.5626 24 11.996 24C11.3421 24 10.6999 23.9479 10.0745 23.847C4.36266 22.9271 0 17.9729 0 12.0004C0 5.37294 5.37136 0 11.9969 0C18.6224 0 23.9938 5.37294 23.9938 12.0004H23.9921Z" fill="black" />
                            <path d="M13.6662 9.63588V12.25H16.8991L16.3872 15.7715H13.6662V23.8847C13.1206 23.9604 12.5625 23.9999 11.9959 23.9999C11.342 23.9999 10.6997 23.9478 10.0743 23.8469V15.7715H7.09277V12.25H10.0743V9.0515C10.0743 7.06713 11.6824 5.45776 13.667 5.45776V5.45945C13.6729 5.45945 13.6779 5.45776 13.6838 5.45776H16.8999V8.50328H14.7985C14.1739 8.50328 13.667 9.0103 13.667 9.63504L13.6662 9.63588Z" fill="white" />
                        </svg>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.0179 0H11.9633C5.35291 0 -0.00585938 5.36035 -0.00585938 11.9727V12.0273C-0.00585938 18.6397 5.35291 24 11.9633 24H12.0179C18.6283 24 23.9871 18.6397 23.9871 12.0273V11.9727C23.9871 5.36035 18.6283 0 12.0179 0Z" fill="black" />
                            <path d="M15.7023 4.88257H8.2782C6.22716 4.88257 4.55859 6.55163 4.55859 8.60327V15.3972C4.55859 17.4489 6.22716 19.1179 8.2782 19.1179H15.7023C17.7533 19.1179 19.4219 17.4489 19.4219 15.3972V8.60327C19.4219 6.55163 17.7533 4.88257 15.7023 4.88257ZM5.87075 8.60327C5.87075 7.27559 6.95091 6.19511 8.2782 6.19511H15.7023C17.0296 6.19511 18.1097 7.27559 18.1097 8.60327V15.3972C18.1097 16.7249 17.0296 17.8054 15.7023 17.8054H8.2782C6.95091 17.8054 5.87075 16.7249 5.87075 15.3972V8.60327Z" fill="white" />
                            <path d="M11.9901 15.4603C13.8974 15.4603 15.45 13.9082 15.45 11.9995C15.45 10.0908 13.8983 8.53857 11.9901 8.53857C10.082 8.53857 8.53027 10.0908 8.53027 11.9995C8.53027 13.9082 10.082 15.4603 11.9901 15.4603ZM11.9901 9.85196C13.1745 9.85196 14.1378 10.8156 14.1378 12.0003C14.1378 13.185 13.1745 14.1486 11.9901 14.1486C10.8058 14.1486 9.84243 13.185 9.84243 12.0003C9.84243 10.8156 10.8058 9.85196 11.9901 9.85196Z" fill="white" />
                            <path d="M15.7701 9.09765C16.2837 9.09765 16.7023 8.67975 16.7023 8.16516C16.7023 7.65056 16.2845 7.23267 15.7701 7.23267C15.2557 7.23267 14.8379 7.65056 14.8379 8.16516C14.8379 8.67975 15.2557 9.09765 15.7701 9.09765Z" fill="white" />
                        </svg>
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.9734 12C24.9734 5.37258 19.6024 0 12.9769 0C6.35148 0 0.980469 5.37258 0.980469 12C0.980469 18.6274 6.35148 24 12.9769 24C19.6024 24 24.9734 18.6274 24.9734 12Z" fill="black" />
                            <path d="M20.5307 9.5134C20.4363 8.60187 20.2332 7.59422 19.4854 7.06467C18.9063 6.65402 18.1451 6.63883 17.4345 6.63968C15.9323 6.63968 14.4292 6.64221 12.927 6.64305C11.4822 6.64474 10.0373 6.64558 8.59242 6.64727C7.98885 6.64727 7.40213 6.60089 6.84155 6.86229C6.3602 7.08659 5.98339 7.51327 5.75663 7.98801C5.4422 8.64825 5.37645 9.3962 5.33851 10.1264C5.26855 11.4562 5.27613 12.7894 5.35959 14.1183C5.42113 15.088 5.57707 16.1597 6.32649 16.7778C6.99075 17.3251 7.92815 17.3521 8.78967 17.3529C11.5243 17.3554 14.2598 17.358 16.9953 17.3597C17.3459 17.3605 17.7118 17.3538 18.0692 17.315C18.7723 17.2391 19.4424 17.0375 19.8943 16.5164C20.3503 15.9911 20.4675 15.26 20.5366 14.5677C20.7052 12.888 20.7035 11.1923 20.5307 9.5134ZM11.3456 14.3544V9.64495L15.4223 11.9992L11.3456 14.3544Z" fill="white" />
                        </svg>

                    </div>
                </div>


                <div className="flex flex-col gap-1 w-[25%]">
                    <p className="font-bold mb-4 text-xl">Useful links</p>
                    <p>About Us</p>
                    <p>Contact Us</p>
                    <p>Gallery</p>
                    <p>Blog</p>
                    <p>F.A.Q</p>
                </div>

                <div className="flex flex-col gap-1 w-[25%] ">
                    <p className="font-bold mb-4 text-xl">Useful links</p>
                    <p>About Us</p>
                    <p>Contact Us</p>
                    <p>Gallery</p>
                    <p>Blog</p>
                    <p>F.A.Q</p>
                </div>
                <div className="flex flex-col gap-1">
                    <p className="font-bold mb-4 text-xl">Dowload app</p>
                    <img className="rounded-lg my-2" src={appstor} alt="" srcset="" width={170} />
                    <img className="rounded-lg my-2" src={playstor} alt="" srcset="" width={170} />
                </div>


            </div>
            <div className="my-5 flex justify-center items-center  p-4">
                <p className="text-center text-[#b0b0b0]">&copy; Copyright InnovaCars 2024 Developed by Innovatechs</p>
            </div>
        </div>
    )
}