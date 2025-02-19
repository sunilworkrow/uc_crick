"use client"

import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';

export default function Stats() {

    const [statsTab, setStatsTab] = useState('cust-box-click-t20');

    const handleStatsTabClick = (tab: React.SetStateAction<string>) => {
        setStatsTab(tab);
    };

    return (

        <section className="lg:w-[1000px] md:mx-auto my-5 mx-2">
            <div className="">
                <div id="tabs" className="my-4">
                    <div className="flex text-1xl space-x-8 p-2 bg-[#ffffff] rounded-lg overflow-auto">
                        <Link href="/player/playername/overview">
                            <button className="font-medium py-2 px-3 whitespace-nowrap"
                            >
                                Overview
                            </button>
                        </Link>
                        <Link href="/player/playername/stats">
                            <button className="font-medium py-2 px-3 whitespace-nowrap bg-[#1A80F8] text-white rounded-md"
                            >
                                Stats
                            </button>
                        </Link>

                        <Link href="/player/playername/news">
                            <button
                                className="font-medium py-2 px-3 whitespace-nowrap"
                            >
                                News
                            </button>
                        </Link>
                        <Link href="/player/playername/photos">
                            <button className="font-medium py-2 px-3 whitespace-nowrap"
                            >
                                Photos
                            </button>
                        </Link>
                    </div>
                </div>

                <div id="tab-content">
                    <div id="stats">
                        <div className="cust-box-click-container">
                            <h2 className="text-[20px] font-semibold">Suryakumar Yadav</h2>
                            <div className="md:flex justify-between items-center mb-3">
                                <h3 className=" font-medium pl-[7px] border-l-[3px] border-[#229ED3]">
                                    Vs Team stats
                                </h3>
                                <div className="flex gap-3 items-center md:justify-center md:mt-0 mt-4">
                                    <button
                                        onClick={() => handleStatsTabClick('cust-box-click-t20')}
                                        className={`cust-box-click-button font-medium px-5 py-1 rounded-full ${statsTab === 'cust-box-click-t20' ? 'bg-[#081736] text-white' : 'bg-[#ffffff] text-[#6A7586]'}`}
                                    >
                                        <span>T20</span>
                                    </button>
                                    <button
                                        onClick={() => handleStatsTabClick('cust-box-click-odi')}
                                        className={`cust-box-click-button font-medium px-5 py-1 rounded-full ${statsTab === 'cust-box-click-odi' ? 'bg-[#081736] text-white' : 'bg-[#ffffff] text-[#6A7586]'}`}
                                    >
                                        <span>ODI Venue</span>
                                    </button>
                                    <button
                                        onClick={() => handleStatsTabClick('cust-box-click-test')}
                                        className={`cust-box-click-button font-medium px-5 py-1 rounded-full ${statsTab === 'cust-box-click-test' ? 'bg-[#081736] text-white' : 'bg-[#ffffff] text-[#6A7586]'}`}
                                    >
                                        <span>TEST</span>
                                    </button>
                                </div>
                            </div>
                            <div className={`cust-box-click-content cust-box-click-t20 ${statsTab === 'cust-box-click-t20' ? "" : "hidden"}`}>
                                <div>
                                    <div className="rounded-lg bg-[#ffffff] mb-4 p-4">
                                        <h3 className="text-1xl font-semibold mb-3 pl-[7px] border-l-[3px] border-[#229ED3]">
                                            Batting Performance
                                        </h3>
                                        <div>
                                            <div className="overflow-x-auto">
                                                <table className="w-full text-sm text-left text-gray-500 whitespace-nowrap">
                                                    <thead className="bg-blue-50 text-gray-700 ">
                                                        <tr>
                                                            <th className="px-4 py-3 font-medium w-[10px]" />
                                                            <th className="px-4 py-3 font-medium">Batter</th>
                                                            <th className="px-3 py-3 font-medium">Inns</th>
                                                            <th className="px-3 py-3 font-medium">No</th>
                                                            <th className="px-3 py-3 font-medium">Runs</th>
                                                            <th className="px-3 py-3 font-medium">BF</th>
                                                            <th className="px-3 py-3 font-medium">100s</th>
                                                            <th className="px-3 py-3 font-medium">50s</th>
                                                            <th className="px-3 py-3 font-medium">4s</th>
                                                            <th className="px-3 py-3 font-medium">Avg</th>
                                                            <th className="px-3 py-3 font-medium">SR</th>
                                                            <th className="px-3 py-3 font-medium">H</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-gray-200">
                                                        <tr>
                                                            <td className="px-3 py-3 w-[10px] font-medium">VS</td>
                                                            <td className="px-3 py-3">
                                                                <Link href="/team/india/test">
                                                                    <div className="flex space-x-1 w-[114px]">
                                                                        <div className="flex items-center space-x-1 flex-col">
                                                                            <Image
                                                                                src="/assets/img/flag/2.png"
                                                                                className="h-[20px] rounded-full"
                                                                                width={20} height={20} alt="wiw"
                                                                            />
                                                                        </div>
                                                                        <div className="">
                                                                            <p className="text-[14px] font-medium">
                                                                                Australia
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            </td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">123</td>
                                                            <td className="px-3 py-3">45.50</td>
                                                            <td className="px-3 py-3">9</td>
                                                            <td className="px-3 py-3">0</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="px-3 py-3 w-[10px] font-medium">VS</td>
                                                            <td className="px-3 py-3">
                                                                <Link href="/team/india/test">
                                                                    <div className="flex space-x-1 w-[114px]">
                                                                        <div className="flex items-center space-x-1 flex-col">
                                                                            <Image
                                                                                src="/assets/img/flag/12.png"
                                                                                className="h-[20px] rounded-full"
                                                                                width={20} height={20} alt="wiw"
                                                                            />
                                                                        </div>
                                                                        <div className="">
                                                                            <p className="text-[14px] font-medium">
                                                                                New Zealand
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            </td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">123</td>
                                                            <td className="px-3 py-3">45.50</td>
                                                            <td className="px-3 py-3">9</td>
                                                            <td className="px-3 py-3">0</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="px-3 py-3 w-[10px] font-medium">VS</td>
                                                            <td className="px-3 py-3">
                                                                <Link href="/team/india/test">
                                                                    <div className="flex space-x-1 w-[114px]">
                                                                        <div className="flex items-center space-x-1 flex-col">
                                                                            <Image
                                                                                src="/assets/img/flag/6.png"
                                                                                className="h-[20px] rounded-full"
                                                                                width={20} height={20} alt="wiw"
                                                                            />
                                                                        </div>
                                                                        <div className="">
                                                                            <p className="text-[14px] font-medium">
                                                                                Ireland
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            </td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">123</td>
                                                            <td className="px-3 py-3">45.50</td>
                                                            <td className="px-3 py-3">9</td>
                                                            <td className="px-3 py-3">0</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="px-3 py-3 w-[10px] font-medium">VS</td>
                                                            <td className="px-3 py-3">
                                                                <Link href="/team/india/test">
                                                                    <div className="flex space-x-1 w-[114px]">
                                                                        <div className="flex items-center space-x-1 flex-col">
                                                                            <Image
                                                                                src="/assets/img/flag/16.png"
                                                                                className="h-[20px] rounded-full"
                                                                                width={20} height={20} alt="wiw"
                                                                            />
                                                                        </div>
                                                                        <div className="">
                                                                            <p className="text-[14px] font-medium">
                                                                                Pakistan
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            </td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">123</td>
                                                            <td className="px-3 py-3">45.50</td>
                                                            <td className="px-3 py-3">9</td>
                                                            <td className="px-3 py-3">0</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="px-3 py-3 w-[10px] font-medium">VS</td>
                                                            <td className="px-3 py-3">
                                                                <Link href="/team/india/test">
                                                                    <div className="flex space-x-1 w-[114px]">
                                                                        <div className="flex items-center space-x-1 flex-col">
                                                                            <Image
                                                                                src="/assets/img/flag/b-2.png"
                                                                                className="h-[20px] rounded-full"
                                                                                width={20} height={20} alt="wiw"
                                                                            />
                                                                        </div>
                                                                        <div className="">
                                                                            <p className="text-[14px] font-medium">
                                                                                West Indies
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            </td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">123</td>
                                                            <td className="px-3 py-3">45.50</td>
                                                            <td className="px-3 py-3">9</td>
                                                            <td className="px-3 py-3">0</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="px-3 py-3 w-[10px] font-medium">VS</td>
                                                            <td className="px-3 py-3">
                                                                <Link href="/team/india/test">
                                                                    <div className="flex space-x-1 w-[114px]">
                                                                        <div className="flex items-center space-x-1 flex-col">
                                                                            <Image
                                                                                src="/assets/img/flag/11.png"
                                                                                className="h-[20px] rounded-full"
                                                                                width={20} height={20} alt="wiw"
                                                                            />
                                                                        </div>
                                                                        <div className="">
                                                                            <p className="text-[14px] font-medium">
                                                                                South Africa
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            </td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">123</td>
                                                            <td className="px-3 py-3">45.50</td>
                                                            <td className="px-3 py-3">9</td>
                                                            <td className="px-3 py-3">0</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="px-3 py-3 w-[10px] font-medium">VS</td>
                                                            <td className="px-3 py-3">
                                                                <Link href="/team/india/test">
                                                                    <div className="flex space-x-1 w-[114px]">
                                                                        <div className="flex items-center space-x-1 flex-col">
                                                                            <Image
                                                                                src="/assets/img/flag/13.png"
                                                                                className="h-[20px] rounded-full"
                                                                                width={20} height={20} alt="wiw"
                                                                            />
                                                                        </div>
                                                                        <div className="">
                                                                            <p className="text-[14px] font-medium">
                                                                                Sri Lanka
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            </td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">123</td>
                                                            <td className="px-3 py-3">45.50</td>
                                                            <td className="px-3 py-3">9</td>
                                                            <td className="px-3 py-3">0</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="px-3 py-3 w-[10px] font-medium">VS</td>
                                                            <td className="px-3 py-3">
                                                                <Link href="/team/india/test">
                                                                    <div className="flex space-x-1 w-[114px]">
                                                                        <div className="flex items-center space-x-1 flex-col">
                                                                            <Image
                                                                                src="/assets/img/flag/15.png"
                                                                                className="h-[20px] rounded-full"
                                                                                width={20} height={20} alt="wiw"
                                                                            />
                                                                        </div>
                                                                        <div className="">
                                                                            <p className="text-[14px] font-medium">
                                                                                Bangladesh
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            </td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">123</td>
                                                            <td className="px-3 py-3">45.50</td>
                                                            <td className="px-3 py-3">9</td>
                                                            <td className="px-3 py-3">0</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="px-3 py-3 w-[10px] font-medium">VS</td>
                                                            <td className="px-3 py-3">
                                                                <Link href="/team/india/test">
                                                                    <div className="flex space-x-1 w-[114px]">
                                                                        <div className="flex items-center space-x-1 flex-col">
                                                                            <Image
                                                                                src="/assets/img/flag/10.png"
                                                                                className="h-[20px] rounded-full"
                                                                                width={20} height={20} alt="wiw"
                                                                            />
                                                                        </div>
                                                                        <div className="">
                                                                            <p className="text-[14px] font-medium">
                                                                                England
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            </td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">123</td>
                                                            <td className="px-3 py-3">45.50</td>
                                                            <td className="px-3 py-3">9</td>
                                                            <td className="px-3 py-3">0</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="px-3 py-3 w-[10px] font-medium">VS</td>
                                                            <td className="px-3 py-3">
                                                                <Link href="/team/india/test">
                                                                    <div className="flex space-x-1 w-[114px]">
                                                                        <div className="flex items-center space-x-1 flex-col">
                                                                            <Image
                                                                                src="/assets/img/flag/9.png"
                                                                                className="h-[20px] rounded-full"
                                                                                width={20} height={20} alt="wiw"
                                                                            />
                                                                        </div>
                                                                        <div className="">
                                                                            <p className="text-[14px] font-medium">
                                                                                Zimbabwe
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            </td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">123</td>
                                                            <td className="px-3 py-3">45.50</td>
                                                            <td className="px-3 py-3">9</td>
                                                            <td className="px-3 py-3">0</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="px-3 py-3 w-[10px] font-medium">VS</td>
                                                            <td className="px-3 py-3">
                                                                <Link href="/team/india/test">
                                                                    <div className="flex space-x-1 w-[114px]">
                                                                        <div className="flex items-center space-x-1 flex-col">
                                                                            <Image
                                                                                src="/assets/img/flag/1.png"
                                                                                className="h-[20px] rounded-full"
                                                                                width={20} height={20} alt="wiw"
                                                                            />
                                                                        </div>
                                                                        <div className="">
                                                                            <p className="text-[14px] font-medium">
                                                                                Afghanistan
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            </td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">123</td>
                                                            <td className="px-3 py-3">45.50</td>
                                                            <td className="px-3 py-3">9</td>
                                                            <td className="px-3 py-3">0</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                        </tr>
                                                        <tr className="bg-gray-100 font-semibold">
                                                            <td className="px-3 py-3 w-[10px] font-medium" />
                                                            <td className="px-3 py-3">
                                                                <Link href="/team/india/test">
                                                                    <div className="flex space-x-1 w-[114px]">
                                                                        Total
                                                                    </div>
                                                                </Link>
                                                            </td>
                                                            <td className="px-4 py-2">68</td>
                                                            <td className="px-4 py-2">11</td>
                                                            <td className="px-4 py-2">2432</td>
                                                            <td className="px-4 py-2">1444</td>
                                                            <td className="px-4 py-2">4</td>
                                                            <td className="px-4 py-2">20</td>
                                                            <td className="px-4 py-2">220</td>
                                                            <td className="px-4 py-2">163</td>
                                                            <td className="px-4 py-2">168.36</td>
                                                            <td className="px-4 py-2">42.66</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="rounded-lg bg-[#ffffff] mb-4 p-4">
                                        <h3 className="text-1xl font-semibold mb-3 pl-[7px] border-l-[3px] border-[#229ED3]">
                                            Bowling Performance
                                        </h3>
                                        <div>
                                            <div className="overflow-x-auto">
                                                <table className="w-full text-sm text-left text-gray-500 whitespace-nowrap">
                                                    <thead className="bg-blue-50 text-gray-700 ">
                                                        <tr>
                                                            <th className="px-4 py-3 font-medium w-[10px]" />
                                                            <th className="px-4 py-3 font-medium" />
                                                            <th className="px-3 py-3 font-medium">Inns</th>
                                                            <th className="px-3 py-3 font-medium">No</th>
                                                            <th className="px-3 py-3 font-medium">Runs</th>
                                                            <th className="px-3 py-3 font-medium">BF</th>
                                                            <th className="px-3 py-3 font-medium">100s</th>
                                                            <th className="px-3 py-3 font-medium">50s</th>
                                                            <th className="px-3 py-3 font-medium">4s</th>
                                                            <th className="px-3 py-3 font-medium">Avg</th>
                                                            <th className="px-3 py-3 font-medium">SR</th>
                                                            <th className="px-3 py-3 font-medium">H</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-gray-200">
                                                        <tr>
                                                            <td className="px-3 py-3 w-[10px] font-medium">VS</td>
                                                            <td className="px-3 py-3">
                                                                <Link href="/team/india/test">
                                                                    <div className="flex space-x-1 w-[114px]">
                                                                        <div className="flex items-center space-x-1 flex-col">
                                                                            <Image
                                                                                src="/assets/img/flag/1.png"
                                                                                className="h-[20px] rounded-full"
                                                                                width={20} height={20} alt="wiw"
                                                                            />
                                                                        </div>
                                                                        <div className="">
                                                                            <p className="text-[14px] font-medium">
                                                                                Afghanistan
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            </td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">123</td>
                                                            <td className="px-3 py-3">45.50</td>
                                                            <td className="px-3 py-3">9</td>
                                                            <td className="px-3 py-3">0</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                        </tr>
                                                        <tr className="bg-gray-100 font-semibold">
                                                            <td className="px-3 py-3 w-[10px] font-medium" />
                                                            <td className="px-3 py-3">
                                                                <Link href="#">
                                                                    <div className="flex space-x-1 w-[114px]">
                                                                        Total
                                                                    </div>
                                                                </Link>
                                                            </td>
                                                            <td className="px-4 py-2">68</td>
                                                            <td className="px-4 py-2">11</td>
                                                            <td className="px-4 py-2">2432</td>
                                                            <td className="px-4 py-2">1444</td>
                                                            <td className="px-4 py-2">4</td>
                                                            <td className="px-4 py-2">20</td>
                                                            <td className="px-4 py-2">220</td>
                                                            <td className="px-4 py-2">163</td>
                                                            <td className="px-4 py-2">168.36</td>
                                                            <td className="px-4 py-2">42.66</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="text-1xl font-semibold mb-3 pl-[7px] border-l-[3px] border-[#229ED3]">
                                    Tournament Stats
                                </h3>
                                <div>
                                    <div className="rounded-lg bg-[#ffffff] mb-4 p-4">
                                        <h3 className="text-1xl font-semibold mb-3 pl-[7px] border-l-[3px] border-[#229ED3]">
                                            Batting Statistics
                                        </h3>
                                        <div>
                                            <div className="overflow-x-auto">
                                                <table className="w-full text-sm text-left text-gray-500 whitespace-nowrap">
                                                    <thead className="bg-blue-50 text-gray-700 ">
                                                        <tr>
                                                            <th className="px-4 py-3 font-medium">Tournament</th>
                                                            <th className="px-3 py-3 font-medium">Mat</th>
                                                            <th className="px-3 py-3 font-medium">Inns</th>
                                                            <th className="px-3 py-3 font-medium">No</th>
                                                            <th className="px-3 py-3 font-medium">Runs</th>
                                                            <th className="px-3 py-3 font-medium">BF</th>
                                                            <th className="px-3 py-3 font-medium">100s</th>
                                                            <th className="px-3 py-3 font-medium">4s</th>
                                                            <th className="px-3 py-3 font-medium">6s</th>
                                                            <th className="px-3 py-3 font-medium">Avg</th>
                                                            <th className="px-3 py-3 font-medium">SR</th>
                                                            <th className="px-3 py-3 font-medium">H</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-gray-200">
                                                        <tr>
                                                            <td className="md:px-2 py-3 text-[#217AF7]">
                                                                <a href="#" style={{ cursor: "pointer" }}>
                                                                    Indian Premier League
                                                                </a>
                                                            </td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">123</td>
                                                            <td className="px-3 py-3">45.50</td>
                                                            <td className="px-3 py-3">9</td>
                                                            <td className="px-3 py-3">0</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="md:px-2 py-3 text-[#217AF7]">
                                                                <a href="#" style={{ cursor: "pointer" }}>
                                                                    Ranji Trophy
                                                                </a>
                                                            </td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">123</td>
                                                            <td className="px-3 py-3">45.50</td>
                                                            <td className="px-3 py-3">9</td>
                                                            <td className="px-3 py-3">0</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="md:px-2 py-3 text-[#217AF7]">
                                                                <a href="#" style={{ cursor: "pointer" }}>
                                                                    ICC Mens T20 World Cup
                                                                </a>
                                                            </td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">123</td>
                                                            <td className="px-3 py-3">45.50</td>
                                                            <td className="px-3 py-3">9</td>
                                                            <td className="px-3 py-3">0</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="md:px-2 py-3 text-[#217AF7]">
                                                                <a href="#" style={{ cursor: "pointer" }}>
                                                                    Vijay Hazare Trophy
                                                                </a>
                                                            </td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">123</td>
                                                            <td className="px-3 py-3">45.50</td>
                                                            <td className="px-3 py-3">9</td>
                                                            <td className="px-3 py-3">0</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="md:px-2 py-3 text-[#217AF7]">
                                                                <a href="#" style={{ cursor: "pointer" }}>
                                                                    Syed Mushtaq Ali Trophy
                                                                </a>
                                                            </td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">123</td>
                                                            <td className="px-3 py-3">45.50</td>
                                                            <td className="px-3 py-3">9</td>
                                                            <td className="px-3 py-3">0</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="md:px-2 py-3 text-[#217AF7]">
                                                                <a href="#" style={{ cursor: "pointer" }}>
                                                                    Asia Cup
                                                                </a>
                                                            </td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">123</td>
                                                            <td className="px-3 py-3">45.50</td>
                                                            <td className="px-3 py-3">9</td>
                                                            <td className="px-3 py-3">0</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="md:px-2 py-3 text-[#217AF7]">
                                                                <a href="#" style={{ cursor: "pointer" }}>
                                                                    ICC Cricket World Cup
                                                                </a>
                                                            </td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">123</td>
                                                            <td className="px-3 py-3">45.50</td>
                                                            <td className="px-3 py-3">9</td>
                                                            <td className="px-3 py-3">0</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="md:px-2 py-3 text-[#217AF7]">
                                                                <a href="#" style={{ cursor: "pointer" }}>
                                                                    Deodhar Trophy
                                                                </a>
                                                            </td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">123</td>
                                                            <td className="px-3 py-3">45.50</td>
                                                            <td className="px-3 py-3">9</td>
                                                            <td className="px-3 py-3">0</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="md:px-2 py-3 text-[#217AF7]">
                                                                <a href="#" style={{ cursor: "pointer" }}>
                                                                    Asia Cup T201
                                                                </a>
                                                            </td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">123</td>
                                                            <td className="px-3 py-3">45.50</td>
                                                            <td className="px-3 py-3">9</td>
                                                            <td className="px-3 py-3">0</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="rounded-lg bg-[#ffffff] mb-4 p-4">
                                        <h3 className="text-1xl font-semibold mb-3 pl-[7px] border-l-[3px] border-[#229ED3]">
                                            Bowling Statistics
                                        </h3>
                                        <div>
                                            <div className="overflow-x-auto">
                                                <table className="w-full text-sm text-left text-gray-500 whitespace-nowrap">
                                                    <thead className="bg-blue-50 text-gray-700 ">
                                                        <tr>
                                                            <th className="px-4 py-3 font-medium">Tournament</th>
                                                            <th className="px-3 py-3 font-medium">Mat</th>
                                                            <th className="px-3 py-3 font-medium">Inns</th>
                                                            <th className="px-3 py-3 font-medium">R</th>
                                                            <th className="px-3 py-3 font-medium">B</th>
                                                            <th className="px-3 py-3 font-medium">W</th>
                                                            <th className="px-3 py-3 font-medium">ER</th>
                                                            <th className="px-3 py-3 font-medium">Dots</th>
                                                            <th className="px-3 py-3 font-medium">Mdns</th>
                                                            <th className="px-3 py-3 font-medium">Avg</th>
                                                            <th className="px-3 py-3 font-medium">SR</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-gray-200">
                                                        <tr>
                                                            <td className="md:px-2 py-3 text-[#217AF7]">
                                                                <a href="#" style={{ cursor: "pointer" }}>
                                                                    Indian Premier League
                                                                </a>
                                                            </td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">123</td>
                                                            <td className="px-3 py-3">45.50</td>
                                                            <td className="px-3 py-3">9</td>
                                                            <td className="px-3 py-3">0</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="md:px-2 py-3 text-[#217AF7]">
                                                                <a href="#" style={{ cursor: "pointer" }}>
                                                                    Ranji Trophy
                                                                </a>
                                                            </td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">123</td>
                                                            <td className="px-3 py-3">45.50</td>
                                                            <td className="px-3 py-3">9</td>
                                                            <td className="px-3 py-3">0</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="md:px-2 py-3 text-[#217AF7]">
                                                                <a href="#" style={{ cursor: "pointer" }}>
                                                                    ICC Mens T20 World Cup
                                                                </a>
                                                            </td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">123</td>
                                                            <td className="px-3 py-3">45.50</td>
                                                            <td className="px-3 py-3">9</td>
                                                            <td className="px-3 py-3">0</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="md:px-2 py-3 text-[#217AF7]">
                                                                <a href="#" style={{ cursor: "pointer" }}>
                                                                    Vijay Hazare Trophy
                                                                </a>
                                                            </td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">123</td>
                                                            <td className="px-3 py-3">45.50</td>
                                                            <td className="px-3 py-3">9</td>
                                                            <td className="px-3 py-3">0</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="md:px-2 py-3 text-[#217AF7]">
                                                                <a href="#" style={{ cursor: "pointer" }}>
                                                                    Syed Mushtaq Ali Trophy
                                                                </a>
                                                            </td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">123</td>
                                                            <td className="px-3 py-3">45.50</td>
                                                            <td className="px-3 py-3">9</td>
                                                            <td className="px-3 py-3">0</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="md:px-2 py-3 text-[#217AF7]">
                                                                <a href="#" style={{ cursor: "pointer" }}>
                                                                    Asia Cup
                                                                </a>
                                                            </td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">123</td>
                                                            <td className="px-3 py-3">45.50</td>
                                                            <td className="px-3 py-3">9</td>
                                                            <td className="px-3 py-3">0</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="md:px-2 py-3 text-[#217AF7]">
                                                                <a href="#" style={{ cursor: "pointer" }}>
                                                                    ICC Cricket World Cup
                                                                </a>
                                                            </td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">123</td>
                                                            <td className="px-3 py-3">45.50</td>
                                                            <td className="px-3 py-3">9</td>
                                                            <td className="px-3 py-3">0</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="md:px-2 py-3 text-[#217AF7]">
                                                                <a href="#" style={{ cursor: "pointer" }}>
                                                                    Deodhar Trophy
                                                                </a>
                                                            </td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">123</td>
                                                            <td className="px-3 py-3">45.50</td>
                                                            <td className="px-3 py-3">9</td>
                                                            <td className="px-3 py-3">0</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="md:px-2 py-3 text-[#217AF7]">
                                                                <a href="#" style={{ cursor: "pointer" }}>
                                                                    Asia Cup T201
                                                                </a>
                                                            </td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">123</td>
                                                            <td className="px-3 py-3">45.50</td>
                                                            <td className="px-3 py-3">9</td>
                                                            <td className="px-3 py-3">0</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="rounded-lg bg-[#ffffff] mb-4 p-4">
                                        <h3 className="text-1xl font-semibold mb-3 pl-[7px] border-l-[3px] border-[#229ED3]">
                                            Most Recent Matches
                                        </h3>
                                        <div>
                                            <div className="overflow-x-auto">
                                                <table className="w-full text-sm text-left text-gray-500 whitespace-nowrap">
                                                    <thead className="bg-blue-50 text-gray-700 ">
                                                        <tr>
                                                            <th className="px-4 py-3 font-medium">Match</th>
                                                            <th className="px-3 py-3 font-medium">Runs</th>
                                                            <th className="px-3 py-3 font-medium">BF</th>
                                                            <th className="px-3 py-3 font-medium">4s</th>
                                                            <th className="px-3 py-3 font-medium">6s</th>
                                                            <th className="px-3 py-3 font-medium">SR</th>
                                                            <th className="px-3 py-3 font-medium">O</th>
                                                            <th className="px-3 py-3 font-medium">R</th>
                                                            <th className="px-3 py-3 font-medium">W</th>
                                                            <th className="px-3 py-3 font-medium">ER</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-gray-200">
                                                        <tr>
                                                            <td className="md:px-2 py-3 text-[#217AF7]">
                                                                <a href="#" style={{ cursor: "pointer" }}>
                                                                    Indian Premier League
                                                                </a>
                                                            </td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">123</td>
                                                            <td className="px-3 py-3">45.50</td>
                                                            <td className="px-3 py-3">9</td>
                                                            <td className="px-3 py-3">0</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="md:px-2 py-3 text-[#217AF7]">
                                                                <a href="#" style={{ cursor: "pointer" }}>
                                                                    Ranji Trophy
                                                                </a>
                                                            </td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">123</td>
                                                            <td className="px-3 py-3">45.50</td>
                                                            <td className="px-3 py-3">9</td>
                                                            <td className="px-3 py-3">0</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="md:px-2 py-3 text-[#217AF7]">
                                                                <a href="#" style={{ cursor: "pointer" }}>
                                                                    ICC Mens T20 World Cup
                                                                </a>
                                                            </td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">123</td>
                                                            <td className="px-3 py-3">45.50</td>
                                                            <td className="px-3 py-3">9</td>
                                                            <td className="px-3 py-3">0</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="md:px-2 py-3 text-[#217AF7]">
                                                                <a href="#" style={{ cursor: "pointer" }}>
                                                                    Vijay Hazare Trophy
                                                                </a>
                                                            </td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">123</td>
                                                            <td className="px-3 py-3">45.50</td>
                                                            <td className="px-3 py-3">9</td>
                                                            <td className="px-3 py-3">0</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="md:px-2 py-3 text-[#217AF7]">
                                                                <a href="#" style={{ cursor: "pointer" }}>
                                                                    Syed Mushtaq Ali Trophy
                                                                </a>
                                                            </td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">123</td>
                                                            <td className="px-3 py-3">45.50</td>
                                                            <td className="px-3 py-3">9</td>
                                                            <td className="px-3 py-3">0</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="md:px-2 py-3 text-[#217AF7]">
                                                                <a href="#" style={{ cursor: "pointer" }}>
                                                                    Asia Cup
                                                                </a>
                                                            </td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">123</td>
                                                            <td className="px-3 py-3">45.50</td>
                                                            <td className="px-3 py-3">9</td>
                                                            <td className="px-3 py-3">0</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="md:px-2 py-3 text-[#217AF7]">
                                                                <a href="#" style={{ cursor: "pointer" }}>
                                                                    ICC Cricket World Cup
                                                                </a>
                                                            </td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">123</td>
                                                            <td className="px-3 py-3">45.50</td>
                                                            <td className="px-3 py-3">9</td>
                                                            <td className="px-3 py-3">0</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="md:px-2 py-3 text-[#217AF7]">
                                                                <a href="#" style={{ cursor: "pointer" }}>
                                                                    Deodhar Trophy
                                                                </a>
                                                            </td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">123</td>
                                                            <td className="px-3 py-3">45.50</td>
                                                            <td className="px-3 py-3">9</td>
                                                            <td className="px-3 py-3">0</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="md:px-2 py-3 text-[#217AF7]">
                                                                <a href="#" style={{ cursor: "pointer" }}>
                                                                    Asia Cup T201
                                                                </a>
                                                            </td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">5</td>
                                                            <td className="px-3 py-3">123</td>
                                                            <td className="px-3 py-3">45.50</td>
                                                            <td className="px-3 py-3">9</td>
                                                            <td className="px-3 py-3">0</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                            <td className="px-3 py-3">74.65</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`cust-box-click-content cust-box-click-odi ${statsTab === 'cust-box-click-odi' ? "" : "hidden"}`}>
                                ggggg
                            </div>
                            <div className={`cust-box-click-content cust-box-click-test ${statsTab === 'cust-box-click-test' ? "" : "hidden"}`}>
                                kkkkk
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
