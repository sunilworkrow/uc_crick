
import React from 'react'
import Image from "next/image";
import Link from 'next/link';

export default function Scorecard() {



  return (
    <div className="lg:w-[1000px] mx-auto md:mb-0 mb-4 px-2 lg:px-0">
    <div className="my-4">
      <div id="tabs" className="my-4">
        <div className="flex text-1xl space-x-8 p-2 bg-[#ffffff] rounded-lg overflow-auto">
          <Link href="/match/result/more-info">
            <button
              className="font-medium py-2 px-3 whitespace-nowrap "
            >
              More Info
            </button>
          </Link>
          <Link href="/match/result/live">
            <button
              className="font-medium py-2 px-3 whitespace-nowrap"
            >
              Live
            </button>
          </Link>
          <Link href="/match/result/scorecard">
            <button
              className="font-medium py-2 px-3 whitespace-nowrap bg-[#1A80F8] text-white rounded-md"
            >
              Scorecard
            </button>
          </Link>
          <Link href="/match/result/squad">
            <button
              className="font-medium py-2 px-3 whitespace-nowrap"
            >
              Squad
            </button>
          </Link>
          <Link href="/match/result/points-table">
            <button
              className="font-medium py-2 px-3 whitespace-nowrap"
            >
              Points Table
            </button>
          </Link>
          <Link href="/match/result/stats">
            <button
              className="font-medium py-2 px-3 whitespace-nowrap"
            >
              Stats
            </button>
          </Link>
        </div>
      </div>
    </div>
    <div id="tab-content">
      <div id="scorecard" className="tab-content cust-box-click-container">
        <div className="flex items-center gap-3 md:mb-4 mb-2 md:pb-0 pb-2 font-medium text-[14px] whitespace-nowrap overflow-auto">
          <button
             className="cust-box-click-button bg-[#081736] text-white font-medium  px-5 py-1 rounded-full"
          >
            <span>IND 1st Inning</span>
          </button>
          <button
             className="cust-box-click-button bg-[#ffffff] font-medium text-[#6A7586] px-5 py-1 rounded-full"
            >
            <span>BAN 1st Inning</span>
          </button>
          <button
             className="cust-box-click-button bg-[#ffffff] font-medium text-[#6A7586] px-5 py-1 rounded-full"
            >
            <span>IND 2nd Inning</span>
          </button>
          <button
             className="cust-box-click-button bg-[#ffffff] font-medium text-[#6A7586] px-5 py-1 rounded-full"
            >
            <span>BAN 2nd Inning</span>
          </button>
        </div>
        <div className="cust-box-click-content cust-box-click-ind1stinning mt-4">
          <div className="md:grid grid-cols-12 gap-4">
            <div className="lg:col-span-8 md:col-span-7">
              <div className="rounded-lg bg-[#ffffff] mb-4 p-4">
                <div className="flex justify-between items-center text-[16px]">
                  <div className="">
                    <p className="mx-2 font-semibold">Total Score</p>
                  </div>
                  <div className="">
                    <p className="mx-2 font-semibold ">
                      {" "}
                      172-2 <span className="text-[#586577]">(33.0)</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg bg-[#ffffff] mb-4 p-4">
                <h3 className="text-1xl font-semibold mb-3 pl-[7px] border-l-[3px] border-[#229ED3]">
                  Batting
                </h3>
                <div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-600 whitespace-nowrap">
                      <thead className="bg-gray-100">
                        <tr>
                          <th
                            scope="col"
                            className="md:px-4 px-2 py-2 font-medium text-gray-700"
                          >
                            Batter
                          </th>
                          <th
                            scope="col"
                            className="md:px-4 py-2 font-medium text-gray-700 hidden md:block"
                          ></th>
                          <th
                            scope="col"
                            className="md:px-4 px-2 py-2 font-medium text-gray-700"
                          >
                            R
                          </th>
                          <th
                            scope="col"
                            className="md:px-4 px-2 py-2 font-medium text-gray-700"
                          >
                            B
                          </th>
                          <th
                            scope="col"
                            className="md:px-4 px-2 py-2 font-medium text-gray-700"
                          >
                            4s
                          </th>
                          <th
                            scope="col"
                            className="md:px-4 px-2 py-2 font-medium text-gray-700"
                          >
                            6s
                          </th>
                          <th
                            scope="col"
                            className="md:px-4 px-2 py-2 font-medium text-gray-700"
                          >
                            SR
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* Row 1 */}
                        <tr className="border-b">
                          <td className="md:px-4 py-2 font-medium text-gray-800">
                            <Link href="/player/playername/overview" className='hover:text-[#0b59ff]'>
                              {" "}
                              R Sharma
                              <p className="md:hidden text-[#909090] text-[11px] font-normal">
                                C Das B Rana
                              </p>
                            </Link>
                          </td>
                          <td className="md:px-4 py-2 hidden md:block text-[13px]">
                            C Das B Rana
                          </td>
                          <td className="md:px-4 py-2 font-medium text-gray-800">
                            56
                          </td>
                          <td className="md:px-4 py-2">115</td>
                          <td className="md:px-4 py-2 text-center md:text-start">
                            9
                          </td>
                          <td className="md:px-4 py-2 text-center md:text-start">
                            0
                          </td>
                          <td className="md:px-4 py-2">74.65</td>
                        </tr>
                        {/* Row 2 */}
                        <tr className="border-b">
                          <td className="md:px-4 py-2 font-medium text-gray-800">
                            <Link href="/player/playername/overview" className='hover:text-[#0b59ff]'>
                              Shubman Gill
                              <p className="md:hidden text-[#909090] text-[11px] font-normal">
                                C Islam B Rana
                              </p>
                            </Link>
                          </td>
                          <td className="md:px-4 py-2 hidden md:block text-[13px]">
                            C Islam B Rana
                          </td>
                          <td className="md:px-4 py-2 font-medium text-gray-800">
                            6
                          </td>
                          <td className="md:px-4 py-2">15</td>
                          <td className="md:px-4 py-2 text-center md:text-start">
                            1
                          </td>
                          <td className="md:px-4 py-2 text-center md:text-start">
                            0
                          </td>
                          <td className="md:px-4 py-2">10.5</td>
                        </tr>
                        {/* Row 3 */}
                        <tr className="border-b">
                          <td className="md:px-4 py-2 font-medium text-gray-800">
                            <Link href="/player/playername/overview" className='hover:text-[#0b59ff]'>
                              Yashasvi Jaiswal
                              <p className="md:hidden text-[#909090] text-[11px] font-normal">
                                C Islam B Rana
                              </p>
                            </Link>
                          </td>
                          <td className="md:px-4 py-2 hidden md:block text-[13px]">
                            C Islam B Rana
                          </td>
                          <td className="md:px-4 py-2 font-medium text-gray-800">
                            0
                          </td>
                          <td className="md:px-4 py-2">10</td>
                          <td className="md:px-4 py-2 text-center md:text-start">
                            0
                          </td>
                          <td className="md:px-4 py-2 text-center md:text-start">
                            0
                          </td>
                          <td className="md:px-4 py-2">45.78</td>
                        </tr>
                        <tr className="border-b">
                          <td className="md:px-4 py-2 font-medium text-gray-800">
                            <Link href="/player/playername/overview" className='hover:text-[#0b59ff]'>
                              Virat Kohli
                              <p className="md:hidden text-[#909090] text-[11px] font-normal">
                                Lbw B Miraz
                              </p>
                            </Link>
                          </td>
                          <td className="md:px-4 py-2 hidden md:block text-[13px]">
                            Lbw B Miraz
                          </td>
                          <td className="md:px-4 py-2 font-medium text-gray-800">
                            6
                          </td>
                          <td className="md:px-4 py-2">6</td>
                          <td className="md:px-4 py-2 text-center md:text-start">
                            1
                          </td>
                          <td className="md:px-4 py-2 text-center md:text-start">
                            0
                          </td>
                          <td className="md:px-4 py-2">74.65</td>
                        </tr>
                        <tr className="border-b">
                          <td className="md:px-4 py-2 font-medium text-gray-800">
                            <Link href="/player/playername/overview" className='hover:text-[#0b59ff]'>
                              Rishabh Pant(WK)
                              <p className="md:hidden text-[#909090] text-[11px] font-normal">
                                C&amp;B Miraz
                              </p>
                            </Link>
                          </td>
                          <td className="md:px-4 py-2 hidden md:block text-[13px]">
                            C&amp;B Miraz
                          </td>
                          <td className="md:px-4 py-2 font-medium text-gray-800">
                            36
                          </td>
                          <td className="md:px-4 py-2">52</td>
                          <td className="md:px-4 py-2 text-center md:text-start">
                            2
                          </td>
                          <td className="md:px-4 py-2 text-center md:text-start">
                            0
                          </td>
                          <td className="md:px-4 py-2">23.47</td>
                        </tr>
                        <tr className="border-b">
                          <td className="md:px-4 py-2 font-medium text-gray-800">
                            <Link href="/player/playername/overview" className='hover:text-[#0b59ff]'>
                              Lokesh Rahul
                              <p className="md:hidden text-[#909090] text-[11px] font-normal">
                                B Bumrah
                              </p>
                            </Link>
                          </td>
                          <td className="md:px-4 py-2 hidden md:block text-[13px]">
                            B Bumrah
                          </td>
                          <td className="md:px-4 py-2 font-medium text-gray-800">
                            24
                          </td>
                          <td className="md:px-4 py-2">16</td>
                          <td className="md:px-4 py-2 text-center md:text-start">
                            2
                          </td>
                          <td className="md:px-4 py-2 text-center md:text-start">
                            1
                          </td>
                          <td className="md:px-4 py-2">45.78</td>
                        </tr>
                        <tr className="border-b">
                          <td className="md:px-4 py-2 font-medium text-gray-800">
                            <Link href="/player/playername/overview" className='hover:text-[#0b59ff]'>
                              Ravindra Jadeja
                              <p className="md:hidden text-[#909090] text-[11px] font-normal">
                                C Rohit Sharma
                              </p>
                            </Link>
                          </td>
                          <td className="md:px-4 py-2 hidden md:block text-[13px]">
                            C Islam b Rana
                          </td>
                          <td className="md:px-4 py-2 font-medium text-gray-800">
                            86
                          </td>
                          <td className="md:px-4 py-2">124</td>
                          <td className="md:px-4 py-2 text-center md:text-start">
                            6
                          </td>
                          <td className="md:px-4 py-2 text-center md:text-start">
                            5
                          </td>
                          <td className="md:px-4 py-2">45.3</td>
                        </tr>
                        <tr className="border-b">
                          <td className="md:px-4 py-2 font-medium text-gray-800">
                            <Link href="/player/playername/overview" className='hover:text-[#0b59ff]'>
                              Ravichandran Ashwin
                              <p className="md:hidden text-[#909090] text-[11px] font-normal">
                                C Mohammed Siraj
                              </p>
                            </Link>
                          </td>
                          <td className="md:px-4 py-2 hidden md:block text-[13px]">
                            C Das B Ahmed
                          </td>
                          <td className="md:px-4 py-2 font-medium text-gray-800">
                            113
                          </td>
                          <td className="md:px-4 py-2">133</td>
                          <td className="md:px-4 py-2 text-center md:text-start">
                            12
                          </td>
                          <td className="md:px-4 py-2 text-center md:text-start">
                            6
                          </td>
                          <td className="md:px-4 py-2">74.65</td>
                        </tr>
                        <tr className="border-b">
                          <td className="md:px-4 py-2 font-medium text-gray-800">
                            <Link href="/player/playername/overview" className='hover:text-[#0b59ff]'>
                              Akash Deep
                              <p className="md:hidden text-[#909090] text-[11px] font-normal">
                                C Shanto B Ahmed
                              </p>
                            </Link>
                          </td>
                          <td className="md:px-4 py-2 hidden md:block text-[13px]">
                            C Shanto B Ahmed
                          </td>
                          <td className="md:px-4 py-2 font-medium text-gray-800">
                            17
                          </td>
                          <td className="md:px-4 py-2">30</td>
                          <td className="md:px-4 py-2 text-center md:text-start">
                            9
                          </td>
                          <td className="md:px-4 py-2 text-center md:text-start">
                            0
                          </td>
                          <td className="md:px-4 py-2">53.52</td>
                        </tr>
                        <tr className="border-b">
                          <td className="md:px-4 py-2 font-medium text-gray-800">
                            <Link href="/player/playername/overview" className='hover:text-[#0b59ff]'>
                              Jasprit Bumrah
                              <p className="md:hidden text-[#909090] text-[11px] font-normal">
                                C Hasan B Mahmud
                              </p>
                            </Link>
                          </td>
                          <td className="md:px-4 py-2 hidden md:block text-[13px]">
                            C Hasan B Mahmud
                          </td>
                          <td className="md:px-4 py-2 font-medium text-gray-800">
                            0
                          </td>
                          <td className="md:px-4 py-2">1</td>
                          <td className="md:px-4 py-2 text-center md:text-start">
                            2
                          </td>
                          <td className="md:px-4 py-2 text-center md:text-start">
                            0
                          </td>
                          <td className="md:px-4 py-2">0</td>
                        </tr>
                        <tr className="">
                          <td className="md:px-4 py-2 font-medium text-gray-800">
                            <Link href="/player/playername/overview" className='hover:text-[#0b59ff]'>
                              Mohammed Siraj
                              <p className="md:hidden text-[#909090] text-[11px] font-normal">
                                C Mohammed Siraj
                              </p>
                            </Link>
                          </td>
                          <td className="md:px-4 py-2 hidden md:block text-[13px]">
                            C Islam B Rana
                          </td>
                          <td className="md:px-4 py-2 font-medium text-gray-800">
                            21
                          </td>
                          <td className="md:px-4 py-2">12</td>
                          <td className="md:px-4 py-2 text-center md:text-start">
                            1
                          </td>
                          <td className="md:px-4 py-2 text-center md:text-start">
                            2
                          </td>
                          <td className="md:px-4 py-2">74.65</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-2 py-2 px-4 bg-[#ecf2fd]">
                    <p className="flex justify-between text-[14px]">
                      <span className="font-medium text-gray-800">Extras: </span>
                      <span className="text-sm text-gray-500">
                        {" "}
                        <span className="font-medium text-gray-800"> 0</span>(B 0,
                        Lb 0, W 0, Nb 0, P 0)
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg bg-[#ffffff] mb-4 p-4">
                <h3 className="text-1xl font-semibold mb-3 pl-[7px] border-l-[3px] border-[#229ED3]">
                  Bowling
                </h3>
                <div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500 whitespace-nowrap">
                      <thead className="bg-blue-50 text-gray-700 ">
                        <tr>
                          <th className="px-4 py-3 font-medium">Bowling</th>
                          <th className="md:px-4 pl-[14px] py-3 font-medium">
                            O
                          </th>
                          <th className="md:px-4 pl-[14px] py-3 font-medium">
                            M
                          </th>
                          <th className="md:px-4 pl-[14px] py-3 font-medium">
                            R
                          </th>
                          <th className="md:px-4 pl-[14px] py-3 font-medium">
                            W
                          </th>
                          <th className="md:px-4 pl-[14px] py-3 font-medium">
                            ER
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-4 py-3 font-medium text-gray-800">
                            <Link href="/player/playername/overview" className='hover:text-[#0b59ff]'>Taskin Ahmed </Link>
                          </td>
                          <td className="md:px-4 pl-[14px] py-3">7.0</td>
                          <td className="md:px-4 pl-[14px] py-3">1</td>
                          <td className="md:px-4 pl-[14px] py-3">22</td>
                          <td className="md:px-4 pl-[14px] py-3">1</td>
                          <td className="md:px-4 pl-[14px] py-3">74.65</td>
                        </tr>
                        <tr>
                          <td className="md:px-4 pl-[14px] py-3 font-medium text-gray-800">
                            <Link href="/player/playername/overview" className='hover:text-[#0b59ff]'>  Hasan Mahmud </Link>
                          </td>
                          <td className="md:px-4 pl-[14px] py-3">11.0</td>
                          <td className="md:px-4 pl-[14px] py-3">1</td>
                          <td className="md:px-4 pl-[14px] py-3">43</td>
                          <td className="md:px-4 pl-[14px] py-3">0</td>
                          <td className="md:px-4 pl-[14px] py-3">10.5</td>
                        </tr>
                        <tr>
                          <td className="md:px-4 pl-[14px] py-3 font-medium text-gray-800">
                            <Link href="/player/playername/overview" className='hover:text-[#0b59ff]'>  Nahid Rana </Link>
                          </td>
                          <td className="md:px-4 pl-[14px] py-3">6.0</td>
                          <td className="md:px-4 pl-[14px] py-3">0</td>
                          <td className="md:px-4 pl-[14px] py-3">21</td>
                          <td className="md:px-4 pl-[14px] py-3">2</td>
                          <td className="md:px-4 pl-[14px] py-3">45.78</td>
                        </tr>
                        <tr>
                          <td className="md:px-4 pl-[14px] py-3 font-medium text-gray-800">
                            <Link href="/player/playername/overview" className='hover:text-[#0b59ff]'>  Shakib Al Hasan </Link>
                          </td>
                          <td className="md:px-4 pl-[14px] py-3">13.0</td>
                          <td className="md:px-4 pl-[14px] py-3">0</td>
                          <td className="md:px-4 pl-[14px] py-3">79</td>
                          <td className="md:px-4 pl-[14px] py-3">0</td>
                          <td className="md:px-4 pl-[14px] py-3">74.65</td>
                        </tr>
                        <tr>
                          <td className="md:px-4 pl-[14px] py-3 font-medium text-gray-800">
                            <Link href="/player/playername/overview" className='hover:text-[#0b59ff]'>  Mehidy Hasan Miraz </Link>
                          </td>
                          <td className="md:px-4 pl-[14px] py-3">25.0</td>
                          <td className="md:px-4 pl-[14px] py-3">3</td>
                          <td className="md:px-4 pl-[14px] py-3">103</td>
                          <td className="md:px-4 pl-[14px] py-3">2</td>
                          <td className="md:px-4 pl-[14px] py-3">23.47</td>
                        </tr>
                        <tr>
                          <td className="md:px-4 pl-[14px] py-3 font-medium text-gray-800">
                            <Link href="/player/playername/overview" className='hover:text-[#0b59ff]'>   Mominul Haque </Link>
                          </td>
                          <td className="md:px-4 pl-[14px] py-3">2.0</td>
                          <td className="md:px-4 pl-[14px] py-3">0</td>
                          <td className="md:px-4 pl-[14px] py-3">15</td>
                          <td className="md:px-4 pl-[14px] py-3">1</td>
                          <td className="md:px-4 pl-[14px] py-3">45.87</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="rounded-lg bg-[#ffffff] mb-4 p-4">
                <h3 className="text-1xl font-semibold mb-3 pl-[7px] border-l-[3px] border-[#229ED3]">
                  Fall of Wickets
                </h3>
                <div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500">
                      <thead className="bg-blue-50 text-gray-700">
                        <tr>
                          <th className="px-4 py-3 font-medium">Batter</th>
                          <th className="px-4 py-3 font-medium">Score</th>
                          <th className="px-4 py-3 font-medium">Overs</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="px-4 py-3 font-medium text-gray-800">
                            <Link href="/player/playername/overview" className='hover:text-[#0b59ff]'>  R Sharma </Link>
                          </td>
                          <td className="px-4 py-3">15-1</td>
                          <td className="px-4 py-3">2.3</td>
                        </tr>
                        <tr className="border-b">
                          <td className="px-4 py-3 font-medium text-gray-800">
                            <Link href="/player/playername/overview" className='hover:text-[#0b59ff]'>  Shubman Gill </Link>
                          </td>
                          <td className="px-4 py-3">28-2</td>
                          <td className="px-4 py-3">6.4</td>
                        </tr>
                        <tr className="border-b">
                          <td className="px-4 py-3 font-medium text-gray-800">
                            <Link href="/player/playername/overview" className='hover:text-[#0b59ff]'>  Yashasvi Jaiswal </Link>
                          </td>
                          <td className="px-4 py-3">67-3</td>
                          <td className="px-4 py-3">19.2</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-gray-800">
                            <Link href="/player/playername/overview" className='hover:text-[#0b59ff]'>  Virat Kohli </Link>
                          </td>
                          <td className="px-4 py-3">234-4</td>
                          <td className="px-4 py-3">55.3</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-[#ffffff] mb-4 p-4">
                <h3 className="text-1xl font-semibold mb-3 pl-[7px] border-l-[3px] border-[#229ED3]">
                  Partnership
                </h3>
                <div className="flex justify-between items-center bg-blue-50 text-gray-700 text-sm px-4 py-3 font-medium">
                  <div>Batter 1</div>
                  <div>Batter 2</div>
                </div>
                <div className="text-sm flex items-center justify-between font-medium px-2 py-3">
                  <div className="w-full ">
                    <p className="text-[13px] text-[#909090]">1st Wicket</p>
                    <div className="flex md:flex-row flex-col md:gap-2">
                      <Link href="/player/playername/overview" className='hover:text-[#0b59ff]'>  S Yadav </Link>
                      <p>
                        <span>10</span>
                        <span className="text-[13px] text-[#909090]">(8)</span>
                      </p>
                    </div>
                  </div>
                  <div className=" w-full">
                    <p className="mb-1 text-center">
                      20 <span className="text-[#909090]">(15)</span>
                    </p>
                    <div className="bg-[#B7132B] w-[75px] mx-auto h-[4px]">
                      <div
                        className="bg-[#13b76dbd] h-[4px]"
                        style={{ width: "40%" }}
                      />
                    </div>
                  </div>
                  <div className=" w-full flex md:flex-row flex-col md:gap-2 items-end md:items-center  justify-end">
                    <Link href="/player/playername/overview" className='hover:text-[#0b59ff]'> <p>Y Jaiswal</p> </Link>
                    <p>
                      10 <span className="text-[#909090]">(7)</span>
                    </p>
                  </div>
                </div>
                <div className="border-t-[1px] border-[#E4E9F0]" />
                <div className="text-sm flex items-center justify-between font-medium px-2 py-3">
                  <div className="w-full ">
                    <p className="text-[13px] text-[#909090]">2nd Wicket</p>
                    <div className="flex md:flex-row flex-col md:gap-2">
                      <Link href="/player/playername/overview" className='hover:text-[#0b59ff]'> S Yadav </Link>
                      <p>
                        {" "}
                        <span>10</span>{" "}
                        <span className="text-[13px] text-[#909090]">(8)</span>
                      </p>
                    </div>
                  </div>
                  <div className=" w-full">
                    <p className="mb-1 text-center">
                      20 <span className="text-[#909090]">(15)</span>
                    </p>
                    <div className="bg-[#B7132B]  w-[75px] mx-auto h-[4px]">
                      <div
                        className="bg-[#13b76dbd] h-[4px]"
                        style={{ width: "40%" }}
                      />
                    </div>
                  </div>
                  <div className=" w-full flex md:flex-row flex-col md:items-center items-end md:gap-2 justify-end">
                    <Link href="/player/playername/overview" className='hover:text-[#0b59ff]'>  <p>S Gill</p> </Link>
                    <p>
                      0 <span className="text-[#909090]">(8)</span>
                    </p>
                  </div>
                </div>
                <div className="border-t-[1px] border-[#E4E9F0]" />
                <div className="text-sm flex items-center justify-between font-medium px-2 py-3">
                  <div className="w-full">
                    <p className="text-[13px] text-[#909090]">3rd Wicket</p>
                    <div className="flex md:flex-row flex-col md:gap-2">
                      <Link href="/player/playername/overview" className='hover:text-[#0b59ff]'> R Jadeja </Link>
                      <p>
                        {" "}
                        <span>53</span>{" "}
                        <span className="text-[13px] text-[#909090]">(8)</span>
                      </p>
                    </div>
                  </div>
                  <div className=" w-full">
                    <p className="mb-1 text-center">
                      20 <span className="text-[#909090]">(15)</span>
                    </p>
                    <div className="bg-[#B7132B] w-[75px] mx-auto h-[4px]">
                      <div
                        className="bg-[#13b76dbd] h-[4px]"
                        style={{ width: "40%" }}
                      />
                    </div>
                  </div>
                  <div className=" w-full flex md:flex-row flex-col md:items-center items-end md:gap-2 justify-end">
                    <Link href="/player/playername/overview" className='hover:text-[#0b59ff]'> <p>L Rahul</p> </Link>
                    <p>
                      16 <span className="text-[#909090]">(50)</span>
                    </p>
                  </div>
                </div>
                <div className="border-t-[1px] border-[#E4E9F0]" />
                <div className="text-sm flex items-center justify-between font-medium px-2 py-3">
                  <div className="w-full">
                    <p className="text-[13px] text-[#909090]">3th Wicket</p>
                    <div className="flex md:flex-row flex-col md:gap-2">
                      <Link href="/player/playername/overview" className='hover:text-[#0b59ff]'>  R Jadeja </Link>
                      <p>
                        {" "}
                        <span>23</span>{" "}
                        <span className="text-[13px] text-[#909090]">(8)</span>
                      </p>
                    </div>
                  </div>
                  <div className=" w-full">
                    <p className="mb-1 text-center">
                      20 <span className="text-[#909090]">(15)</span>
                    </p>
                    <div className="bg-[#B7132B] w-[75px] mx-auto h-[4px]">
                      <div
                        className="bg-[#13b76dbd] h-[4px]"
                        style={{ width: "40%" }}
                      />
                    </div>
                  </div>
                  <div className=" w-full flex md:flex-row flex-col md:items-center items-end md:gap-2 justify-end">
                    <Link href="/player/playername/overview" className='hover:text-[#0b59ff]'> <p>R Ashwin</p> </Link>
                    <p>
                      106 <span className="text-[#909090]">(118)</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 md:col-span-5">
              <div className="rounded-lg bg-[#ffffff]">
                <div className="p-4">
                  <h3 className="text-1xl font-semibold pl-[7px] mb-3 border-l-[3px] border-[#229ED3]">
                    Yet to bat
                  </h3>
                  <div className="border-t-[1px] border-[#E4E9F0]" />
                  <div className="">
                    <Link href="/player/playername/overview" className='hover:text-[#0b59ff]'>
                      <div className="flex items-center space-x-3 py-3 border-b-[1px] border-border-gray-700">
                        <div>
                          <Image src="/assets/img/player/1.png" width={40} height={40} alt="R sharma (c)" />
                        </div>
                        <div className="font-medium">
                          <h2 className="text-[15px]">A Deep </h2>
                          <p className="text-[#909090] font-normal">Avg 7.34</p>
                        </div>
                      </div>
                    </Link>
                    <Link href="/player/playername/overview" className='hover:text-[#0b59ff]'>
                      <div className="flex items-center space-x-3 py-3 border-b-[1px] border-border-gray-700">
                        <div>
                          <Image src="/assets/img/player/1.png" width={40} height={40} alt="S Gill" />
                        </div>
                        <div className="font-medium">
                          <h2 className="text-[15px]"> V Kholi</h2>
                          <p className="text-[#909090] font-normal">Avg 8.34</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <Link href="/player/playername/overview" className='hover:text-[#0b59ff]'>
                    <div className="flex items-center space-x-3 py-3">
                      <div>
                        <Image src="/assets/img/player/1.png" width={40} height={40} alt="L Rahul" />
                      </div>
                      <div className="font-medium">
                        <h2 className="text-[15px]"> R Pant </h2>
                        <p className="text-[#909090] font-normal">Avg 5.34</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  </div>
  )
}
