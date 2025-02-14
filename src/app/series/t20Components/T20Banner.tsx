"use client"


import React, { useRef, useState } from "react";
import Link from 'next/link'
import Image from "next/image";


export default function T20Banner() {


  
    const sliderRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);
  
    const images = [
      { src: "/assets/img/series/series-1.png", url: "/t20series" },
      { src: "/assets/img/series/ipl.png", url: "/iplseries" },
      { src: "/assets/img/series/series-1.png", url: "/t20series" },
      { src: "/assets/img/series/ipl.png", url: "/iplseries" },
      { src: "/assets/img/series/series-1.png", url: "/t20series" },
      { src: "/assets/img/series/ipl.png", url: "/iplseries" },
    ];
  
    const handleScroll = (direction: string) => {
        if (!sliderRef.current) return;
      
        const slider = sliderRef.current as HTMLDivElement;
        const slideWidth = slider.children[0]?.clientWidth + 80 || 200; // Default width fallback
      
        if (direction === "right" && scrollPosition < images.length - 3) {
          setScrollPosition((prev) => prev + 1);
          slider.scrollBy({ left: slideWidth, behavior: "smooth" });
        } else if (direction === "left" && scrollPosition > 0) {
          setScrollPosition((prev) => prev - 1);
          slider.scrollBy({ left: -slideWidth, behavior: "smooth" });
        }
      };
  


    return (
        <section className="bg-[#0E2149]">
            <div className="lg:w-[1000px] mx-auto text-white  pt-5 pb-10" style={{ paddingTop: "37px" }}>
                <div className="flex items-center justify-between md:p-4 max-w-6xl mx-auto">
                    {/* Left Arrow */}
                    <button className="md:block hidden p-2 bg-gray-700 rounded-full hover:bg-gray-600">
                        <svg
                            className="w-6 h-6 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </button>
                    {/* Content Section */}
                    {/* Content Section full screen  */}
                    <div className="hidden md:flex flex-grow items-center justify-between px-6">
                        {/* Left Section */}
                        <div className="flex items-center space-x-4">
                            <Image
                                src="/assets/img/series/series-1.png"
                                alt="Event Logo" width={120} height={120}
                                className="md:h-[70px] lg:h-[auto]"
                            />
                            <div>
                                <h2 className="lg:text-2xl md:text-[17px] font-semibold">
                                    Womens T20 World Cup 2020
                                </h2>
                                <p className="lg:text-sm md:text-[14px] text-gray-300 mb-2">
                                    T20 - 34 Matches - 10 Teams | Oct 3 - Oct 20
                                </p>
                                <select className="border border-gray-500 rounded px-2 bg-[#0e2149]">
                                    <option value="" >
                                        2020
                                    </option>
                                    <option value="">2021</option>

                                </select>
                            </div>
                        </div>
                        {/* Right Section */}
                        <div className="flex items-center space-x-4">
                            <p className="text-sm">
                                BAN-W vs IND-W
                                <br />
                                2024
                            </p>
                            <div className="flex items-center justify-center bg-green-600 w-12 h-12">
                                <Image src="/assets/img/vs-img.png" alt="BAN vs IND" width={40} height={40} className="" />
                            </div>
                        </div>
                    </div>
                    {/* Content Section mobile screen  */}


                    <div className="md:hidden">

                        <div className="relative">
                            {/* Left Arrow */}
                            <button
                                id="left-arrow"
                                className={`absolute left-[6px] top-1/2 -translate-y-1/2 bg-[#ffffff] p-[7px] rounded-full border-2 ${scrollPosition === 0 ? "hidden" : ""
                                    }`}
                                onClick={() => handleScroll("left")}
                                style={{ zIndex: 1 }}
                            >
                                <span className="text-[20px] font-bold">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-3 text-[black]"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15.75 19.5 8.25 12l7.5-7.5"
                                        ></path>
                                    </svg>
                                </span>
                            </button>

                            {/* Slider */}
                            <div className="relative overflow-hidden mx-4">
                                <div
                                    id="series"
                                    ref={sliderRef}
                                    className="flex gap-3 transition-transform duration-300 overflow-x-hidden"
                                >
                                    {images.map((image, index) => (
                                        <div key={index} className="flex-none w-1/5">
                                            <a href={image.url} target="_blank" rel="noopener noreferrer">
                                                <Image src={image.src} width={40} height={40} alt={`series-${index + 1}`} />
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right Arrow */}
                            <button
                                id="right-arrow"
                                className={`absolute right-[31px] top-1/2 -translate-y-1/2 bg-[#ffffff] p-[7px] rounded-full border-2 ${scrollPosition >= images.length - 5 ? "hidden" : ""
                                    }`}
                                onClick={() => handleScroll("right")}
                                style={{ zIndex: 1 }}
                            >
                                <span className="text-[20px] font-bold">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-3 text-[black]"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="m8.25 4.5 7.5 7.5-7.5 7.5"
                                        ></path>
                                    </svg>
                                </span>
                            </button>
                        </div>


                        <div className="px-4 mt-5">
                            <h2 className="text-[17px] font-semibold">
                                Womens T20 World Cup 2020
                            </h2>
                            <p className="text-[13px] text-gray-300 mb-2">
                                T20 - 34 Matches - 10 Teams | Oct 3 - Oct 20
                            </p>
                            <select className="border border-gray-500 rounded px-2 bg-[#0e2149]">
                                <option>2020</option>
                                <option>2021</option>
                            </select>
                        </div>
                    </div>



                    <Link href="/iplseries">
                        <button className="md:block hidden p-2 bg-gray-700 rounded-full hover:bg-gray-600">
                            <svg
                                className="w-6 h-6 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                    </Link>
                </div>
            </div>
        </section>


    )
}
