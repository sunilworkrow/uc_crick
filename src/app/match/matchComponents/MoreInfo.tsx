"use client"

import Link from 'next/link';
import React, { useState } from 'react'
import Image from "next/image";

export default function MoreInfo() {


    const [openHeading, setOpenHeading] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenHeading(openHeading === index ? null : index);
    };


    return (
        <>
            <section className="lg:w-[1000px] mx-auto md:mb-0 mb-4 px-2 lg:px-0">
                <div id="tabs" className="my-4">
                    <div className="flex text-1xl space-x-8 p-2 bg-[#ffffff] rounded-lg overflow-auto">
                        <Link href="/match/live/more-info">
                            <button
                                className="font-medium py-2 px-3 whitespace-nowrap bg-[#1A80F8] text-white rounded-md"
                            >
                                More Info
                            </button>
                        </Link>
                        <Link href="/match/live/live">
                            <button

                                className="font-medium py-2 px-3 whitespace-nowrap"
                            >
                                Live
                            </button>
                        </Link>
                        <Link href="/match/live/scorecard">
                            <button

                                className="font-medium py-2 px-3 whitespace-nowrap"
                            >
                                Scorecard
                            </button>
                        </Link>
                        <Link href="/match/live/squad">
                            <button

                                className="font-medium py-2 px-3 whitespace-nowrap"
                            >
                                Squad
                            </button>
                        </Link>
                        <Link href="/match/live/points-table">
                            <button

                                className="font-medium py-2 px-3 whitespace-nowrap"
                            >
                                Points Table
                            </button>
                        </Link>
                        <Link href="/match/live/stats">
                            <button

                                className="font-medium py-2 px-3 whitespace-nowrap"
                            >
                                Stats
                            </button>
                        </Link>
                    </div>
                </div>

                <div id="tab-content">
                    {/*------------------------  More Info Seaction Start ---------------------------*/}
                    <div id="info" className="tab-content">
                        <div className="md:grid grid-cols-12 gap-4">
                            {/* Match Detail */}
                            <div className="lg:col-span-8 md:col-span-7">
                                <div className="rounded-lg bg-white">
                                    <div className="p-4">
                                        <div className="md:flex items-center justify-between">
                                            <div className="flex gap-4 items-center md:mb-0 mb-[15px]">
                                                <div>
                                                    <Image
                                                        src="/assets/img/vs-img.png"
                                                        className="md:h-[auto] h-[56px]"
                                                        width={80} height={80} alt=""
                                                    />
                                                </div>
                                                <div>
                                                    <p className="text-[16px] text-[#909090] font-medium mb-1">
                                                        2nd Test
                                                    </p>
                                                    <p className="text-[16px] text-[#272B47] font-medium mb-2">
                                                        Bangladesh tour of India
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="md:text-end">
                                                <p className="text-[14px] mb-1 text-[#272B47] font-medium">
                                                    <span className="text-[14px] text-[#909090]">Date :</span> 27
                                                    Sep 2024, Fri, 9:30 AM IST
                                                </p>
                                                <p className="text-[14px] text-[#272B47] font-medium">
                                                    <span className="text-[14px] text-[#909090]">Toss :</span> IND
                                                    won the toss &amp; elected to bowl
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-lg bg-[#ffffff] my-4 p-4">
                                    <div>
                                        <h3 className="text-[15px] font-semibold  pl-[7px] border-l-[3px] mb-3 border-[#229ED3]">
                                            Recent Performance{" "}
                                            <span className="text-[#909090]"> (Last 5 match) </span>
                                        </h3>
                                        <div className="border-t-[1px] border-[#E4E9F0]" />
                                        <div className="md:px-2">
                                            <div className="performance-section">
                                                <div className="flex items-center justify-between my-3" onClick={() => handleToggle(1)}>
                                                    <Link href="">
                                                        <div className="flex items-center space-x-3">
                                                            <div>
                                                                <Image
                                                                    src="/assets/img/flag/17.png"
                                                                    className="h-[25px]"
                                                                    width={25} height={20} alt="india"
                                                                />
                                                            </div>
                                                            <h3 className="text-1xl font-medium">India</h3>
                                                        </div>
                                                    </Link>
                                                    <div>
                                                        <div className="ml-auto flex gap-1 items-center">
                                                            <span className="bg-[#13b76dbd] text-white text-[13px] px-[6px] py-[3px] rounded">
                                                                W
                                                            </span>
                                                            <span className="bg-[#13b76dbd] text-white text-[13px] px-[6px] py-[3px] rounded">
                                                                W
                                                            </span>
                                                            <span className="bg-[#f63636c2] text-white text-[13px] px-[7px] py-[3px] rounded">
                                                                L
                                                            </span>
                                                            <span className="bg-[#f63636c2] text-white text-[13px] px-[7px] py-[3px] rounded">
                                                                L
                                                            </span>
                                                            <span className="bg-[#13b76dbd] text-white text-[13px] px-[6px] py-[3px] rounded">
                                                                W
                                                            </span>
                                                            <span>
                                                                <button
                                                                    className={`transform transition-transform ${openHeading === 1 ? "rotate-180" : "rotate-0"
                                                                        }`}
                                                                >
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        fill="none"
                                                                        viewBox="0 0 24 24"
                                                                        strokeWidth={1.5}
                                                                        stroke="currentColor"
                                                                        className="w-5 h-5 text-gray-600"
                                                                    >
                                                                        <path
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            d="M19.5 12l-7.5 7.5L4.5 12"
                                                                        />
                                                                    </svg>
                                                                </button>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="border-t-[1px] border-[#E4E9F0]" />
                                                {openHeading === 1 && (
                                                    <div className="md:px-3 open-Performance-data">
                                                        {/* full screen teame data */}
                                                        <div className="overflow-x-auto lg:block hidden">
                                                            <table className="w-full text-left rtl:text-right">
                                                                <tbody>
                                                                    <tr className="whitespace-nowrap bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-[13px]">
                                                                        <td className="px-4 pl-0 py-1 ">
                                                                            <Link href="#">
                                                                                <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                                                                    <div className="flex items-center space-x-1">
                                                                                        <Image
                                                                                            src="/assets/img/flag/18.png"
                                                                                            className="h-[24px] rounded-full"
                                                                                            width={25} height={25} alt="aus"
                                                                                        />
                                                                                        <span className="text-[#909090]">AUS</span>
                                                                                    </div>
                                                                                    <p>274/10 &amp; 170/10</p>
                                                                                </div>
                                                                            </Link>
                                                                        </td>
                                                                        <td className="md:px-4 py-2 font-medium text-[#6A7586]">
                                                                            VS
                                                                        </td>
                                                                        <td className="md:px-4 py-2">
                                                                            <Link href="#">
                                                                                <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                                                                    <p>274/10 &amp; 170/10</p>
                                                                                    <div className="flex items-center space-x-1">
                                                                                        <span className="text-[#909090]">IND</span>
                                                                                        <Image
                                                                                            src="/assets/img/flag/17.png"
                                                                                            className="h-[24px]"
                                                                                            width={25} height={25} alt="ind"
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                            </Link>
                                                                        </td>
                                                                        <td className="md:px-4 py-2">
                                                                            <div className="text-right leading-6">
                                                                                <p className="font-medium">2nd TEST</p>
                                                                                <p className="text-[#909090] font-normal">
                                                                                    AUS VS IND 2024
                                                                                </p>
                                                                            </div>
                                                                        </td>
                                                                        <td className="px-0 pr-0 py-1 text-[#2F335C]">
                                                                            <div className="text-center">
                                                                                <span className="bg-[#13b76dbd] text-white text-[13px] px-[6px] py-[3px] rounded">
                                                                                    W
                                                                                </span>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr className="whitespace-nowrap bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-[13px]">
                                                                        <td className="px-4 pl-0 py-1">
                                                                            <Link href="#">
                                                                                <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full	">
                                                                                    <div className="flex items-center space-x-1">
                                                                                        <Image
                                                                                            src="/assets/img/flag/18.png"
                                                                                            className="h-[24px] rounded-full"
                                                                                            width={25} height={25} alt="aus"
                                                                                        />
                                                                                        <span className="text-[#909090]">AUS</span>
                                                                                    </div>
                                                                                    <p className="">540/10 &amp; 220/10</p>
                                                                                </div>
                                                                            </Link>
                                                                        </td>
                                                                        <td className="md:px-4 py-2 font-medium	 text-[#6A7586]">
                                                                            VS
                                                                        </td>
                                                                        <td className="md:px-4 py-2">
                                                                            <Link href="#">
                                                                                <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full	">
                                                                                    <p>140/10 &amp; 420/10</p>
                                                                                    <div className="flex items-center space-x-1">
                                                                                        <span className="text-[#909090]">IND</span>
                                                                                        <Image
                                                                                            src="/assets/img/flag/17.png"
                                                                                            className="h-[24px]"
                                                                                            width={25} height={25} alt="aus"
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                            </Link>
                                                                        </td>
                                                                        <td className="md:px-4 py-2">
                                                                            <div className="text-right leading-6">
                                                                                <p className="font-medium">2nd TEST</p>
                                                                                <p className="text-[#909090] font-normal">
                                                                                    AUS VS IND 2024
                                                                                </p>
                                                                            </div>
                                                                        </td>
                                                                        <td className="px-0 pr-0 py-1 text-[#2F335C]">
                                                                            <div className="text-center">
                                                                                <span className="bg-[#f63636c2] text-white text-[13px] px-[7px] py-[3px] rounded">
                                                                                    L
                                                                                </span>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr className="whitespace-nowrap bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-[13px]">
                                                                        <td className="px-4 pl-0 py-1">
                                                                            <Link href="#">
                                                                                <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full	">
                                                                                    <div className="flex items-center space-x-1">
                                                                                        <Image
                                                                                            src="/assets/img/flag/19.png"
                                                                                            className="h-[24px] rounded-full"
                                                                                            width={25} height={25} alt="pak"
                                                                                        />
                                                                                        <span className="text-[#909090]">PAK</span>
                                                                                    </div>
                                                                                    <p className="">274/10 &amp; 170/10</p>
                                                                                </div>
                                                                            </Link>
                                                                        </td>
                                                                        <td className="md:px-4 py-2 font-medium	 text-[#6A7586]">
                                                                            VS
                                                                        </td>
                                                                        <td className="md:px-4 py-2">
                                                                            <Link href="#">
                                                                                <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full	">
                                                                                    <p>250/10 &amp; 160/10</p>
                                                                                    <div className="flex items-center space-x-1">
                                                                                        <span className="text-[#909090]">IND</span>
                                                                                        <Image
                                                                                            src="/assets/img/flag/17.png"
                                                                                            className="h-[24px]"
                                                                                            width={25} height={25} alt="aus"
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                            </Link>
                                                                        </td>
                                                                        <td className="md:px-4 py-2">
                                                                            <div className="text-right leading-6">
                                                                                <p className="font-medium">2nd TEST</p>
                                                                                <p className="text-[#909090] font-normal">
                                                                                    250/10 &amp; 160/10
                                                                                </p>
                                                                            </div>
                                                                        </td>
                                                                        <td className="px-0 pr-0 py-1 text-[#2F335C]">
                                                                            <div className="text-center">
                                                                                <span className="bg-[#f63636c2] text-white text-[13px] px-[7px] py-[3px] rounded">
                                                                                    L
                                                                                </span>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr className="whitespace-nowrap bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-[13px]">
                                                                        <td className="px-4 pl-0 py-1">
                                                                            <Link href="#">
                                                                                <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full	">
                                                                                    <div className="flex items-center space-x-1">
                                                                                        <Image
                                                                                            src="/assets/img/flag/19.png"
                                                                                            className="h-[24px] rounded-full"
                                                                                            width={25} height={25} alt="aus"
                                                                                        />
                                                                                        <span className="text-[#909090]">PAK</span>
                                                                                    </div>
                                                                                    <p className="">274/10 &amp; 170/10</p>
                                                                                </div>
                                                                            </Link>
                                                                        </td>
                                                                        <td className="md:px-4 py-2 font-medium	 text-[#6A7586]">
                                                                            VS
                                                                        </td>
                                                                        <td className="md:px-4 py-2">
                                                                            <Link href="#">
                                                                                <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full	">
                                                                                    <p>280/10 &amp; 190/10</p>
                                                                                    <div className="flex items-center space-x-1">
                                                                                        <span className="text-[#909090]">IND</span>
                                                                                        <Image
                                                                                            src="/assets/img/flag/17.png"
                                                                                            className="h-[24px]"
                                                                                            width={25} height={25} alt="aus"
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                            </Link>
                                                                        </td>
                                                                        <td className="md:px-4 py-2">
                                                                            <div className="text-right leading-6">
                                                                                <p className="font-medium">2nd TEST</p>
                                                                                <p className="text-[#909090] font-normal">
                                                                                    AUS VS IND 2024
                                                                                </p>
                                                                            </div>
                                                                        </td>
                                                                        <td className="px-0 pr-0 py-1 text-[#2F335C]">
                                                                            <div className="text-center">
                                                                                <span className="bg-[#13b76dbd] text-white text-[13px] px-[6px] py-[3px] rounded">
                                                                                    W
                                                                                </span>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr className="whitespace-nowrap bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-[13px]">
                                                                        <td className="px-4 pl-0 py-1">
                                                                            <Link href="#">
                                                                                <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full	">
                                                                                    <div className="flex items-center space-x-1">
                                                                                        <Image
                                                                                            src="/assets/img/flag/18.png"
                                                                                            className="h-[24px] rounded-full"
                                                                                            width={25} height={25} alt="aus"
                                                                                        />
                                                                                        <span className="text-[#909090]">PAK</span>
                                                                                    </div>
                                                                                    <p className="">174/10 &amp; 160/10</p>
                                                                                </div>
                                                                            </Link>
                                                                        </td>
                                                                        <td className="md:px-4 py-2 font-medium	 text-[#6A7586]">
                                                                            VS
                                                                        </td>
                                                                        <td className="md:px-4 py-2">
                                                                            <Link href="#">
                                                                                <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full	">
                                                                                    <p>380/10 &amp; 250/10</p>
                                                                                    <div className="flex items-center space-x-1">
                                                                                        <span className="text-[#909090]">IND</span>
                                                                                        <Image
                                                                                            src="/assets/img/flag/17.png"
                                                                                            className="h-[24px]"
                                                                                            width={25} height={25} alt="aus"
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                            </Link>
                                                                        </td>
                                                                        <td className="md:px-4 py-2">
                                                                            <div className="text-right leading-6">
                                                                                <p className="font-medium">2nd TEST</p>
                                                                                <p className="text-[#909090] font-normal">
                                                                                    AUS VS IND 2024
                                                                                </p>
                                                                            </div>
                                                                        </td>
                                                                        <td className="px-0 pr-0 py-1 text-[#2F335C]">
                                                                            <div className="text-center">
                                                                                <span className="bg-[#13b76dbd] text-white text-[13px] px-[6px] py-[3px] rounded">
                                                                                    W
                                                                                </span>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                        {/* responsive teame data  */}
                                                        <div className="lg:hidden block">
                                                            <div className="flex justify-between items-center py-4 px-2 bg-[#f7faff] rounded-lg my-3 border-b-[1px] border-[#E4E9F0]">
                                                                <div className="">
                                                                    <Link href="#">
                                                                        <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full mb-3">
                                                                            <div className="flex items-center space-x-1">
                                                                                <Image
                                                                                    src="/assets/img/flag/18.png"
                                                                                    className="h-[18px] rounded-full"
                                                                                    width={25} height={25} alt="aus"
                                                                                />
                                                                                <span className="text-[#909090]">AUS</span>
                                                                            </div>
                                                                            <p>274/10 &amp; 170/10</p>
                                                                        </div>
                                                                    </Link>

                                                                    <div>
                                                                        <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                                                            <div className="flex items-center space-x-1">
                                                                                <Image
                                                                                    src="/assets/img/flag/17.png"
                                                                                    className="h-[18px]"
                                                                                    width={25} height={25} alt="ind"
                                                                                />
                                                                                <span className="text-[#909090]">IND</span>
                                                                            </div>
                                                                            <p>274/10 &amp; 170/10</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="hidden md:block h-[35px] border-l-[1px] border-[#d0d3d7]"></div>
                                                                <div className="flex items-center space-x-4">
                                                                    <div className="text-right leading-6">
                                                                        <p className="font-medium">2nd TEST</p>
                                                                        <p className="text-[#909090] font-normal">
                                                                            AUS VS IND 2024
                                                                        </p>
                                                                    </div>
                                                                    <div>
                                                                        <div className="text-center">
                                                                            <span className="bg-[#13b76dbd] text-white text-[13px] px-[6px] py-[3px] rounded">
                                                                                W
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="flex justify-between items-center py-4 px-2 bg-[#f7faff] rounded-lg my-3 border-b-[1px] border-[#E4E9F0]">
                                                                <div className="">
                                                                    <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full mb-3">
                                                                        <div className="flex items-center space-x-1">
                                                                            <Image
                                                                                src="/assets/img/flag/18.png"
                                                                                className="h-[18px] rounded-full"
                                                                                width={25} height={25} alt="aus"
                                                                            />
                                                                            <span className="text-[#909090]">AUS</span>
                                                                        </div>
                                                                        <p>540/10 &amp; 220/10</p>
                                                                    </div>

                                                                    <div>
                                                                        <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                                                            <div className="flex items-center space-x-1">
                                                                                <Image
                                                                                    src="/assets/img/flag/17.png"
                                                                                    className="h-[18px]"
                                                                                    width={25} height={25} alt="ind"
                                                                                />
                                                                                <span className="text-[#909090]">IND</span>
                                                                            </div>
                                                                            <p>140/10 &amp; 420/10</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="hidden md:block h-[35px] border-l-[1px] border-[#d0d3d7]"></div>
                                                                <div className="flex items-center space-x-4">
                                                                    <div className="text-right leading-6">
                                                                        <p className="font-medium">2nd TEST</p>
                                                                        <p className="text-[#909090] font-normal">
                                                                            AUS VS IND 2024
                                                                        </p>
                                                                    </div>
                                                                    <div>
                                                                        <div className="text-center">
                                                                            <span className="bg-[#f63636c2] text-white text-[13px] px-[7px] py-[3px] rounded">
                                                                                L
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="flex justify-between items-center py-4 px-2 bg-[#f7faff] rounded-lg my-3 border-b-[1px] border-[#E4E9F0]">
                                                                <div className="">
                                                                    <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full mb-3">
                                                                        <div className="flex items-center space-x-1">
                                                                            <Image
                                                                                src="/assets/img/flag/19.png"
                                                                                className="h-[18px] rounded-full"
                                                                                width={25} height={25} alt="aus"
                                                                            />
                                                                            <span className="text-[#909090]">PAK</span>
                                                                        </div>
                                                                        <p>274/10 &amp; 170/10</p>
                                                                    </div>

                                                                    <div>
                                                                        <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                                                            <div className="flex items-center space-x-1">
                                                                                <Image
                                                                                    src="/assets/img/flag/17.png"
                                                                                    className="h-[18px]"
                                                                                    width={25} height={25} alt="ind"
                                                                                />
                                                                                <span className="text-[#909090]">IND</span>
                                                                            </div>
                                                                            <p>250/10 &amp; 160/10</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="hidden md:block h-[35px] border-l-[1px] border-[#d0d3d7]"></div>
                                                                <div className="flex items-center space-x-4">
                                                                    <div className="text-right leading-6">
                                                                        <p className="font-medium">2nd TEST</p>
                                                                        <p className="text-[#909090] font-normal">
                                                                            AUS VS IND 2024
                                                                        </p>
                                                                    </div>
                                                                    <div>
                                                                        <div className="text-center">
                                                                            <span className="bg-[#f63636c2] text-white text-[13px] px-[7px] py-[3px] rounded">
                                                                                L
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="flex justify-between py-4 items-center px-2 bg-[#f7faff] rounded-lg my-3 border-b-[1px] border-[#E4E9F0]">
                                                                <div className="">
                                                                    <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full mb-3">
                                                                        <div className="flex items-center space-x-1">
                                                                            <Image
                                                                                src="/assets/img/flag/19.png"
                                                                                className="h-[18px] rounded-full"
                                                                                width={25} height={25} alt="aus"
                                                                            />
                                                                            <span className="text-[#909090]">PAK</span>
                                                                        </div>
                                                                        <p>274/10 &amp; 170/10</p>
                                                                    </div>

                                                                    <div>
                                                                        <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                                                            <div className="flex items-center space-x-1">
                                                                                <Image
                                                                                    src="/assets/img/flag/17.png"
                                                                                    className="h-[18px]"
                                                                                    width={25} height={25} alt="ind"
                                                                                />
                                                                                <span className="text-[#909090]">IND</span>
                                                                            </div>
                                                                            <p>250/10 &amp; 160/10</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="hidden md:block h-[35px] border-l-[1px] border-[#d0d3d7]"></div>
                                                                <div className="flex items-center space-x-4">
                                                                    <div className="text-right leading-6">
                                                                        <p className="font-medium">2nd TEST</p>
                                                                        <p className="text-[#909090] font-normal">
                                                                            AUS VS IND 2024
                                                                        </p>
                                                                    </div>
                                                                    <div>
                                                                        <div className="text-center">
                                                                            <span className="bg-[#13b76dbd] text-white text-[13px] px-[6px] py-[3px] rounded">
                                                                                W
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="flex justify-between items-center py-4 px-2 bg-[#f7faff] rounded-lg my-3 border-b-[1px] border-[#E4E9F0]">
                                                                <div className="">
                                                                    <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full mb-3">
                                                                        <div className="flex items-center space-x-1">
                                                                            <Image
                                                                                src="/assets/img/flag/19.png"
                                                                                className="h-[18px] rounded-full"
                                                                                width={25} height={25} alt="aus"
                                                                            />
                                                                            <span className="text-[#909090]">PAK</span>
                                                                        </div>
                                                                        <p>274/10 &amp; 170/10</p>
                                                                    </div>

                                                                    <div>
                                                                        <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                                                            <div className="flex items-center space-x-1">
                                                                                <Image
                                                                                    src="/assets/img/flag/17.png"
                                                                                    className="h-[18px]"
                                                                                    width={25} height={25} alt="ind"
                                                                                />
                                                                                <span className="text-[#909090]">IND</span>
                                                                            </div>
                                                                            <p>250/10 &amp; 160/10</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="hidden md:block h-[35px] border-l-[1px] border-[#d0d3d7]"></div>
                                                                <div className="flex items-center space-x-4">
                                                                    <div className="text-right leading-6">
                                                                        <p className="font-medium">2nd TEST</p>
                                                                        <p className="text-[#909090] font-normal">
                                                                            AUS VS IND 2024
                                                                        </p>
                                                                    </div>
                                                                    <div>
                                                                        <div className="text-center">
                                                                            <span className="bg-[#13b76dbd] text-white text-[13px] px-[6px] py-[3px] rounded">
                                                                                W
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="flex justify-between items-center py-4 px-2 bg-[#f7faff] rounded-lg my-3 border-b-[1px] border-[#E4E9F0]">
                                                                <div className="">
                                                                    <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full mb-3">
                                                                        <div className="flex items-center space-x-1">
                                                                            <Image
                                                                                src="/assets/img/flag/19.png"
                                                                                className="h-[18px] rounded-full"
                                                                                width={25} height={25} alt="aus"
                                                                            />
                                                                            <span className="text-[#909090]">PAK</span>
                                                                        </div>
                                                                        <p>274/10 &amp; 170/10</p>
                                                                    </div>

                                                                    <div>
                                                                        <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                                                            <div className="flex items-center space-x-1">
                                                                                <Image
                                                                                    src="/assets/img/flag/17.png"
                                                                                    className="h-[18px]"
                                                                                    width={25} height={25} alt="ind"
                                                                                />
                                                                                <span className="text-[#909090]">IND</span>
                                                                            </div>
                                                                            <p>250/10 &amp; 160/10</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="hidden md:block h-[35px] border-l-[1px] border-[#d0d3d7]"></div>
                                                                <div className="flex items-center space-x-4">
                                                                    <div className="text-right leading-6">
                                                                        <p className="font-medium">2nd TEST</p>
                                                                        <p className="text-[#909090] font-normal">
                                                                            AUS VS IND 2024
                                                                        </p>
                                                                    </div>
                                                                    <div>
                                                                        <div className="text-center">
                                                                            <span className="bg-[#13b76dbd] text-white text-[13px] px-[6px] py-[3px] rounded">
                                                                                W
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>



                                            <div className="performance-section">
                                                <div className="mt-6">
                                                    <div className="flex items-center justify-between my-3" onClick={() => handleToggle(2)}>
                                                        <Link href="">
                                                            <div className="flex items-center space-x-3">
                                                                <div>
                                                                    <Image
                                                                        src="/assets/img/flag/3.png"
                                                                        width={25} height={25} alt="ban"
                                                                        className="h-[25px]"
                                                                    />
                                                                </div>
                                                                <h3 className="text-1xl font-medium">Bangladesh</h3>
                                                            </div>
                                                        </Link>
                                                        <div>
                                                            <div className="ml-auto flex gap-1 items-center">
                                                                <span className="bg-[#13b76dbd] text-white text-[13px] px-[6px] py-[3px] rounded">
                                                                    W
                                                                </span>
                                                                <span className="bg-[#13b76dbd] text-white text-[13px] px-[6px] py-[3px] rounded">
                                                                    W
                                                                </span>
                                                                <span className="bg-[#f63636c2] text-white text-[13px] px-[7px] py-[3px] rounded">
                                                                    L
                                                                </span>
                                                                <span className="bg-[#f63636c2] text-white text-[13px] px-[7px] py-[3px] rounded">
                                                                    L
                                                                </span>
                                                                <span className="bg-[#13b76dbd] text-white text-[13px] px-[6px] py-[3px] rounded">
                                                                    W
                                                                </span>
                                                                <span>
                                                                    <button
                                                                        className={`transform transition-transform ${openHeading === 2 ? "rotate-180" : "rotate-0"
                                                                            }`}
                                                                    >
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            fill="none"
                                                                            viewBox="0 0 24 24"
                                                                            strokeWidth={1.5}
                                                                            stroke="currentColor"
                                                                            className="w-5 h-5 text-gray-600"
                                                                        >
                                                                            <path
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                                d="M19.5 12l-7.5 7.5L4.5 12"
                                                                            />
                                                                        </svg>
                                                                    </button>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="border-t-[1px] border-[#E4E9F0]" />
                                                </div>
                                                {openHeading === 2 && (
                                                    <div className="md:px-3 open-Performance-data">
                                                        {/* full screen teame data */}
                                                        <div className="overflow-x-auto lg:block hidden">
                                                            <table className="w-full text-left rtl:text-right">
                                                                <tbody>
                                                                    <tr className="whitespace-nowrap bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-[13px]">
                                                                        <td className="px-4 pl-0 py-1 ">
                                                                            <Link href="#">
                                                                                <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                                                                    <div className="flex items-center space-x-1">
                                                                                        <Image
                                                                                            src="/assets/img/flag/18.png"
                                                                                            className="h-[24px] rounded-full"
                                                                                            width={25} height={25} alt="aus"
                                                                                        />
                                                                                        <span className="text-[#909090]">AUS</span>
                                                                                    </div>
                                                                                    <p>274/10 &amp; 170/10</p>
                                                                                </div>
                                                                            </Link>
                                                                        </td>
                                                                        <td className="md:px-4 py-2 font-medium text-[#6A7586]">
                                                                            VS
                                                                        </td>
                                                                        <td className="md:px-4 py-2">
                                                                            <Link href="#">
                                                                                <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                                                                    <p>274/10 &amp; 170/10</p>
                                                                                    <div className="flex items-center space-x-1">
                                                                                        <span className="text-[#909090]">IND</span>
                                                                                        <Image
                                                                                            src="/assets/img/flag/17.png"
                                                                                            className="h-[24px]"
                                                                                            width={25} height={25} alt="ind"
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                            </Link>
                                                                        </td>
                                                                        <td className="md:px-4 py-2">
                                                                            <div className="text-right leading-6">
                                                                                <p className="font-medium">2nd TEST</p>
                                                                                <p className="text-[#909090] font-normal">
                                                                                    AUS VS IND 2024
                                                                                </p>
                                                                            </div>
                                                                        </td>
                                                                        <td className="px-0 pr-0 py-1 text-[#2F335C]">
                                                                            <div className="text-center">
                                                                                <span className="bg-[#13b76dbd] text-white text-[13px] px-[6px] py-[3px] rounded">
                                                                                    W
                                                                                </span>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr className="whitespace-nowrap bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-[13px]">
                                                                        <td className="px-4 pl-0 py-1">
                                                                            <Link href="#">
                                                                                <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full	">
                                                                                    <div className="flex items-center space-x-1">
                                                                                        <Image
                                                                                            src="/assets/img/flag/18.png"
                                                                                            className="h-[24px] rounded-full"
                                                                                            width={25} height={25} alt="aus"
                                                                                        />
                                                                                        <span className="text-[#909090]">AUS</span>
                                                                                    </div>
                                                                                    <p className="">540/10 &amp; 220/10</p>
                                                                                </div>
                                                                            </Link>
                                                                        </td>
                                                                        <td className="md:px-4 py-2 font-medium	 text-[#6A7586]">
                                                                            VS
                                                                        </td>
                                                                        <td className="md:px-4 py-2">
                                                                            <Link href="#">
                                                                                <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full	">
                                                                                    <p>140/10 &amp; 420/10</p>
                                                                                    <div className="flex items-center space-x-1">
                                                                                        <span className="text-[#909090]">IND</span>
                                                                                        <Image
                                                                                            src="/assets/img/flag/17.png"
                                                                                            className="h-[24px]"
                                                                                            width={25} height={25} alt="aus"
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                            </Link>
                                                                        </td>
                                                                        <td className="md:px-4 py-2">
                                                                            <div className="text-right leading-6">
                                                                                <p className="font-medium">2nd TEST</p>
                                                                                <p className="text-[#909090] font-normal">
                                                                                    AUS VS IND 2024
                                                                                </p>
                                                                            </div>
                                                                        </td>
                                                                        <td className="px-0 pr-0 py-1 text-[#2F335C]">
                                                                            <div className="text-center">
                                                                                <span className="bg-[#f63636c2] text-white text-[13px] px-[7px] py-[3px] rounded">
                                                                                    L
                                                                                </span>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr className="whitespace-nowrap bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-[13px]">
                                                                        <td className="px-4 pl-0 py-1">
                                                                            <Link href="#">
                                                                                <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full	">
                                                                                    <div className="flex items-center space-x-1">
                                                                                        <Image
                                                                                            src="/assets/img/flag/19.png"
                                                                                            className="h-[24px] rounded-full"
                                                                                            width={25} height={25} alt="pak"
                                                                                        />
                                                                                        <span className="text-[#909090]">PAK</span>
                                                                                    </div>
                                                                                    <p className="">274/10 &amp; 170/10</p>
                                                                                </div>
                                                                            </Link>
                                                                        </td>
                                                                        <td className="md:px-4 py-2 font-medium	 text-[#6A7586]">
                                                                            VS
                                                                        </td>
                                                                        <td className="md:px-4 py-2">
                                                                            <Link href="#">
                                                                                <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full	">
                                                                                    <p>250/10 &amp; 160/10</p>
                                                                                    <div className="flex items-center space-x-1">
                                                                                        <span className="text-[#909090]">IND</span>
                                                                                        <Image
                                                                                            src="/assets/img/flag/17.png"
                                                                                            className="h-[24px]"
                                                                                            width={25} height={25} alt="aus"
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                            </Link>
                                                                        </td>
                                                                        <td className="md:px-4 py-2">
                                                                            <div className="text-right leading-6">
                                                                                <p className="font-medium">2nd TEST</p>
                                                                                <p className="text-[#909090] font-normal">
                                                                                    250/10 &amp; 160/10
                                                                                </p>
                                                                            </div>
                                                                        </td>
                                                                        <td className="px-0 pr-0 py-1 text-[#2F335C]">
                                                                            <div className="text-center">
                                                                                <span className="bg-[#f63636c2] text-white text-[13px] px-[7px] py-[3px] rounded">
                                                                                    L
                                                                                </span>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr className="whitespace-nowrap bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-[13px]">
                                                                        <td className="px-4 pl-0 py-1">
                                                                            <Link href="#">
                                                                                <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full	">
                                                                                    <div className="flex items-center space-x-1">
                                                                                        <Image
                                                                                            src="/assets/img/flag/19.png"
                                                                                            className="h-[24px] rounded-full"
                                                                                            width={25} height={25} alt="aus"
                                                                                        />
                                                                                        <span className="text-[#909090]">PAK</span>
                                                                                    </div>
                                                                                    <p className="">274/10 &amp; 170/10</p>
                                                                                </div>
                                                                            </Link>
                                                                        </td>
                                                                        <td className="md:px-4 py-2 font-medium	 text-[#6A7586]">
                                                                            VS
                                                                        </td>
                                                                        <td className="md:px-4 py-2">
                                                                            <Link href="#">
                                                                                <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full	">
                                                                                    <p>280/10 &amp; 190/10</p>
                                                                                    <div className="flex items-center space-x-1">
                                                                                        <span className="text-[#909090]">IND</span>
                                                                                        <Image
                                                                                            src="/assets/img/flag/17.png"
                                                                                            className="h-[24px]"
                                                                                            width={25} height={25} alt="aus"
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                            </Link>
                                                                        </td>
                                                                        <td className="md:px-4 py-2">
                                                                            <div className="text-right leading-6">
                                                                                <p className="font-medium">2nd TEST</p>
                                                                                <p className="text-[#909090] font-normal">
                                                                                    AUS VS IND 2024
                                                                                </p>
                                                                            </div>
                                                                        </td>
                                                                        <td className="px-0 pr-0 py-1 text-[#2F335C]">
                                                                            <div className="text-center">
                                                                                <span className="bg-[#13b76dbd] text-white text-[13px] px-[6px] py-[3px] rounded">
                                                                                    W
                                                                                </span>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr className="whitespace-nowrap bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-[13px]">
                                                                        <td className="px-4 pl-0 py-1">
                                                                            <Link href="#">
                                                                                <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full	">
                                                                                    <div className="flex items-center space-x-1">
                                                                                        <Image
                                                                                            src="/assets/img/flag/18.png"
                                                                                            className="h-[24px] rounded-full"
                                                                                            width={25} height={25} alt="aus"
                                                                                        />
                                                                                        <span className="text-[#909090]">PAK</span>
                                                                                    </div>
                                                                                    <p className="">174/10 &amp; 160/10</p>
                                                                                </div>
                                                                            </Link>
                                                                        </td>
                                                                        <td className="md:px-4 py-2 font-medium	 text-[#6A7586]">
                                                                            VS
                                                                        </td>
                                                                        <td className="md:px-4 py-2">
                                                                            <Link href="#">
                                                                                <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full	">
                                                                                    <p>380/10 &amp; 250/10</p>
                                                                                    <div className="flex items-center space-x-1">
                                                                                        <span className="text-[#909090]">IND</span>
                                                                                        <Image
                                                                                            src="/assets/img/flag/17.png"
                                                                                            className="h-[24px]"
                                                                                            width={25} height={25} alt="aus"
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                            </Link>
                                                                        </td>
                                                                        <td className="md:px-4 py-2">
                                                                            <div className="text-right leading-6">
                                                                                <p className="font-medium">2nd TEST</p>
                                                                                <p className="text-[#909090] font-normal">
                                                                                    AUS VS IND 2024
                                                                                </p>
                                                                            </div>
                                                                        </td>
                                                                        <td className="px-0 pr-0 py-1 text-[#2F335C]">
                                                                            <div className="text-center">
                                                                                <span className="bg-[#13b76dbd] text-white text-[13px] px-[6px] py-[3px] rounded">
                                                                                    W
                                                                                </span>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                        {/* responsive teame data  */}
                                                        <div className="lg:hidden block">
                                                            <div className="flex justify-between items-center py-4 px-2 bg-[#f7faff] rounded-lg my-3 border-b-[1px] border-[#E4E9F0]">
                                                                <div className="">
                                                                    <Link href="#">
                                                                        <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full mb-3">
                                                                            <div className="flex items-center space-x-1">
                                                                                <Image
                                                                                    src="/assets/img/flag/18.png"
                                                                                    className="h-[18px] rounded-full"
                                                                                    width={25} height={25} alt="aus"
                                                                                />
                                                                                <span className="text-[#909090]">AUS</span>
                                                                            </div>
                                                                            <p>274/10 &amp; 170/10</p>
                                                                        </div>
                                                                    </Link>

                                                                    <div>
                                                                        <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                                                            <div className="flex items-center space-x-1">
                                                                                <Image
                                                                                    src="/assets/img/flag/17.png"
                                                                                    className="h-[18px]"
                                                                                    width={25} height={25} alt="ind"
                                                                                />
                                                                                <span className="text-[#909090]">IND</span>
                                                                            </div>
                                                                            <p>274/10 &amp; 170/10</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="hidden md:block h-[35px] border-l-[1px] border-[#d0d3d7]"></div>
                                                                <div className="flex items-center space-x-4">
                                                                    <div className="text-right leading-6">
                                                                        <p className="font-medium">2nd TEST</p>
                                                                        <p className="text-[#909090] font-normal">
                                                                            AUS VS IND 2024
                                                                        </p>
                                                                    </div>
                                                                    <div>
                                                                        <div className="text-center">
                                                                            <span className="bg-[#13b76dbd] text-white text-[13px] px-[6px] py-[3px] rounded">
                                                                                W
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="flex justify-between items-center py-4 px-2 bg-[#f7faff] rounded-lg my-3 border-b-[1px] border-[#E4E9F0]">
                                                                <div className="">
                                                                    <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full mb-3">
                                                                        <div className="flex items-center space-x-1">
                                                                            <Image
                                                                                src="/assets/img/flag/18.png"
                                                                                className="h-[18px] rounded-full"
                                                                                width={25} height={25} alt="aus"
                                                                            />
                                                                            <span className="text-[#909090]">AUS</span>
                                                                        </div>
                                                                        <p>540/10 &amp; 220/10</p>
                                                                    </div>

                                                                    <div>
                                                                        <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                                                            <div className="flex items-center space-x-1">
                                                                                <Image
                                                                                    src="/assets/img/flag/17.png"
                                                                                    className="h-[18px]"
                                                                                    width={25} height={25} alt="ind"
                                                                                />
                                                                                <span className="text-[#909090]">IND</span>
                                                                            </div>
                                                                            <p>140/10 &amp; 420/10</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="hidden md:block h-[35px] border-l-[1px] border-[#d0d3d7]"></div>
                                                                <div className="flex items-center space-x-4">
                                                                    <div className="text-right leading-6">
                                                                        <p className="font-medium">2nd TEST</p>
                                                                        <p className="text-[#909090] font-normal">
                                                                            AUS VS IND 2024
                                                                        </p>
                                                                    </div>
                                                                    <div>
                                                                        <div className="text-center">
                                                                            <span className="bg-[#f63636c2] text-white text-[13px] px-[7px] py-[3px] rounded">
                                                                                L
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="flex justify-between items-center py-4 px-2 bg-[#f7faff] rounded-lg my-3 border-b-[1px] border-[#E4E9F0]">
                                                                <div className="">
                                                                    <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full mb-3">
                                                                        <div className="flex items-center space-x-1">
                                                                            <Image
                                                                                src="/assets/img/flag/19.png"
                                                                                className="h-[18px] rounded-full"
                                                                                width={25} height={25} alt="aus"
                                                                            />
                                                                            <span className="text-[#909090]">PAK</span>
                                                                        </div>
                                                                        <p>274/10 &amp; 170/10</p>
                                                                    </div>

                                                                    <div>
                                                                        <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                                                            <div className="flex items-center space-x-1">
                                                                                <Image
                                                                                    src="/assets/img/flag/17.png"
                                                                                    className="h-[18px]"
                                                                                    width={25} height={25} alt="ind"
                                                                                />
                                                                                <span className="text-[#909090]">IND</span>
                                                                            </div>
                                                                            <p>250/10 &amp; 160/10</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="hidden md:block h-[35px] border-l-[1px] border-[#d0d3d7]"></div>
                                                                <div className="flex items-center space-x-4">
                                                                    <div className="text-right leading-6">
                                                                        <p className="font-medium">2nd TEST</p>
                                                                        <p className="text-[#909090] font-normal">
                                                                            AUS VS IND 2024
                                                                        </p>
                                                                    </div>
                                                                    <div>
                                                                        <div className="text-center">
                                                                            <span className="bg-[#f63636c2] text-white text-[13px] px-[7px] py-[3px] rounded">
                                                                                L
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="flex justify-between py-4 items-center px-2 bg-[#f7faff] rounded-lg my-3 border-b-[1px] border-[#E4E9F0]">
                                                                <div className="">
                                                                    <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full mb-3">
                                                                        <div className="flex items-center space-x-1">
                                                                            <Image
                                                                                src="/assets/img/flag/19.png"
                                                                                className="h-[18px] rounded-full"
                                                                                width={25} height={25} alt="aus"
                                                                            />
                                                                            <span className="text-[#909090]">PAK</span>
                                                                        </div>
                                                                        <p>274/10 &amp; 170/10</p>
                                                                    </div>

                                                                    <div>
                                                                        <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                                                            <div className="flex items-center space-x-1">
                                                                                <Image
                                                                                    src="/assets/img/flag/17.png"
                                                                                    className="h-[18px]"
                                                                                    width={25} height={25} alt="ind"
                                                                                />
                                                                                <span className="text-[#909090]">IND</span>
                                                                            </div>
                                                                            <p>250/10 &amp; 160/10</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="hidden md:block h-[35px] border-l-[1px] border-[#d0d3d7]"></div>
                                                                <div className="flex items-center space-x-4">
                                                                    <div className="text-right leading-6">
                                                                        <p className="font-medium">2nd TEST</p>
                                                                        <p className="text-[#909090] font-normal">
                                                                            AUS VS IND 2024
                                                                        </p>
                                                                    </div>
                                                                    <div>
                                                                        <div className="text-center">
                                                                            <span className="bg-[#13b76dbd] text-white text-[13px] px-[6px] py-[3px] rounded">
                                                                                W
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="flex justify-between items-center py-4 px-2 bg-[#f7faff] rounded-lg my-3 border-b-[1px] border-[#E4E9F0]">
                                                                <div className="">
                                                                    <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full mb-3">
                                                                        <div className="flex items-center space-x-1">
                                                                            <Image
                                                                                src="/assets/img/flag/19.png"
                                                                                className="h-[18px] rounded-full"
                                                                                width={25} height={25} alt="aus"
                                                                            />
                                                                            <span className="text-[#909090]">PAK</span>
                                                                        </div>
                                                                        <p>274/10 &amp; 170/10</p>
                                                                    </div>

                                                                    <div>
                                                                        <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                                                            <div className="flex items-center space-x-1">
                                                                                <Image
                                                                                    src="/assets/img/flag/17.png"
                                                                                    className="h-[18px]"
                                                                                    width={25} height={25} alt="ind"
                                                                                />
                                                                                <span className="text-[#909090]">IND</span>
                                                                            </div>
                                                                            <p>250/10 &amp; 160/10</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="hidden md:block h-[35px] border-l-[1px] border-[#d0d3d7]"></div>
                                                                <div className="flex items-center space-x-4">
                                                                    <div className="text-right leading-6">
                                                                        <p className="font-medium">2nd TEST</p>
                                                                        <p className="text-[#909090] font-normal">
                                                                            AUS VS IND 2024
                                                                        </p>
                                                                    </div>
                                                                    <div>
                                                                        <div className="text-center">
                                                                            <span className="bg-[#13b76dbd] text-white text-[13px] px-[6px] py-[3px] rounded">
                                                                                W
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="flex justify-between items-center py-4 px-2 bg-[#f7faff] rounded-lg my-3 border-b-[1px] border-[#E4E9F0]">
                                                                <div className="">
                                                                    <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full mb-3">
                                                                        <div className="flex items-center space-x-1">
                                                                            <Image
                                                                                src="/assets/img/flag/19.png"
                                                                                className="h-[18px] rounded-full"
                                                                                width={25} height={25} alt="aus"
                                                                            />
                                                                            <span className="text-[#909090]">PAK</span>
                                                                        </div>
                                                                        <p>274/10 &amp; 170/10</p>
                                                                    </div>

                                                                    <div>
                                                                        <div className="flex items-center space-x-2 font-medium w-[162px] md:w-full">
                                                                            <div className="flex items-center space-x-1">
                                                                                <Image
                                                                                    src="/assets/img/flag/17.png"
                                                                                    className="h-[18px]"
                                                                                    width={25} height={25} alt="ind"
                                                                                />
                                                                                <span className="text-[#909090]">IND</span>
                                                                            </div>
                                                                            <p>250/10 &amp; 160/10</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="hidden md:block h-[35px] border-l-[1px] border-[#d0d3d7]"></div>
                                                                <div className="flex items-center space-x-4">
                                                                    <div className="text-right leading-6">
                                                                        <p className="font-medium">2nd TEST</p>
                                                                        <p className="text-[#909090] font-normal">
                                                                            AUS VS IND 2024
                                                                        </p>
                                                                    </div>
                                                                    <div>
                                                                        <div className="text-center">
                                                                            <span className="bg-[#13b76dbd] text-white text-[13px] px-[6px] py-[3px] rounded">
                                                                                W
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>


                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-lg bg-[#ffffff] my-4 p-4">
                                    <div>
                                        <h3 className="text-1xl font-semibold  pl-[7px] border-l-[3px] mb-3 border-[#229ED3]">
                                            Head To Head (Last 10 matches)
                                        </h3>
                                        <div className="border-t-[1px] border-[#E4E9F0]" />
                                        <div className="py-4 text-1xl flex justify-between items-center">
                                            <Link href="/team/india/test">
                                                <div className="font-bold uppercase flex items-center">
                                                    <Image className="h-[30px]" src="/assets/img/flg-1.png" width={30} height={30} alt="" />
                                                    <p className="mx-2 font-semibold uppercase">IND</p>
                                                </div>
                                            </Link>
                                            <div className=" font-normal text-center">
                                                <p className="text-[#D28505] text-[17px] font-semibold">
                                                    10 <span className="text-[#009900]">- 10</span>
                                                </p>
                                            </div>
                                            <Link href="/team/india/test">
                                                <div className="font-bold uppercase flex items-center">
                                                    <p className="mx-2 font-semibold uppercase">BAN</p>
                                                    <Image className="h-[30px]" src="/assets/img/ban.png" width={30} height={30} alt="ban" />
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="border-t-[1px] border-[#E4E9F0]" />
                                        <div className="py-4 flex justify-between items-center">
                                            <Link href="">
                                                <div className="font-medium  w-full">
                                                    <p className="mx-2 font-semibold uppercase">BAN</p>
                                                    <p className="mx-2 font-medium uppercase text-[#586577]">
                                                        227 &amp; 231
                                                    </p>
                                                </div>
                                            </Link>
                                            <div className=" font-semibold text-center w-full">
                                                <p className="text-[#3D4DCF]">IND Won</p>
                                                <p className="text-[#586577] font-medium">
                                                    2nd TEST, BAN vs IND 2022
                                                </p>
                                            </div>
                                            <Link href="">
                                                <div className="font-medium text-right w-full">
                                                    <p className="mx-2 font-semibold uppercase">IND</p>
                                                    <p className="mx-2 font-medium uppercase text-[#586577]">
                                                        314 &amp; 145/7
                                                    </p>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="border-t-[1px] border-[#E4E9F0]" />
                                        <div className="py-4 flex justify-between items-center">
                                            <Link href="#">
                                                <div className="font-medium w-full">
                                                    <p className="mx-2 font-semibold uppercase">BAN</p>
                                                    <p className="mx-2 font-medium uppercase text-[#586577]">
                                                        150 &amp; 324
                                                    </p>
                                                </div>
                                            </Link>
                                            <div className=" font-semibold text-center w-full">
                                                <p className="text-[#3D4DCF]">IND Won</p>
                                                <p className="text-[#586577] font-medium">
                                                    2nd TEST, BAN vs IND 2022
                                                </p>
                                            </div>
                                            <Link href="">
                                                <div className="font-medium text-right w-full">
                                                    <p className="mx-2 font-semibold uppercase">IND</p>
                                                    <p className="mx-2 font-medium uppercase text-[#586577]">
                                                        404 &amp; 258/2
                                                    </p>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="border-t-[1px] border-[#E4E9F0]" />
                                        <div className="py-4 flex justify-between items-center">
                                            <Link href="">
                                                <div className="font-medium w-full">
                                                    <p className="mx-2 font-semibold uppercase">IND</p>
                                                    <p className="mx-2 font-medium uppercase text-[#586577]">
                                                        347/9 (89.2)
                                                    </p>
                                                </div>
                                            </Link>
                                            <div className=" font-semibold text-center w-full">
                                                <p className="text-[#3D4DCF]">IND Won</p>
                                                <p className="text-[#586577] font-medium">
                                                    2nd TEST, BAN vs IND 2022
                                                </p>
                                            </div>
                                            <Link href="">
                                                <div className="font-medium text-right w-full">
                                                    <p className="mx-2 font-semibold uppercase">BAN</p>
                                                    <p className="mx-2 font-medium uppercase text-[#586577]">
                                                        106 &amp; 195
                                                    </p>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="border-t-[1px] border-[#E4E9F0]" />
                                        <div className="py-4 flex justify-between items-center">
                                            <Link href="">
                                                <div className="font-medium w-full">
                                                    <p className="mx-2 font-semibold uppercase">IND</p>
                                                    <p className="mx-2 font-medium uppercase text-[#586577]">
                                                        493/6 (114.0)
                                                    </p>
                                                </div>
                                            </Link>
                                            <div className=" font-semibold text-center w-full">
                                                <p className="text-[#3D4DCF]">IND Won</p>
                                                <p className="text-[#586577] font-medium">
                                                    2nd TEST, BAN vs IND 2022
                                                </p>
                                            </div>
                                            <Link href="">
                                                <div className="font-medium text-right w-full">
                                                    <p className="mx-2 font-semibold uppercase">BAN</p>
                                                    <p className="mx-2 font-medium uppercase text-[#586577]">
                                                        150 &amp; 113
                                                    </p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-lg bg-[#ffffff] my-4 p-4">
                                    <div className="cust-box-click-container">
                                        <div className="md:flex justify-between items-center  mb-3">
                                            <h3 className="text-1xl font-semibold pl-[7px] border-l-[3px] border-[#229ED3]">
                                                Team Comparison (Last 10 matches)
                                            </h3>
                                            <div className="flex items-center md:justify-center justify-end md:mt-0 mt-4">

                                                <button className="cust-box-click-button font-medium px-5 py-1 rounded-full bg-[#081736] text-white">
                                                    <span>Overall</span>
                                                </button>

                                                <button className="cust-box-click-button font-medium px-5 py-1 rounded-full text-[#6A7586]" >
                                                    <span>On Venue</span>
                                                </button>

                                            </div>
                                        </div>

                                        <div className="border-t-[1px] border-[#E4E9F0]" />

                                        <div>
                                            <div className="cust-box-click-content cust-box-click-overall1 mt-4">
                                                <div>
                                                    <div className="py-4 flex justify-between items-center">
                                                        <Link href="">
                                                            <div className="font-bold flex items-center">
                                                                <Image className="h-[30px]" src="/assets/img/flg-1.png" width={30} height={30} alt="" />
                                                                <p className="mx-2 text-1xl font-semibold">
                                                                    IND
                                                                    <span className="text-[13px] text-[#9094b6] font-medium block">
                                                                        vs all teams
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </Link>
                                                        <Link href="">
                                                            <div className="font-bold flex items-center">
                                                                <p className="mx-2 text-1xl font-semibold text-right">
                                                                    BAN
                                                                    <span className="text-[13px] text-[#9094b6] font-medium block">
                                                                        vs all teams
                                                                    </span>
                                                                </p>
                                                                <Image className="h-[30px]" src="/assets/img/ban.png" width={30} height={30} alt="ban" />
                                                            </div>
                                                        </Link>
                                                    </div>
                                                    <div className="border-t-[1px] border-[#E4E9F0]" />
                                                    <div className="py-2 flex justify-between items-center">
                                                        <div className="font-medium text-[#586577] w-full">
                                                            <p className="mx-2 font-semibold uppercase">1</p>
                                                        </div>
                                                        <div className=" font-semibold text-center w-full">
                                                            <p className="text-[#73758B] font-normal">Matches Played</p>
                                                        </div>
                                                        <div className="font-medium text-right w-full">
                                                            <p className="text-[#586577] font-medium">1</p>
                                                        </div>
                                                    </div>
                                                    <div className="border-t-[1px] border-[#E4E9F0]" />
                                                    <div className="py-2 flex justify-between items-center">
                                                        <div className="font-medium text-[#586577] w-full">
                                                            <p className="mx-2 font-semibold text-[#439F76] uppercase">
                                                                100%
                                                            </p>
                                                        </div>
                                                        <div className=" font-semibold text-center w-full">
                                                            <p className="text-[#73758B] font-normal">Win</p>
                                                        </div>
                                                        <div className="font-medium text-right w-full">
                                                            <p className="text-[#586577] font-medium">0%</p>
                                                        </div>
                                                    </div>
                                                    <div className="border-t-[1px] border-[#E4E9F0]" />
                                                    <div className="py-2 flex justify-between items-center">
                                                        <div className="font-medium text-[#586577] w-full">
                                                            <p className="mx-2 font-semibold uppercase text-[#439F76]">
                                                                119
                                                            </p>
                                                        </div>
                                                        <div className=" font-semibold text-center w-full">
                                                            <p className="text-[#73758B] font-normal">Avg Score</p>
                                                        </div>
                                                        <div className="font-medium text-right w-full">
                                                            <p className="text-[#586577] font-medium">123</p>
                                                        </div>
                                                    </div>
                                                    <div className="border-t-[1px] border-[#E4E9F0]" />
                                                    <div className="py-2 flex justify-between items-center">
                                                        <div className="font-medium text-[#586577] w-full">
                                                            <p className="mx-2 font-semibold uppercase text-[#439F76]">
                                                                212
                                                            </p>
                                                        </div>
                                                        <div className=" font-semibold text-center w-full">
                                                            <p className="text-[#73758B] font-normal">Highest Score</p>
                                                        </div>
                                                        <div className="font-medium text-right w-full">
                                                            <p className="text-[#586577] font-medium">231</p>
                                                        </div>
                                                    </div>
                                                    <div className="border-t-[1px] border-[#E4E9F0]" />
                                                    <div className="py-2 flex justify-between items-center">
                                                        <div className="font-medium text-[#586577] w-full">
                                                            <p className="mx-2 font-semibold uppercase text-[#E14848]">
                                                                152
                                                            </p>
                                                        </div>
                                                        <div className=" font-semibold text-center w-full">
                                                            <p className="text-[#73758B] font-normal">Lowest Score</p>
                                                        </div>
                                                        <div className="font-medium text-right w-full">
                                                            <p className="text-[#586577] font-medium">112</p>
                                                        </div>
                                                    </div>
                                                    <div className="border-t-[1px] border-[#E4E9F0]" />
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                                <div className="rounded-lg bg-[#ffffff] my-4 p-4">
                                    <div className="relative">
                                        <h3 className="text-1xl font-semibold mb-2 pl-[7px] border-l-[3px] border-[#229ED3]">
                                            Weather Condition
                                        </h3>
                                        <div className="border-t-[1px] border-[#E4E9F0]" />
                                        <div className="flex lg:grid md:grid-cols-12 justify-between md:gap-4 items-center py-3">
                                            <div className="col-span-3">
                                                <div>
                                                    <Image
                                                        src="/assets/img/weather.png"
                                                        className="md:h-[75px] h-[60px]"
                                                        width={75} height={75} alt=""
                                                    />
                                                    <p className="text-1xl ml-2 font-semibold">Sunny</p>
                                                </div>
                                            </div>
                                            <div className="col-span-3">
                                                <div className="font-normal text-[#616161] mb-2">
                                                    <p className="lg:relative lg:top-0 lg:right-0 lg:text-left lg:text-[13px] absolute top-[4px] right-0 text-right text-[10px]">
                                                        <span className="lg:block"> Last Updated: </span>
                                                        12:00AM / 18th Nov 2024
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-span-3">
                                                <p className="font-bold	md:text-[28px] text-[24px]">30.81°C</p>
                                            </div>
                                            <div className="col-span-3 text-[#616161] md:text-[13px] text-[11px]">
                                                <div className="flex justify-between pb-1 items-center">
                                                    <div className="flex space-x-2 items-center">
                                                        <Image src="/assets/img/w-1.png" className="h-[16px]" width={15} height={15} alt="" />
                                                        <p className="">Humidity:</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-[#FEA126]">95%</span>
                                                    </div>
                                                </div>
                                                <div className="flex justify-between pb-1 space-x-2 items-center">
                                                    <div className="flex space-x-2 items-center">
                                                        <Image src="/assets/img/w-2.png" className="h-[16px]" width={15} height={15} alt="" />
                                                        <p className="">Rain chance: </p>
                                                    </div>
                                                    <div>
                                                        <span className="text-[#16A1EF]">40%</span>
                                                    </div>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <div className="flex space-x-2 items-center">
                                                        <Image src="/assets/img/wind.png" className="h-[16px]" width={15} height={15} alt="" />
                                                        <p className="">Wind:</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-[#1565c0]">5km/h</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border-t-[1px] border-[#E4E9F0]" />
                                        <div className="flex space-x-2 pt-3 items-center">
                                            <Image src="/assets/img/map.png" width={15} height={15} alt="location" />
                                            <p className="text-[#3E436D]">
                                                Molana Azad Stadium, Jammu, India.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-lg bg-[#ffffff] my-4 p-4">
                                    <h3 className="text-1xl font-semibold mb-2 pl-[7px] border-l-[3px] border-[#229ED3]">
                                        Venue Stats
                                    </h3>
                                    <div className="border-t-[1px] border-[#E4E9F0]" />
                                    {/* full screen view */}
                                    <div className="lg:flex hidden justify-between items-center py-4">
                                        <div className="col-span-1 relative">
                                            <Image src="/assets/img/ring.png" className="h-[90px]" width={90} height={90} alt="" />
                                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                                                <p className="font-bold text-[18px]">7</p>
                                                <p className="text-[10px]">Matches</p>
                                            </div>
                                        </div>
                                        <div className="col-span-1 relative">
                                            <div className="pb-5">
                                                <p className="text-[#13b76dbd] font-semibold">43%</p>
                                                <p className="text-[13px] text-[#3E436D]">Win Bat first </p>
                                            </div>
                                            <div className="">
                                                <p className="text-[#B7132B] font-semibold">29%</p>
                                                <p className="text-[13px] text-[#3E436D]">Win Bat first </p>
                                            </div>
                                        </div>
                                        <div className="col-span-1 relative">
                                            <div className="pb-5">
                                                <p className="font-semibold">398</p>
                                                <p className="text-[13px] text-[#3E436D]">Avg 1st Innings</p>
                                            </div>
                                            <div className="">
                                                <p className="font-semibold">405</p>
                                                <p className="text-[13px] text-[#3E436D]">Avg 2st Innings</p>
                                            </div>
                                        </div>
                                        <div className="col-span-1 relative">
                                            <div className="pb-5">
                                                <p className="font-semibold">222</p>
                                                <p className="text-[13px] text-[#3E436D]">Avg 3st Innings</p>
                                            </div>
                                            <div className="">
                                                <p>43%</p>
                                                <p className="text-[13px] text-[#3E436D]">Avg 4st Innings</p>
                                            </div>
                                        </div>
                                        <div className="col-span-1 relative">
                                            <p className="text-[13px] text-center font-semibold  pb-5">
                                                Highest Total
                                            </p>
                                            <p className="text-[13px] text-center font-semibold ">
                                                Lowest Total
                                            </p>
                                        </div>
                                        <div className="col-span-1 relative">
                                            <p className="text-[13px] text-center text-[#3E436D] pb-5">
                                                by ENG vs IND
                                            </p>
                                            <p className="text-[13px] text-center text-[#3E436D]">
                                                by AUS vs IND
                                            </p>
                                        </div>
                                        <div className="col-span-1 relative text-center">
                                            <p className="font-bold pb-5">759-7</p>
                                            <p className="font-bold">50-2</p>
                                        </div>
                                    </div>
                                    {/* responsive screen view */}
                                    <div className="lg:hidden">
                                        <div className="flex items-center justify-around my-2 py-3 rounded-lg bg-[#f7faff]">
                                            <div className="col-span-1 relative">
                                                <div
                                                    className="flex justify-center items-center w-[81px] h-[81px] rounded-full"
                                                    style={{
                                                        background:
                                                            "conic-gradient(#3e436d 0 29%, #b7132b 0 50%, #13b76dbd 0 100%)"
                                                    }}
                                                >
                                                    <div className="flex flex-col items-center w-[65px] h-[64px] p-4 rounded-full bg-white">
                                                        <p className="font-bold text-[18px]">7</p>
                                                        <p className="text-[10px]">Matches</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-span-1 relative">
                                                <div className="flex items-center space-x-8 mb-4">
                                                    <p className="text-[13px] text-[#3E436D]">Win Bat first </p>
                                                    <p className="text-[#13b76dbd] font-semibold text-1xl">43%</p>
                                                </div>
                                                <div className="flex items-center space-x-8">
                                                    <p className="text-[13px] text-[#3E436D]">Win Bat first </p>
                                                    <p className="text-[#B7132B] font-semibold text-1xl">29%</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-center py-2 mb-3 pb-3 border-b border-[#e4e9f0]">
                                            <div className="flex flex-col items-start space-y-1">
                                                <p className="text-[13px] text-[#3E436D]">Avg 1st Innings</p>
                                                <p className="font-medium text-1xl">398</p>
                                            </div>
                                            <div className="flex flex-col items-end space-y-1">
                                                <p className="text-[13px] text-[#3E436D]">Avg 2st Innings</p>
                                                <p className="font-medium text-1xl">405</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-center pb-3 mb-3 border-b border-[#e4e9f0]">
                                            <div className="flex flex-col items-start space-y-1">
                                                <p className="text-[13px] text-[#3E436D]">Avg 3st Innings</p>
                                                <p className="font-medium text-1xl">222</p>
                                            </div>
                                            <div className="flex flex-col items-end space-y-1">
                                                <p className="text-[13px] text-[#3E436D]">Avg 4st Innings</p>
                                                <p className="font-medium text-1xl">43%</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-end pb-3 mb-3 border-b border-[#e4e9f0]">
                                            <div className="flex flex-col items-start space-y-1">
                                                <p className="text-[13px] text-[#3E436D]">Highest</p>
                                                <p className="font-medium text-1xl">
                                                    759-7{" "}
                                                    <span className="text-[13px] text-[#3E436D]">by ENG</span>
                                                </p>
                                            </div>
                                            <div className="flex flex-col items-end space-y-1">
                                                <p className="text-[13px] text-[#3E436D]">ENG vs IND</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-end pb-3 mb-3 border-b border-[#e4e9f0]">
                                            <div className="flex flex-col items-start space-y-1">
                                                <p className="text-[13px] text-[#3E436D]">Lowest</p>
                                                <p className="font-medium text-1xl">
                                                    50-2{" "}
                                                    <span className="text-[13px] text-[#3E436D]">by AUS</span>
                                                </p>
                                            </div>
                                            <div className="flex flex-col items-end space-y-1">
                                                <p className="text-[13px] text-[#3E436D]">AUS vs IND</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-lg bg-[#ffffff] my-4 md:hidden">
                                    <div className="p-4">
                                        <div className="flex space-x-2">
                                            <div className="border-l-[3px] border-[#229ED3] h-[19px]" />
                                            <h3 className="text-1xl font-semibold mb-3">
                                                Pace vs Spin on Venue{" "}
                                                <span className="text-[#909090]">
                                                    {" "}
                                                    &nbsp;(Last 10 matches){" "}
                                                </span>
                                            </h3>
                                        </div>
                                        <div className="w-full">
                                            <div className="bg-[#B7132B] h-[4px] mr-2 mb-2">
                                                <div
                                                    className="bg-[#13b76dbd] h-[4px]"
                                                    style={{ width: "40%" }}
                                                />
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <p className=" text-gray-500">
                                                    {" "}
                                                    Pace:{" "}
                                                    <span className="text-[#13b76dbd] text-[15px] font-semibold">
                                                        40%{" "}
                                                    </span>
                                                </p>
                                                <p className="text-gray-500 ">
                                                    {" "}
                                                    Spin:{" "}
                                                    <span className="text-[#B7132B] text-[15px] font-semibold">
                                                        60%{" "}
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-lg bg-[#ffffff] my-4 p-4">
                                    <h3 className="text-1xl font-semibold mb-2 pl-[7px] border-l-[3px] border-[#229ED3]">
                                        Umpires
                                    </h3>
                                    <div className="border-t-[1px] border-[#E4E9F0]" />
                                    <div className="py-2 flex justify-between items-center">
                                        <div className="">
                                            <p className="mx-2 font-medium">On-field Umpire :</p>
                                        </div>
                                        <div className="">
                                            <p className="mx-2 text-[#586577] font-medium ">
                                                Claire Polosak, Lauren Agenbag
                                            </p>
                                        </div>
                                    </div>
                                    <div className="border-t-[1px] border-[#E4E9F0]" />
                                    <div className="py-2 flex justify-between items-center">
                                        <div className="">
                                            <p className="mx-2 font-medium">Third Umpire :</p>
                                        </div>
                                        <div className="">
                                            <p className="mx-2 text-[#586577] font-medium ">Sue Redfern</p>
                                        </div>
                                    </div>
                                    <div className="border-t-[1px] border-[#E4E9F0]" />
                                    <div className="py-2 pb-0 flex justify-between items-center">
                                        <div className="">
                                            <p className="mx-2 font-medium">Referee :</p>
                                        </div>
                                        <div className="">
                                            <p className="mx-2 text-[#586577] font-medium ">GS Lakshmi</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="lg:col-span-4 md:col-span-5">
                                <div className="rounded-lg bg-[#ffffff]">
                                    <div className="p-4 cust-box-click-container">
                                        <h3 className="text-1xl font-semibold pl-[7px] mb-3 border-l-[3px] border-[#229ED3]">
                                            Playing XI
                                        </h3>
                                        <div className="border-t-[1px] border-[#E4E9F0]" />
                                        <div className="flex items-center justify-around py-4">
                                            <button
                                                className="cust-box-click-button  font-medium px-5 py-1 rounded-full bg-[#081736] text-white"
                                            >
                                                <span>India</span>
                                            </button>
                                            <Link href="#">
                                                <button
                                                    className="cust-box-click-button bg-[#ffffff] font-medium text-[#6A7586] px-5 py-1 rounded-full">
                                                    <span>Bangladesh</span>
                                                </button>
                                            </Link>
                                        </div>
                                        <div className="border-t-[1px] border-[#E4E9F0]" />
                                        <div className="cust-box-click-content cust-box-click-india mt-4">
                                            <div>
                                                <Link href="/player/playername/overview">
                                                    <div className="flex items-center space-x-3 py-3 border-b-[1px] border-border-gray-700">
                                                        <div>
                                                            <Image src="/assets/img/player/1.png" width={40} height={40} alt="R sharma (c)" />
                                                        </div>
                                                        <div className="font-medium">
                                                            <h2 className="text-[15px]"> R sharma (c) </h2>
                                                            <p className="text-[#909090] font-normal">Batter</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link href="/player/playername/overview">
                                                    <div className="flex items-center space-x-3 py-3 border-b-[1px] border-border-gray-700">
                                                        <div>
                                                            <Image src="/assets/img/player/1.png" width={40} height={40} alt="S Gill" />
                                                        </div>
                                                        <div className="font-medium">
                                                            <h2 className="text-[15px]"> S Gill</h2>
                                                            <p className="text-[#909090] font-normal">Batter</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link href="/player/playername/overview">
                                                    <div className="flex items-center space-x-3 py-3 border-b-[1px] border-border-gray-700">
                                                        <div>
                                                            <Image src="/assets/img/player/1.png" width={40} height={40} alt="L Rahul" />
                                                        </div>
                                                        <div className="font-medium">
                                                            <h2 className="text-[15px]"> L Rahul </h2>
                                                            <p className="text-[#909090] font-normal">Batter</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link href="/player/playername/overview">
                                                    <div className="flex items-center space-x-3 py-3 border-b-[1px] border-border-gray-700">
                                                        <div>
                                                            <Image src="/assets/img/player/1.png" width={40} height={40} alt="R Jadeja" />
                                                        </div>
                                                        <div className="font-medium">
                                                            <h2 className="text-[15px]"> R Jadeja </h2>
                                                            <p className="text-[#909090] font-normal">All Rounder </p>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link href="/player/playername/overview">
                                                    <div className="flex items-center space-x-3 py-3 border-b-[1px] border-border-gray-700">
                                                        <div>
                                                            <Image src="/assets/img/player/1.png" width={40} height={40} alt="J Bumrah" />
                                                        </div>
                                                        <div className="font-medium">
                                                            <h2 className="text-[15px]"> J Bumrah </h2>
                                                            <p className="text-[#909090] font-normal">Bowler</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link href="/player/playername/overview">
                                                    <div className="flex items-center space-x-3 py-3 border-b-[1px] border-border-gray-700">
                                                        <div>
                                                            <Image src="/assets/img/player/1.png" width={40} height={40} alt="A Deep" />
                                                        </div>
                                                        <div className="font-medium">
                                                            <h2 className="text-[15px]"> A Deep </h2>
                                                            <p className="text-[#909090] font-normal">Bowler </p>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link href="/player/playername/overview">
                                                    <div className="flex items-center space-x-3 py-3 border-b-[1px] border-border-gray-700">
                                                        <div>
                                                            <Image src="/assets/img/player/1.png" width={40} height={40} alt="Y Jaiswal" />
                                                        </div>
                                                        <div className="font-medium">
                                                            <h2 className="text-[15px]"> Y Jaiswal </h2>
                                                            <p className="text-[#909090] font-normal">Batter</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link href="/player/playername/overview">
                                                    <div className="flex items-center space-x-3 py-3 border-b-[1px] border-border-gray-700">
                                                        <div>
                                                            <Image src="/assets/img/player/1.png" width={40} height={40} alt="V Kholi" />
                                                        </div>
                                                        <div className="font-medium">
                                                            <h2 className="text-[15px]"> V Kholi </h2>
                                                            <p className="text-[#909090] font-normal">Batter</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link href="/player/playername/overview">
                                                    <div className="flex items-center space-x-3 py-3 border-b-[1px] border-border-gray-700">
                                                        <div>
                                                            <Image src="/assets/img/player/1.png" width={40} height={40} alt="M Siraj" />
                                                        </div>
                                                        <div className="font-medium">
                                                            <h2 className="text-[15px]"> M Siraj </h2>
                                                            <p className="text-[#909090] font-normal">Bowler</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link href="/player/playername/overview">
                                                    <div className="flex items-center space-x-3 py-3 border-b-[1px] border-border-gray-700">
                                                        <div>
                                                            <Image src="/assets/img/player/1.png" width={40} height={40} alt="R Pant (WK)" />
                                                        </div>
                                                        <div className="font-medium">
                                                            <h2 className="text-[15px]"> R Pant (WK) </h2>
                                                            <p className="text-[#909090] font-normal">Batter</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link href="/player/playername/overview">
                                                    <div className="flex items-center space-x-3 py-3 pb-0">
                                                        <div>
                                                            <Image src="/assets/img/player/1.png" width={40} height={40} alt="R Ashwin" />
                                                        </div>
                                                        <div className="font-medium">
                                                            <h2 className="text-[15px]"> R Ashwin </h2>
                                                            <p className="text-[#909090] font-normal">All Rounder </p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="cust-box-click-content cust-box-click-bangladesh mt-4 hidden">
                                            <p>View Content</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-lg bg-[#ffffff] my-4 hidden md:block">
                                    <div className="p-4">
                                        <div className="flex space-x-2">
                                            <div className="border-l-[3px] border-[#229ED3] h-[19px]" />
                                            <h3 className="text-1xl font-semibold mb-3">
                                                Pace vs Spin on Venue{" "}
                                                <span className="text-[#909090]">
                                                    {" "}
                                                    &nbsp;(Last 10 matches){" "}
                                                </span>
                                            </h3>
                                        </div>
                                        <div className="w-full">
                                            <div className="bg-[#B7132B] h-[4px] mr-2 mb-2">
                                                <div
                                                    className="bg-[#13b76dbd] h-[4px]"
                                                    style={{ width: "40%" }}
                                                />
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <p className=" text-gray-500">
                                                    {" "}
                                                    Pace:{" "}
                                                    <span className="text-[#13b76dbd] text-[15px] font-semibold">
                                                        40%{" "}
                                                    </span>
                                                </p>
                                                <p className="text-gray-500 ">
                                                    {" "}
                                                    Spin:{" "}
                                                    <span className="text-[#B7132B] text-[15px] font-semibold">
                                                        60%{" "}
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </>

    )
}
