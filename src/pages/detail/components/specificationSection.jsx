import React from "react";
import car1 from '../../../assets/img/2023-lucid-air-1.jpg';
import car2 from '../../../assets/img/card-1.webp';
import car3 from '../../../assets/img/car4.webp';




export const SpecificationSection = () => {

    return (

        <div className="mx-20 p-5 py-10 flex">
            <div className="flex flex-col gap-10 w-[50%]">
                <h2 className="font-bold text-4xl">BMW</h2>
                <p><span className="font-bold text-[#5937e0] text-3xl">$25</span>/ day</p>
                <div className="flex justify-center items-center">
                    <svg className="w-[80%] h-fit " version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="1280.000000pt" height="640.000000pt" viewBox="0 0 1280.000000 640.000000"
                        preserveAspectRatio="xMidYMid meet">
                        <g className="shadow" transform="translate(0.000000,640.000000) scale(0.100000,-0.100000)"
                            fill="#000000" stroke="none">
                            <path className="shadow" d="M7810 6104 c-475 -28 -882 -68 -1655 -164 -442 -55 -460 -60 -695
                        -160 -331 -142 -673 -332 -1129 -629 -145 -94 -210 -131 -225 -128 -12 3 -57
                        14 -100 26 -140 37 -381 25 -476 -24 -43 -22 -62 -57 -86 -155 l-21 -85 -49
                        -7 c-103 -14 -464 -25 -584 -17 -182 11 -463 11 -560 -1 -323 -38 -618 -111
                        -897 -220 -259 -101 -351 -176 -524 -425 -88 -127 -139 -219 -170 -308 -34
                        -96 -36 -131 -10 -173 15 -25 20 -60 26 -182 l7 -151 -33 -78 c-33 -75 -34
                        -83 -34 -203 0 -81 7 -155 18 -210 21 -100 92 -316 170 -520 48 -124 58 -161
                        67 -255 37 -361 140 -583 312 -676 l63 -34 390 -7 c215 -5 413 -6 442 -3 58 7
                        145 54 206 113 60 57 127 156 188 277 l56 110 74 -1 c41 -1 196 -9 344 -18
                        825 -49 1145 -58 2180 -65 l970 -6 38 -72 c47 -91 129 -180 199 -218 50 -27
                        63 -30 208 -36 85 -4 228 -8 318 -8 139 -1 164 -3 169 -17 3 -9 0 -19 -6 -23
                        -7 -5 -78 -11 -159 -15 -641 -29 -1138 -63 -1206 -83 -31 -9 -3 -24 65 -33
                        239 -34 1305 -80 1845 -80 202 0 342 -4 378 -11 64 -13 153 -2 261 34 41 13
                        144 27 317 43 464 42 567 57 575 81 3 7 -12 16 -34 23 -53 15 -323 48 -475 58
                        -71 5 -131 11 -134 15 -4 4 15 54 41 113 26 59 61 143 77 188 16 44 34 84 40
                        87 6 4 84 7 172 7 89 0 348 9 576 21 228 11 510 25 625 31 116 6 300 15 410
                        20 110 5 297 14 415 20 118 5 251 12 295 15 44 3 85 2 90 -2 6 -5 23 -57 38
                        -118 47 -194 125 -318 235 -372 l57 -28 350 -3 c231 -2 362 0 387 8 118 34
                        248 197 336 421 97 243 155 644 134 924 -10 129 -6 145 34 145 16 0 25 7 28
                        23 7 32 15 201 22 457 7 244 -12 560 -42 708 -45 218 -154 389 -307 480 -143
                        86 -385 166 -680 225 l-158 31 -254 272 c-247 265 -345 359 -471 456 -245 188
                        -596 361 -866 427 -137 33 -299 57 -643 95 -497 55 -682 67 -1110 70 -214 2
                        -419 2 -455 0z m-2391 -399 c-3 -2 -64 -33 -137 -69 -269 -133 -501 -267 -874
                        -504 -125 -79 -233 -142 -240 -139 -20 6 372 258 667 428 202 117 620 320 584
                        284z"/>
                        </g>
                    </svg>
                </div>
                <div className="flex justify-start items-center gap-4">
                    <div className="w-[140px] h-[100px] rounded-xl">
                        <img src={car1} width={300} alt="" srcset="" className="rounded-xl" />
                    </div>
                    <div className="w-[140px] h-[100px] rounded-xl">
                        <img src={car2} width={300} alt="" srcset="" className="rounded-xl" />
                    </div>
                    <div className="w-[140px] h-[100px] rounded-xl">
                        <img src={car3} alt="" width={300} srcset="" className="rounded-xl" />
                    </div>
                </div>
            </div>
            <div className="w-[50%] flex flex-col gap-10">
                <h2 className="font-bold text-2xl">Technican Specification</h2>
                <div className="flex flex-wrap gap-3">
                    <div className="bg-[#f9f8f8] w-[30%] p-6 py-9 flex flex-col gap-3 rounded-xl">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.3053 18.6102C21.2413 18.6102 22.0002 19.369 22.0002 20.3051C22.0002 21.2412 21.2413 22 20.3053 22C19.3692 22 18.6104 21.2412 18.6104 20.3051C18.6104 19.369 19.3692 18.6102 20.3053 18.6102Z" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12.0001 18.6102C12.9362 18.6102 13.695 19.369 13.695 20.3051C13.695 21.2412 12.9362 22 12.0001 22C11.064 22 10.3052 21.2412 10.3052 20.3051C10.3052 19.369 11.064 18.6102 12.0001 18.6102Z" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M3.69492 18.6102C4.63099 18.6102 5.38983 19.369 5.38983 20.3051C5.38983 21.2412 4.63099 22 3.69492 22C2.75884 22 2 21.2412 2 20.3051C2 19.369 2.75884 18.6102 3.69492 18.6102Z" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M3.69492 2.00006C4.63099 2.00006 5.38983 2.7589 5.38983 3.69498C5.38983 4.63105 4.63099 5.38989 3.69492 5.38989C2.75884 5.38989 2 4.63105 2 3.69498C2 2.7589 2.75884 2.00006 3.69492 2.00006Z" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12.0001 2.00006C12.9362 2.00006 13.695 2.7589 13.695 3.69498C13.695 4.63105 12.9362 5.38989 12.0001 5.38989C11.064 5.38989 10.3052 4.63105 10.3052 3.69498C10.3052 2.7589 11.064 2.00006 12.0001 2.00006Z" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M20.305 18.6101V13.8643C20.305 12.9283 19.5461 12.1694 18.6101 12.1694H3.69482V5.38977" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M3.69482 12.1694V18.6101" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12 18.6101V5.38977" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M20.3053 2.00006C21.2413 2.00006 22.0002 2.7589 22.0002 3.69498C22.0002 4.63105 21.2413 5.38989 20.3053 5.38989C19.3692 5.38989 18.6104 4.63105 18.6104 3.69498C18.6104 2.7589 19.3692 2.00006 20.3053 2.00006Z" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M20.3052 8.77954V5.38971" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p className="font-bold text-xl">Gear box</p>
                        <p className="text-[#b0b0b0]">Automat</p>

                    </div>
                    <div className="bg-[#f9f8f8] w-[30%] p-6 py-9 flex flex-col gap-3 rounded-xl">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_1_4478" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                <path d="M0 0H24V24H0V0Z" fill="white" />
                            </mask>
                            <g mask="url(#mask0_1_4478)">
                                <path d="M20.0026 10.0002V7.33294C20.0026 5.86058 18.809 4.66692 17.3366 4.66692H17.3359V10.0002H20.0026Z" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M17.3307 4.66657C17.3307 3.19392 16.1368 1.99989 14.664 1.99989H9.3307C7.85796 1.99989 6.66406 3.19392 6.66406 4.66657V19.3333H17.3307V4.66657Z" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M9.33057 8.66675H14.6639V4.66675H9.33057V8.66675Z" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M19.9971 22C19.9971 21.2927 19.7161 20.6147 19.216 20.1144C18.7159 19.6143 18.0377 19.3333 17.3304 19.3333H6.66375C5.95653 19.3333 5.27823 19.6143 4.77815 20.1144C4.27802 20.6147 3.99707 21.2927 3.99707 22H19.9971Z" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12.0029 11.3331C12.0029 11.3331 10.0029 12.9998 10.0029 14.6665C10.0029 15.7705 10.8991 16.6665 12.0029 16.6665C13.1068 16.6665 14.0029 15.7705 14.0029 14.6665C14.0029 12.9998 12.0029 11.3331 12.0029 11.3331Z" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M17.3359 15.3332C17.3359 16.0695 17.9329 16.6665 18.6693 16.6665C19.4057 16.6665 20.0026 16.0695 20.0026 15.3332V9.99982" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M2 22H22" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                        </svg>

                        <p className="font-bold text-xl">Fuel</p>
                        <p className="text-[#b0b0b0]">Petrol</p>

                    </div>
                    <div className="bg-[#f9f8f8] w-[30%] p-6 py-9 flex flex-col gap-3 rounded-xl">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_1_4500" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                <path d="M0 0H24V24H0V0Z" fill="white" />
                            </mask>
                            <g mask="url(#mask0_1_4500)">
                                <path d="M0.70166 23.2969V0.703125H14.8228L23.2896 9.16992V14.8242C18.6118 14.8242 14.8198 18.6162 14.8198 23.2939V23.2969H0.70166Z" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round" />
                                <path d="M3.5249 3.52734H13.4097L19.0581 9.17578H3.5249V3.52734Z" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round" />
                                <path d="M6.34912 14.8242H3.5249V12H9.17334C9.17334 13.5598 7.90889 14.8242 6.34912 14.8242Z" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round" />
                            </g>
                        </svg>

                        <p className="font-bold text-xl">Door </p>
                        <p className="text-[#b0b0b0]">2</p>

                    </div>
                    <div className="bg-[#f9f8f8] w-[30%] p-6 py-9 flex flex-col gap-3 rounded-xl">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_1_2422" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                <path d="M0 0H24V24H0V0Z" fill="white" />
                            </mask>
                            <g mask="url(#mask0_1_2422)">
                                <path d="M12 15.75V23.0625" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12 0.937499V8.25" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M14.3438 2.2327L12 4.5L9.65625 2.15625" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M9.65625 21.7673L12 19.5L14.3438 21.8438" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M8.25 12H0.9375" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M23.0625 12H15.75" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M21.7673 14.3438L19.5 12L21.8438 9.65625" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M2.2327 9.65625L4.5 12L2.15625 14.3438" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <path d="M9.32813 14.6719L6.375 17.625" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M17.625 6.375L14.6719 9.32812" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9.35156 9.35156L6.375 6.375" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M17.625 17.625L14.6719 14.6719" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <mask id="mask1_1_2422" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                <path d="M0 0H24V24H0V0Z" fill="white" />
                            </mask>
                            <g mask="url(#mask1_1_2422)">
                                <path d="M12 8.25C14.0711 8.25 15.75 9.92892 15.75 12C15.75 14.0711 14.0711 15.75 12 15.75C9.92892 15.75 8.25 14.0711 8.25 12C8.25 9.92892 9.92892 8.25 12 8.25Z" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                        </svg>

                        <p className="font-bold text-xl">Air Condition</p>
                        <p className="text-[#b0b0b0]">Yes</p>

                    </div>
                    <div className="bg-[#f9f8f8] w-[30%] p-6 py-9 flex flex-col gap-3 rounded-xl">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_1_4531" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                <path d="M24 0H0V24H24V0Z" fill="white" />
                            </mask>
                            <g mask="url(#mask0_1_4531)">
                                <mask id="mask1_1_4531" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                    <path d="M0 1.90735e-06H24V24H0V1.90735e-06Z" fill="white" />
                                </mask>
                                <g mask="url(#mask1_1_4531)">
                                    <path d="M16.6855 5.625C16.6855 8.21386 14.5869 10.3125 11.998 10.3125C9.40919 10.3125 7.31055 8.21386 7.31055 5.625C7.31055 3.03614 9.40919 0.937501 11.998 0.937501C14.5869 0.937501 16.6855 3.03614 16.6855 5.625Z" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M19.9268 18.2432C19.9268 13.8632 16.3761 10.3125 11.9961 10.3125C7.61612 10.3125 4.06543 13.8632 4.06543 18.2432V19.517H8.45059L11.9961 23.0625L15.5416 19.517H19.9268V18.2432Z" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                            </g>
                        </svg>

                        <p className="font-bold text-xl">Seats</p>
                        <p className="text-[#b0b0b0]">3</p>

                    </div>
                    <div className="bg-[#f9f8f8] w-[30%] p-6 py-9 flex flex-col gap-3 rounded-xl">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.70751 12.0093C6.43104 12.0093 7.01757 11.4227 7.01757 10.6992C7.01757 9.97569 6.43104 9.38916 5.70751 9.38916C4.98399 9.38916 4.39746 9.97569 4.39746 10.6992C4.39746 11.4227 4.98399 12.0093 5.70751 12.0093Z" stroke="black" stroke-width="2" stroke-miterlimit="10" />
                            <path d="M9.43134 10.6993C9.43134 8.64411 7.76526 6.97803 5.71007 6.97803C3.66053 6.97803 2.005 8.61993 1.98888 10.6694C1.98119 11.6463 2.3791 12.5115 2.95889 13.205C3.6133 13.9878 5.71003 15.9229 5.71003 15.9229C5.71003 15.9229 7.72405 14.0538 8.45493 13.2118C9.04349 12.5339 9.43134 11.6678 9.43134 10.6993Z" stroke="black" stroke-width="2" stroke-miterlimit="10" />
                            <path d="M5.71284 22.0004C6.6572 22.0004 7.42276 21.2348 7.42276 20.2905C7.42276 19.3461 6.6572 18.5806 5.71284 18.5806C4.76848 18.5806 4.00293 19.3461 4.00293 20.2905C4.00293 21.2348 4.76848 22.0004 5.71284 22.0004Z" stroke="black" stroke-width="2" stroke-miterlimit="10" />
                            <path d="M19.059 5.41983C20.0034 5.41983 20.7689 4.65427 20.7689 3.70991C20.7689 2.76555 20.0034 2 19.059 2C18.1147 2 17.3491 2.76555 17.3491 3.70991C17.3491 4.65427 18.1147 5.41983 19.059 5.41983Z" stroke="black" stroke-width="2" stroke-miterlimit="10" />
                            <path d="M7.42432 20.2902H17.8679C20.1566 20.2902 22.0119 18.4349 22.0119 16.1462C22.0119 13.8576 20.1566 12.0023 17.8679 12.0023H15.8034C13.5148 12.0023 11.6594 10.1469 11.6594 7.85827V7.8537C11.6594 5.56504 13.5148 3.70972 15.8034 3.70972H17.3523" stroke="black" stroke-width="2" stroke-miterlimit="10" />
                        </svg>
                        <p className="font-bold text-xl">Distance</p>
                        <p className="text-[#b0b0b0]">500</p>
                    </div>
                </div>
                <button className="w-[50%] bg-[#5937e0] font-bold text-white p-4 rounded-xl">Rent a Car</button>
                <div className="w-[100%] flex flex-col gap-4 ">
                    <h3 className="font-bold text-xl mb-6">Car Equipment</h3>
                    <div className="flex flex-wrap gap-10 w-[70%]">
                        <p className="flex items-center gap-2 w-[40%]">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="24" height="24" rx="12" fill="#5937E0" />
                            <path d="M17.3175 8.34399L10.0057 15.6558L6.68213 12.3323" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        ABS
                        </p>
                        <p className="flex items-center gap-2 w-[40%]">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="24" height="24" rx="12" fill="#5937E0" />
                            <path d="M17.3175 8.34399L10.0057 15.6558L6.68213 12.3323" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        Air bugs
                        </p>
                        <p className="flex items-center gap-2 w-[40%]">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="24" height="24" rx="12" fill="#5937E0" />
                            <path d="M17.3175 8.34399L10.0057 15.6558L6.68213 12.3323" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        Cruise Control
                        </p>
                        <p className="flex items-center gap-2 w-[40%]">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="24" height="24" rx="12" fill="#5937E0" />
                            <path d="M17.3175 8.34399L10.0057 15.6558L6.68213 12.3323" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        ABS
                        </p>
                        <p className="flex items-center gap-2 w-[40%]">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="24" height="24" rx="12" fill="#5937E0" />
                            <path d="M17.3175 8.34399L10.0057 15.6558L6.68213 12.3323" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        Air Bags
                        </p>
                        <p className="flex items-center gap-2 w-[40%]">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="24" height="24" rx="12" fill="#5937E0" />
                            <path d="M17.3175 8.34399L10.0057 15.6558L6.68213 12.3323" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        Air Condition
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}