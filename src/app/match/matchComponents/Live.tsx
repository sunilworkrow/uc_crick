"use client"

import Link from 'next/link';
import React from 'react'
import Image from "next/image";

export default function Live() {

  return (

    <section className="lg:w-[1000px] mx-auto md:mb-0 mb-4 px-2 lg:px-0">
      <div id="tabs" className="my-4">
        <div className="flex text-1xl space-x-8 p-2 bg-[#ffffff] rounded-lg overflow-auto">
          <Link href="/match/live/more-info">
            <button
              className="font-medium py-2 px-3 whitespace-nowrap"
            >
              More Info
            </button>
          </Link>
          <Link href="/match/live/live">
            <button
              className="font-medium py-2 px-3 whitespace-nowrap bg-[#1A80F8] text-white rounded-md"
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

        <div id="live" className="tab-content ">
          <div className="md:grid grid-cols-12 gap-4">
            <div className="lg:col-span-8 md:col-span-7 lg:grid grid-cols-12 gap-4">
              <div className="col-span-8">
                <div className="rounded-lg bg-white">
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <Link href="/player/playername/overview">
                        <div className="flex items-center gap-3">
                          <div>
                            <Image src="/assets/img/player/1.png" width={40} height={40} alt="R sharma (c)" />
                          </div>
                          <div className="font-medium">
                            <h2 className="md:text-[15px] text-[14px] text-[#909090]">
                              R Sharma{" "}
                            </h2>
                            <p className="md:text-[15px] text-[14px] flex items-center">
                              54{" "}
                              <span className="md:text-[13px] text-[12px] text-[#909090] px-1">
                                (21)
                              </span>
                              <Image
                                src="/assets/img/home/bat.png"
                                className="h-[14px]"
                                width={14} height={14} alt=""
                              />
                            </p>
                          </div>
                        </div>
                      </Link>
                      <div className="font-medium text-center">
                        <p className="md:text-[18px] text-[15px] text-[#13b76dbd]">
                          60{" "}
                          <span className="md:text-[15px] text-[13px] text-black">
                            (32)
                          </span>
                        </p>
                        <p>Partnership</p>
                      </div>
                      <Link href="/player/playername/overview">
                        <div className="flex items-center justify-end flex-row-reverse gap-3">
                          <div>
                            <Image src="/assets/img/player/2.png" width={40} height={40} alt="R sharma (c)" />
                          </div>
                          <div className="font-medium text-end">
                            <h2 className="md:text-[15px] text-[14px] text-[#909090]">
                              S Gill
                            </h2>
                            <p className="md:text-[15px] text-[14px] flex items-center">
                              23{" "}
                              <span className="md:text-[13px] text-[12px] text-[#909090] pl-1">
                                (10)
                              </span>
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-4 my-4 lg:my-0">
                <div className="rounded-lg bg-white p-4">
                  <Link href="/player/playername/overview">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <Image
                          src="/assets/img/player/13.png"
                          className="h-[40px]"
                          width={40} height={40} alt="T Ahmed"
                        />
                        <Image
                          src="/assets/img/player/ball.png"
                          className="absolute -bottom-1.5 -right-0.5 h-[13px] bg-white rounded-full p-[2px]"
                          width={13} height={13} alt=""
                        />
                        <p />
                      </div>
                      <div className="font-medium">
                        <h2 className="md:text-[15px] text-[14px] text-[#909090]">
                          T Ahmed
                        </h2>
                        <p className="md:text-[15px] text-[14px] flex items-center">
                          0-44{" "}
                          <span className="md:text-[13px] text-[12px] text-[#909090] pt-[4px] px-1">
                            (2.5)
                          </span>
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-span-12 mb-4 md:mb-0">
                <div className="rounded-lg bg-white p-4 flex lg:flex-row flex-col items-center md:gap-8 gap-4">
                  {/* Last Over Section */}
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-[#909090]">Last Over:</span>
                    <div className="flex gap-1">
                      <span className="px-2 py-1 border rounded text-gray-700">
                        1
                      </span>
                      <span className="px-2 py-1 border rounded text-gray-700">
                        2
                      </span>
                      <span className="px-2 py-1 border rounded text-gray-700">
                        0
                      </span>
                      <span className="px-2 py-1 border rounded bg-[#13b76dbd] text-white">
                        6
                      </span>
                      <span className="px-2 py-1 border rounded text-gray-700">
                        0
                      </span>
                      <span className="px-2 py-1 border rounded text-gray-700">
                        1
                      </span>
                    </div>
                    <span className="font-medium text-1xl text-[#6A7586]">
                      = 10
                    </span>
                  </div>
                  {/* This Over Section */}
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-[#909090]">This Over:</span>
                    <div className="flex gap-1">
                      <span className="px-2 py-1 border rounded text-gray-700">
                        1
                      </span>
                      <span className="px-2 py-1 border rounded text-gray-700">
                        1
                      </span>
                      <span className="px-2 py-1 border rounded bg-orange-500 text-white">
                        4
                      </span>
                      <span className="px-2 py-1 border rounded bg-orange-500 text-white">
                        4
                      </span>
                      <span className="px-2 py-1 border rounded text-gray-700">
                        1
                      </span>
                      <span className="px-2 py-1 border rounded text-gray-700">
                        1
                      </span>
                    </div>
                    <span className="font-medium text-1xl text-[#6A7586]">
                      = 12
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 md:col-span-5">
              <div className="rounded-lg bg-[#ffffff]">
                <div className="p-4 cust-box-click-container">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex space-x-2">
                      <div className="border-l-[3px] border-[#229ED3] h-[19px]" />
                      <h3 className="text-1xl font-semibold">Probability</h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        className="cust-box-click-button bg-[#081736] font-medium text-[#ffffff] px-5 py-1 rounded-full"
                      >
                        <span>% View</span>
                      </button>
                      <button
                        className="cust-box-click-button bg-[#ffffff] font-medium text-[#6A7586] px-5 py-1 rounded-full"
                      >
                        <span>Odds View</span>
                      </button>
                    </div>
                  </div>
                  <div className="cust-box-click-content">
                    <div>
                      <div className="flex justify-between items-center">
                        <p className="font-semibol">Day 4 : Session 3</p>
                        <p className="text-[#909090]">
                          Overs left today:{" "}
                          <span className="font-semibol text-black">40.0</span>
                        </p>
                      </div>
                      <div className="relative mt-4 h-[4px] bg-gray-200 overflow-hidden">
                        <div
                          className="absolute h-full bg-[#13b76dbd]"
                          style={{ width: "40%" }}
                        />
                        <div
                          className="absolute h-full bg-[#EB9D29]"
                          style={{ width: "20%", left: "40%" }}
                        ></div>
                        <div
                          className="absolute h-full bg-[#B7132B]"
                          style={{ width: "40%", left: "60%" }}
                        ></div>
                      </div>
                      <div className="flex justify-between mt-2 text-sm">
                        <p className="text-green-600 font-medium">Ind: 40%</p>
                        <p className="text-yellow-600 font-medium">Drew: 20%</p>
                        <p className="text-red-600 font-medium">Ban: 40%</p>
                      </div>
                    </div>
                  </div>
                  <div className="cust-box-click-content hidden">
                    <div className="flex justify-between items-center border-t-[1px] pt-2">
                      <div className='text-1xl font-medium'>
                        RR
                      </div>
                      <div className="flex items-center gap-2">
                        <p className="py-1 px-4 bg-orange-500 rounded-md text-white">41</p>
                        <p className="py-1 px-4 bg-orange-500 rounded-md text-white">42</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cust-box-click-container">
            <div className="my-2">
              <div className="flex gap-[10px] justify-between overflow-auto items-center py-2">
                <p className="font-medium text-[14px]">Commentary</p>
                <button
                  className="cust-box-click-button bg-[#081736] font-medium text-[#ffffff] px-5 py-1 rounded-full"
                >
                  <span>All</span>
                </button>
                <button className="cust-box-click-button bg-[#ffffff] font-medium text-[#6A7586] px-5 py-1 rounded-full"

                >
                  <span>View</span>
                </button>
                <button
                  className="cust-box-click-button bg-[#ffffff] font-medium text-[#6A7586] px-5 py-1 rounded-full"
                >
                  <span>Overs</span>
                </button>
                <button className="cust-box-click-button bg-[#ffffff] font-medium text-[#6A7586] px-5 py-1 rounded-full">
                  <span>Wicket</span>
                </button>
                <button className="cust-box-click-button bg-[#ffffff] font-medium text-[#6A7586] px-5 py-1 rounded-full">
                  <span>6s</span>
                </button>
                <button className="cust-box-click-button bg-[#ffffff] font-medium text-[#6A7586] px-5 py-1 rounded-full">
                  <span>4s</span>
                </button>
                <button className="cust-box-click-button bg-[#ffffff] font-medium text-[#6A7586] px-5 py-1 rounded-full">
                  <span>Inn1</span>
                </button>
                <button className="cust-box-click-button bg-[#ffffff] font-medium text-[#6A7586] px-5 py-1 rounded-full">
                  <span>Inn2</span>
                </button>
                <button className="cust-box-click-button bg-[#ffffff] font-medium text-[#6A7586] px-5 py-1 rounded-full">
                  <span>Inn3</span>
                </button>
                <button className="cust-box-click-button bg-[#ffffff] font-medium text-[#6A7586] px-5 py-1 rounded-full">
                  <span>Inn4</span>
                </button>
                <button className="cust-box-click-button bg-[#ffffff] font-medium text-[#6A7586] px-5 py-1 rounded-full">
                  <span>Milestone</span>
                </button>
              </div>
            </div>
            <div className="cust-box-click-content">
              <div>
                <div className="rounded-lg bg-white p-4 mb-4">
                  <div className="flex md:flex-row flex-col justify-between md:items-center mb-4 gap-2">
                    <div className="text-[14px] font-normal">
                      IND 1st Innings : 235/4
                    </div>
                    <div className="text-[14px] font-normal">
                      10{" "}
                      <span className="text-[#909090] font-medium text-[13px]">
                        End Of Over
                      </span>
                    </div>
                    <div className="text-[14px] font-normal text-black">
                      6 4 4 1 4 4
                    </div>
                    <div className="text-[14px] font-normal">
                      R Sharma: 25 <span className="text-[#909090]">(46)</span> | S
                      Gill: 98 <span className="text-[#909090]">(106) </span>
                    </div>
                    <div className="text-[14px] font-normal">
                      Taskin Ahmed{" "}
                      <span className="text-[#909090]">2.5-0-45-0</span>
                    </div>
                  </div>
                  <div className="border-t-[1px] border-[#E7F2F4]" />
                  <div className="md:flex items-start py-3 md:px-3 gap-[21px]">
                    <div className="flex items-center gap-[10px] md:py-4 pb-4">
                      <p className="text-[16px] font-semibold">9.6</p>
                      <p className="text-[16px] font-semibold px-[11px] py-[2px] text-white bg-[#13b76dbd] rounded-lg">
                        6{" "}
                      </p>
                    </div>
                    <div>
                      <div className="text-gray-500 font-normal text-[14px] mb-2">
                        Taskin Ahmed To Hardik Pandya,{" "}
                        <span className="text-[14px] font-normal text-black">
                          {" "}
                          Six
                        </span>
                      </div>
                      <p className="text-[14px] font-normal">
                        Six !! With A Brilliant Fast Ball On The Stumps, Hardik
                        Pandya Hangs In The Crease And Showcases Power-Hitting
                        Prowess As Batter Unleashes A Spectacular Pull To Deep Mid
                        Wicket For A Colossal Maximum!
                      </p>
                    </div>
                  </div>
                  <div className="border-t-[1px] border-[#E7F2F4]" />
                  <div className="md:flex items-start py-3 md:px-3 gap-[21px]">
                    <div className="flex items-center gap-[10px] md:py-4 pb-4">
                      <p className="text-[16px] font-semibold">9.5</p>
                      <p className="text-[16px] font-semibold px-[11px] py-[2px] text-white bg-[#EB9D29] rounded-lg">
                        4{" "}
                      </p>
                    </div>
                    <div>
                      <div className="text-gray-500 font-normal text-[14px] mb-2">
                        Taskin Ahmed to Hardik Pandya,{" "}
                        <span className="text-[14px] font-normal text-black">
                          {" "}
                          Four
                        </span>
                      </div>
                      <p className="text-[14px] font-normal">
                        Four !! fast ball, good length, on the off stump, Hardik
                        Pandya hangs in the crease, plays cut in the air to deep
                        point. Ball finds the ropes for four.
                      </p>
                    </div>
                  </div>
                  <div className="border-t-[1px] border-[#E7F2F4]" />
                  <div className="md:flex items-start py-3 md:px-3 gap-[21px]">
                    <div className="flex items-center gap-[10px] md:py-4 pb-4">
                      <p className="text-[16px] font-semibold">9.4</p>
                      <p className="text-[16px] font-semibold px-[11px] py-[2px] text-white bg-[#EB9D29] rounded-lg">
                        4{" "}
                      </p>
                    </div>
                    <div>
                      <div className="text-gray-500 font-normal text-[14px] mb-2">
                        Taskin Ahmed to Hardik Pandya,{" "}
                        <span className="text-[14px] font-normal text-black">
                          {" "}
                          Four
                        </span>
                      </div>
                      <p className="text-[14px] font-normal">
                        Four !! fast ball, good length, on the stumps, Hardik Pandya
                        hangs in the crease, plays uppercut in the air to deep fine
                        leg. Ball finds the ropes for four.
                      </p>
                    </div>
                  </div>
                  <div className="border-t-[1px] border-[#E7F2F4]" />
                  <div className="md:flex items-start py-3 md:px-3 gap-[21px]">
                    <div className="flex items-center gap-[10px] md:py-4 pb-4">
                      <p className="text-[16px] font-semibold">9.3</p>
                      <p className="text-[16px] font-semibold px-[11px] py-[2px] text-white bg-[#bec2d3] rounded-lg">
                        1{" "}
                      </p>
                    </div>
                    <div>
                      <div className="text-gray-500 font-normal text-[14px] mb-2">
                        Taskin Ahmed to Nitish Kumar Reddy,{" "}
                        <span className="text-[14px] font-normal text-black">
                          {" "}
                          1 Run
                        </span>
                      </div>
                      <p className="text-[14px] font-normal">
                        Taskin Ahmed delivers fast ball at full length, Nitish Kumar
                        Reddy hangs in the crease and plays the shot, but the ball
                        goes straight to the fielder at deep mid wicket for 1 run.
                      </p>
                    </div>
                  </div>
                  <div className="border-t-[1px] border-[#E7F2F4]" />
                  <div className="md:flex items-start py-3 md:px-3 gap-[21px]">
                    <div className="flex items-center gap-[10px] md:py-4 pb-4">
                      <p className="text-[16px] font-semibold">9.2</p>
                      <p className="text-[16px] font-semibold px-[11px] py-[2px] text-white bg-[#EB9D29] rounded-lg">
                        4{" "}
                      </p>
                    </div>
                    <div>
                      <div className="text-gray-500 font-normal text-[14px] mb-2">
                        Taskin Ahmed to Hardik Pandya,{" "}
                        <span className="text-[14px] font-normal text-black">
                          {" "}
                          Four
                        </span>
                      </div>
                      <p className="text-[14px] font-normal">
                        Four !! fast ball, good length, on the stumps, Hardik Pandya
                        hangs in the crease, plays uppercut in the air to deep fine
                        leg. Ball finds the ropes for four.
                      </p>
                    </div>
                  </div>
                  <div className="border-t-[1px] border-[#E7F2F4]" />
                  <div className="md:flex items-start py-3 px-3 pb-0 gap-[21px]">
                    <div className="flex items-center gap-[10px] md:py-4 pb-4">
                      <p className="text-[16px] font-semibold">9.1</p>
                      <p className="text-[16px] font-semibold px-[11px] py-[2px] text-white bg-[#EB9D29] rounded-lg">
                        4{" "}
                      </p>
                    </div>
                    <div>
                      <div className="text-gray-500 font-normal text-[14px] mb-2">
                        Taskin Ahmed to Hardik Pandya,{" "}
                        <span className="text-[14px] font-normal text-black">
                          {" "}
                          Four
                        </span>
                      </div>
                      <p className="text-[14px] font-normal">
                        Four !! fast ball, good length, on the stumps, Hardik Pandya
                        hangs in the crease, plays uppercut in the air to deep fine
                        leg. Ball finds the ropes for four.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg bg-white p-4">
                  <div className="flex md:flex-row flex-col justify-between md:items-center mb-4 gap-2">
                    <div className="text-[14px] font-normal">
                      IND 1st Innings : 235/4
                    </div>
                    <div className="text-[14px] font-normal">
                      10{" "}
                      <span className="text-[#909090] font-medium text-[13px]">
                        End Of Over
                      </span>
                    </div>
                    <div className="text-[14px] font-normal text-black">
                      6 4 4 1 4 4
                    </div>
                    <div className="text-[14px] font-normal">
                      R Sharma: 25 <span className="text-[#909090]">(46)</span> | S
                      Gill: 98 <span className="text-[#909090]">(106) </span>
                    </div>
                    <div className="text-[14px] font-normal">
                      Taskin Ahmed{" "}
                      <span className="text-[#909090]">2.5-0-45-0</span>
                    </div>
                  </div>
                  <div className="border-t-[1px] border-[#E7F2F4]" />
                  <div className="md:flex items-start py-3 md:px-3 gap-[21px]">
                    <div className="flex items-center gap-[10px] md:py-4 pb-4">
                      <p className="text-[16px] font-semibold">9.6</p>
                      <p className="text-[16px] font-semibold px-[11px] py-[2px] text-white bg-[#13b76dbd] rounded-lg">
                        6{" "}
                      </p>
                    </div>
                    <div>
                      <div className="text-gray-500 font-normal text-[14px] mb-2">
                        Taskin Ahmed To Hardik Pandya,{" "}
                        <span className="text-[14px] font-normal text-black">
                          {" "}
                          Six
                        </span>
                      </div>
                      <p className="text-[14px] font-normal">
                        Six !! With A Brilliant Fast Ball On The Stumps, Hardik
                        Pandya Hangs In The Crease And Showcases Power-Hitting
                        Prowess As Batter Unleashes A Spectacular Pull To Deep Mid
                        Wicket For A Colossal Maximum!
                      </p>
                    </div>
                  </div>
                  <div className="border-t-[1px] border-[#E7F2F4]" />
                  <div className="md:flex items-start py-3 md:px-3 gap-[21px]">
                    <div className="flex items-center gap-[10px] md:py-4 pb-4">
                      <p className="text-[16px] font-semibold">9.5</p>
                      <p className="text-[16px] font-semibold px-[11px] py-[2px] text-white bg-[#EB9D29] rounded-lg">
                        4{" "}
                      </p>
                    </div>
                    <div>
                      <div className="text-gray-500 font-normal text-[14px] mb-2">
                        Taskin Ahmed to Hardik Pandya,{" "}
                        <span className="text-[14px] font-normal text-black">
                          {" "}
                          Four
                        </span>
                      </div>
                      <p className="text-[14px] font-normal">
                        Four !! fast ball, good length, on the off stump, Hardik
                        Pandya hangs in the crease, plays cut in the air to deep
                        point. Ball finds the ropes for four.
                      </p>
                    </div>
                  </div>
                  <div className="border-t-[1px] border-[#E7F2F4]" />
                  <div className="md:flex items-start py-3 md:px-3 gap-[21px]">
                    <div className="flex items-center gap-[10px] md:py-4 pb-4">
                      <p className="text-[16px] font-semibold">9.4</p>
                      <p className="text-[16px] font-semibold px-[11px] py-[2px] text-white bg-[#EB9D29] rounded-lg">
                        4{" "}
                      </p>
                    </div>
                    <div>
                      <div className="text-gray-500 font-normal text-[14px] mb-2">
                        Taskin Ahmed to Hardik Pandya,{" "}
                        <span className="text-[14px] font-normal text-black">
                          {" "}
                          Four
                        </span>
                      </div>
                      <p className="text-[14px] font-normal">
                        Four !! fast ball, good length, on the stumps, Hardik Pandya
                        hangs in the crease, plays uppercut in the air to deep fine
                        leg. Ball finds the ropes for four.
                      </p>
                    </div>
                  </div>
                  <div className="border-t-[1px] border-[#E7F2F4]" />
                  <div className="md:flex items-start py-3 md:px-3 gap-[21px]">
                    <div className="flex items-center gap-[10px] md:py-4 pb-4">
                      <p className="text-[16px] font-semibold">9.3</p>
                      <p className="text-[16px] font-semibold px-[11px] py-[2px] text-white bg-[#bec2d3] rounded-lg">
                        1{" "}
                      </p>
                    </div>
                    <div>
                      <div className="text-gray-500 font-normal text-[14px] mb-2">
                        Taskin Ahmed to Nitish Kumar Reddy,{" "}
                        <span className="text-[14px] font-normal text-black">
                          {" "}
                          1 Run
                        </span>
                      </div>
                      <p className="text-[14px] font-normal">
                        Taskin Ahmed delivers fast ball at full length, Nitish Kumar
                        Reddy hangs in the crease and plays the shot, but the ball
                        goes straight to the fielder at deep mid wicket for 1 run.
                      </p>
                    </div>
                  </div>
                  <div className="border-t-[1px] border-[#E7F2F4]" />
                  <div className="md:flex items-start py-3 md:px-3 gap-[21px]">
                    <div className="flex items-center gap-[10px] md:py-4 pb-4">
                      <p className="text-[16px] font-semibold">9.2</p>
                      <p className="text-[16px] font-semibold px-[11px] py-[2px] text-white bg-[#EB9D29] rounded-lg">
                        4{" "}
                      </p>
                    </div>
                    <div>
                      <div className="text-gray-500 font-normal text-[14px] mb-2">
                        Taskin Ahmed to Hardik Pandya,{" "}
                        <span className="text-[14px] font-normal text-black">
                          {" "}
                          Four
                        </span>
                      </div>
                      <p className="text-[14px] font-normal">
                        Four !! fast ball, good length, on the stumps, Hardik Pandya
                        hangs in the crease, plays uppercut in the air to deep fine
                        leg. Ball finds the ropes for four.
                      </p>
                    </div>
                  </div>
                  <div className="border-t-[1px] border-[#E7F2F4]" />
                  <div className="md:flex items-start py-3 px-3 pb-0 gap-[21px]">
                    <div className="flex items-center gap-[10px] md:py-4 pb-4">
                      <p className="text-[16px] font-semibold">9.1</p>
                      <p className="text-[16px] font-semibold px-[11px] py-[2px] text-white bg-[#EB9D29] rounded-lg">
                        4{" "}
                      </p>
                    </div>
                    <div>
                      <div className="text-gray-500 font-normal text-[14px] mb-2">
                        Taskin Ahmed to Hardik Pandya,{" "}
                        <span className="text-[14px] font-normal text-black">
                          {" "}
                          Four
                        </span>
                      </div>
                      <p className="text-[14px] font-normal">
                        Four !! fast ball, good length, on the stumps, Hardik Pandya
                        hangs in the crease, plays uppercut in the air to deep fine
                        leg. Ball finds the ropes for four.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg bg-white p-4 my-4">
                  <div className="flex md:flex-row flex-col justify-between md:items-center mb-4 gap-2">
                    <div className="text-[14px] font-normal">
                      IND 1st Inning&nbsp;:&nbsp;215/4
                    </div>
                    <div className="text-[14px] font-normal">
                      9{" "}
                      <span className="text-[#909090] font-medium text-[13px]">
                        End Of Over
                      </span>
                    </div>
                    <div className="text-[14px] font-normal text-black">
                      6 4 4 1 4 4
                    </div>
                    <div className="text-[14px] font-normal">
                      R Sharma: 25 <span className="text-[#909090]">(46)</span> | S
                      Gill: 98 <span className="text-[#909090]">(106) </span>
                    </div>
                    <div className="text-[14px] font-normal">
                      Taskin Ahmed{" "}
                      <span className="text-[#909090]">2.5-0-45-0</span>
                    </div>
                  </div>
                  <div className="border-t-[1px] border-[#E7F2F4]" />
                  <div className="md:flex items-start py-3 md:px-3 gap-[21px]">
                    <div className="flex items-center gap-[10px] md:py-4 pb-4">
                      <p className="text-[16px] font-semibold">8.6</p>
                      <p className="text-[16px] font-semibold px-[11px] py-[2px] text-white bg-[#13b76dbd] rounded-lg">
                        6{" "}
                      </p>
                    </div>
                    <div>
                      <div className="text-[14px] font-normal">
                        Taskin Ahmed To Hardik Pandya,{" "}
                        <span className="text-[14px] font-normal text-black">
                          {" "}
                          Six
                        </span>
                      </div>
                      <p className="text-[14px] font-normal">
                        Six !! With A Brilliant Fast Ball On The Stumps, Hardik
                        Pandya Hangs In The Crease And Showcases Power-Hitting
                        Prowess As Batter Unleashes A Spectacular Pull To Deep Mid
                        Wicket For A Colossal Maximum!
                      </p>
                    </div>
                  </div>
                  <div className="border-t-[1px] border-[#E7F2F4]" />
                  <div className="md:flex items-start py-3 md:px-3 gap-[21px]">
                    <div className="flex items-center gap-[10px] md:py-4 pb-4">
                      <p className="text-[16px] font-semibold">9.5</p>
                      <p className="text-[16px] font-semibold px-[11px] py-[2px] text-white bg-[#EB9D29] rounded-lg">
                        4{" "}
                      </p>
                    </div>
                    <div>
                      <div className="text-[14px] font-normal">
                        Taskin Ahmed to Hardik Pandya,{" "}
                        <span className="text-[14px] font-normal text-black">
                          {" "}
                          Four
                        </span>
                      </div>
                      <p className="text-[14px] font-normal">
                        Four !! fast ball, good length, on the off stump, Hardik
                        Pandya hangs in the crease, plays cut in the air to deep
                        point. Ball finds the ropes for four.
                      </p>
                    </div>
                  </div>
                  <div className="border-t-[1px] border-[#E7F2F4]" />
                  <div className="md:flex items-start py-3 md:px-3 gap-[21px]">
                    <div className="flex items-center gap-[10px] md:py-4 pb-4">
                      <p className="text-[16px] font-semibold">9.4</p>
                      <p className="text-[16px] font-semibold px-[11px] py-[2px] text-white bg-[#EB9D29] rounded-lg">
                        4{" "}
                      </p>
                    </div>
                    <div>
                      <div className="text-[14px] font-normal">
                        Taskin Ahmed to Hardik Pandya,{" "}
                        <span className="text-[14px] font-normal text-black">
                          {" "}
                          Four
                        </span>
                      </div>
                      <p className="text-[14px] font-normal">
                        Four !! fast ball, good length, on the stumps, Hardik Pandya
                        hangs in the crease, plays uppercut in the air to deep fine
                        leg. Ball finds the ropes for four.
                      </p>
                    </div>
                  </div>
                  <div className="border-t-[1px] border-[#E7F2F4]" />
                  <div className="md:flex items-start py-3 md:px-3 gap-[21px]">
                    <div className="flex items-center gap-[10px] md:py-4 pb-4">
                      <p className="text-[16px] font-semibold">9.3</p>
                      <p className="text-[16px] font-semibold px-[11px] py-[2px] text-white bg-[#bec2d3] rounded-lg">
                        1{" "}
                      </p>
                    </div>
                    <div>
                      <div className="text-[14px] font-normal">
                        Taskin Ahmed to Nitish Kumar Reddy,{" "}
                        <span className="text-[14px] font-normal text-black">
                          {" "}
                          1 Run
                        </span>
                      </div>
                      <p className="text-[14px] font-normal">
                        Taskin Ahmed delivers fast ball at full length, Nitish Kumar
                        Reddy hangs in the crease and plays the shot, but the ball
                        goes straight to the fielder at deep mid wicket for 1 run.
                      </p>
                    </div>
                  </div>
                  <div className="my-4">
                    <div
                      className="text-white p-4 rounded-lg"
                      style={{
                        background:
                          "linear-gradient(90deg, #3C1492 0%, #6D1E93 100%)"
                      }}
                    >
                      <h2 className="text-[14px] font-normal mb-4">
                        New Batter On Crease
                      </h2>
                      <div className="flex items-center justify-between">
                        <Link href="/player/playername/overview">
                          <div className="flex items-center">
                            <Image
                              src="/assets/img/player/14.png"
                              width={65} height={65} alt="Player"
                              className="md:mr-4 mr-2 h-[40px] md:h-[auto]"
                            />
                            <div>
                              <h2 className="md:text-xl text-[16px] font-semibold">
                                V Kohli
                              </h2>
                              <p className="text-[14px] font-normal">
                                30 Year (Batter)
                              </p>
                            </div>
                          </div>
                        </Link>

                        <div className="flex gap-3 items-center">
                          <p className="text-1xl font-normal">Best</p>
                          <h1 className="md:text-2xl text-[16px] font-semibold">
                            96
                          </h1>
                        </div>
                      </div>
                      {/* Player Stats */}
                      <div className="mt-4 md:flex grid grid-cols-12 justify-between md:gap-4 text-center border-t border-[#9d9d9d] pt-3">
                        <div className="col-span-6 flex gap-2 items-center">
                          <p className="md:text-[14px] text-[13px] font-normal">
                            MATCHES
                          </p>
                          <h2 className="md:text-xl text-[14px] md:font-bold font-semibold">
                            79
                          </h2>
                        </div>
                        <div className="col-span-6 flex gap-2 items-center justify-end">
                          <p className="md:text-[14px] text-[13px] font-normal">
                            RUNS
                          </p>
                          <h2 className="md:text-xl text-[14px] md:font-bold font-semibold">
                            1523
                          </h2>
                        </div>
                        <div className="col-span-6 flex gap-2 items-center">
                          <p className="md:text-[14px] text-[13px] font-normal">
                            SR
                          </p>
                          <h2 className="md:text-xl text-[14px] md:font-bold font-semibold">
                            141.00
                          </h2>
                        </div>
                        <div className="col-span-6 flex gap-2 items-center justify-end">
                          <p className="md:text-[14px] text-[13px] font-normal ">
                            AVG
                          </p>
                          <h2 className="md:text-xl text-[14px] md:font-bold font-semibold">
                            26.00
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-1xl font-medium mb-4">
                    Virat Kholi&nbsp;Comes Out To Bat At 5.
                  </div>
                  <div className="my-4">
                    <div
                      className="text-white p-4 rounded-lg"
                      style={{
                        background:
                          "linear-gradient(90deg, #D20A5E 0%, #9C0C0C 100%)"
                      }}
                    >
                      <div className="md:flex items-center justify-between">
                        <Link href="/player/playername/overview">
                          <div className="flex items-center">
                            <Image
                              src="/assets/img/player/15.png"
                              width={65} height={65} alt="Player"
                              className="md:mr-4 mr-2 h-[40px] md:h-[auto]"
                            />
                            <div>
                              <h2 className="md:text-xl text-[16px] font-semibold flex gap-3">
                                <span>KL rahul</span>{" "}
                                <span className="text-[#BFEF50] text-[14px]">
                                  29(12)
                                </span>
                              </h2>
                              <p className="text-[14px] font-normal">
                                c R Hossain b Miraz{" "}
                              </p>
                            </div>
                          </div>
                        </Link>
                        <div className="flex gap-4 justify-end">
                          <div>
                            <p className="md:text-1xl text-[14px] font-normal">
                              4s/6s
                            </p>
                            <p className="md:text-2xl text-[16px] font-semibold">
                              6/0
                            </p>
                          </div>
                          <div className="text-end">
                            <p className="md:text-1xl text-[14px] font-normal">
                              SR
                            </p>
                            <p className="md:text-2xl text-[16px] font-semibold">
                              153.63
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:flex items-start py-3 md:px-3 gap-[21px]">
                    <div className="flex items-center gap-[10px] md:py-4 pb-4">
                      <p className="text-[16px] font-semibold">9.4</p>
                      <p className="text-[16px] font-semibold px-[11px] py-[2px] text-white bg-[#EB9D29] rounded-lg">
                        4{" "}
                      </p>
                    </div>
                    <div>
                      <div className="text-[14px] font-normal">
                        Taskin Ahmed to Hardik Pandya,{" "}
                        <span className="text-[14px] font-normal text-black">
                          {" "}
                          Four
                        </span>
                      </div>
                      <p className="text-[14px] font-normal">
                        Four !! fast ball, good length, on the stumps, Hardik Pandya
                        hangs in the crease, plays uppercut in the air to deep fine
                        leg. Ball finds the ropes for four.
                      </p>
                    </div>
                  </div>
                  <div className="border-t-[1px] border-[#E7F2F4]" />
                  <div className="md:flex items-start py-3 md:px-3 gap-[21px]">
                    <div className="flex items-center gap-[10px] md:py-4 pb-4">
                      <p className="text-[16px] font-semibold">9.4</p>
                      <p className="text-[16px] font-semibold px-[11px] py-[2px] text-white bg-[#EB9D29] rounded-lg">
                        4{" "}
                      </p>
                    </div>
                    <div>
                      <div className="text-[14px] font-normal">
                        Taskin Ahmed to Hardik Pandya,{" "}
                        <span className="text-[14px] font-normal">Four</span>
                      </div>
                      <p className="text-[14px] font-normal">
                        Four !! fast ball, good length, on the stumps, Hardik Pandya
                        hangs in the crease, plays uppercut in the air to deep fine
                        leg. Ball finds the ropes for four.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg bg-white p-4">
                  <div className="flex md:flex-row flex-col justify-between md:items-center mb-4 gap-2">
                    <div className="text-[14px] font-normal">
                      IND 1st Innings : 235/4
                    </div>
                    <div className="text-[14px] font-normal">
                      10{" "}
                      <span className="text-[#909090] font-medium text-[13px]">
                        End Of Over
                      </span>
                    </div>
                    <div className="text-[14px] font-normal text-black">
                      6 4 4 1 4 4
                    </div>
                    <div className="text-[14px] font-normal">
                      R Sharma: 25 <span className="text-[#909090]">(46)</span> | S
                      Gill: 98 <span className="text-[#909090]">(106) </span>
                    </div>
                    <div className="text-[14px] font-normal">
                      Taskin Ahmed{" "}
                      <span className="text-[#909090]">2.5-0-45-0</span>
                    </div>
                  </div>
                  <div className="border-t-[1px] border-[#E7F2F4]" />
                  <div className="md:flex items-start py-3 md:px-3 gap-[21px]">
                    <div className="flex items-center gap-[10px] md:py-4 pb-4">
                      <p className="text-[16px] font-semibold">9.6</p>
                      <p className="text-[16px] font-semibold px-[11px] py-[2px] text-white bg-[#13b76dbd] rounded-lg">
                        6{" "}
                      </p>
                    </div>
                    <div>
                      <div className="text-gray-500 font-normal text-[14px] mb-2">
                        Taskin Ahmed To Hardik Pandya,{" "}
                        <span className="text-[14px] font-normal text-black">
                          {" "}
                          Six
                        </span>
                      </div>
                      <p className="text-[14px] font-normal">
                        Six !! With A Brilliant Fast Ball On The Stumps, Hardik
                        Pandya Hangs In The Crease And Showcases Power-Hitting
                        Prowess As Batter Unleashes A Spectacular Pull To Deep Mid
                        Wicket For A Colossal Maximum!
                      </p>
                    </div>
                  </div>
                  <div className="border-t-[1px] border-[#E7F2F4]" />
                  <div className="md:flex items-start py-3 md:px-3 gap-[21px]">
                    <div className="flex items-center gap-[10px] md:py-4 pb-4">
                      <p className="text-[16px] font-semibold">9.5</p>
                      <p className="text-[16px] font-semibold px-[11px] py-[2px] text-white bg-[#EB9D29] rounded-lg">
                        4{" "}
                      </p>
                    </div>
                    <div>
                      <div className="text-gray-500 font-normal text-[14px] mb-2">
                        Taskin Ahmed to Hardik Pandya,{" "}
                        <span className="text-[14px] font-normal text-black">
                          {" "}
                          Four
                        </span>
                      </div>
                      <p className="text-[14px] font-normal">
                        Four !! fast ball, good length, on the off stump, Hardik
                        Pandya hangs in the crease, plays cut in the air to deep
                        point. Ball finds the ropes for four.
                      </p>
                    </div>
                  </div>
                  <div className="border-t-[1px] border-[#E7F2F4]" />
                  <div className="md:flex items-start py-3 md:px-3 gap-[21px]">
                    <div className="flex items-center gap-[10px] md:py-4 pb-4">
                      <p className="text-[16px] font-semibold">9.4</p>
                      <p className="text-[16px] font-semibold px-[11px] py-[2px] text-white bg-[#EB9D29] rounded-lg">
                        4{" "}
                      </p>
                    </div>
                    <div>
                      <div className="text-gray-500 font-normal text-[14px] mb-2">
                        Taskin Ahmed to Hardik Pandya,{" "}
                        <span className="text-[14px] font-normal text-black">
                          {" "}
                          Four
                        </span>
                      </div>
                      <p className="text-[14px] font-normal">
                        Four !! fast ball, good length, on the stumps, Hardik Pandya
                        hangs in the crease, plays uppercut in the air to deep fine
                        leg. Ball finds the ropes for four.
                      </p>
                    </div>
                  </div>
                  <div className="border-t-[1px] border-[#E7F2F4]" />
                  <div className="md:flex items-start py-3 md:px-3 gap-[21px]">
                    <div className="flex items-center gap-[10px] md:py-4 pb-4">
                      <p className="text-[16px] font-semibold">9.3</p>
                      <p className="text-[16px] font-semibold px-[11px] py-[2px] text-white bg-[#bec2d3] rounded-lg">
                        1{" "}
                      </p>
                    </div>
                    <div>
                      <div className="text-gray-500 font-normal text-[14px] mb-2">
                        Taskin Ahmed to Nitish Kumar Reddy,{" "}
                        <span className="text-[14px] font-normal text-black">
                          {" "}
                          1 Run
                        </span>
                      </div>
                      <p className="text-[14px] font-normal">
                        Taskin Ahmed delivers fast ball at full length, Nitish Kumar
                        Reddy hangs in the crease and plays the shot, but the ball
                        goes straight to the fielder at deep mid wicket for 1 run.
                      </p>
                    </div>
                  </div>
                  <div className="border-t-[1px] border-[#E7F2F4]" />
                  <div className="md:flex items-start py-3 md:px-3 gap-[21px]">
                    <div className="flex items-center gap-[10px] md:py-4 pb-4">
                      <p className="text-[16px] font-semibold">9.2</p>
                      <p className="text-[16px] font-semibold px-[11px] py-[2px] text-white bg-[#EB9D29] rounded-lg">
                        4{" "}
                      </p>
                    </div>
                    <div>
                      <div className="text-gray-500 font-normal text-[14px] mb-2">
                        Taskin Ahmed to Hardik Pandya,{" "}
                        <span className="text-[14px] font-normal text-black">
                          {" "}
                          Four
                        </span>
                      </div>
                      <p className="text-[14px] font-normal">
                        Four !! fast ball, good length, on the stumps, Hardik Pandya
                        hangs in the crease, plays uppercut in the air to deep fine
                        leg. Ball finds the ropes for four.
                      </p>
                    </div>
                  </div>
                  <div className="border-t-[1px] border-[#E7F2F4]" />
                  <div className="md:flex items-start py-3 md:px-3 gap-[21px]">
                    <div className="flex items-center gap-[10px] md:py-4 pb-4">
                      <p className="text-[16px] font-semibold">7.1</p>
                      <p className="text-[16px] font-semibold px-[11px] py-[2px] text-white bg-[#EB9D29] rounded-lg">
                        4{" "}
                      </p>
                    </div>
                    <div>
                      <div className="text-gray-500 font-normal text-[14px] mb-2">
                        Taskin Ahmed to Hardik Pandya,{" "}
                        <span className="text-[14px] font-normal text-black">
                          {" "}
                          Four
                        </span>
                      </div>
                      <p className="text-[14px] font-normal">
                        Four !! fast ball, good length, on the stumps, Hardik Pandya
                        hangs in the crease, plays uppercut in the air to deep fine
                        leg. Ball finds the ropes for four.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="my-4">
                  <div
                    className="text-white p-4 rounded-lg"
                    style={{
                      background: "linear-gradient(90deg, #2D71D6 0%, #114DA6 100%)"
                    }}
                  >
                    <h2 className="text-[14px] font-normal mb-4">
                      New bowler spell
                    </h2>
                    <div className="flex items-center justify-between">
                      <Link href="/player/playername/overview">
                      <div className="flex items-center">
                        
                        <Image
                          src="/assets/img/player/14.png"
                          width={65} height={65} alt="Player"
                          className="md:mr-4 mr-2 h-[40px] md:h-[auto]"
                        />
                       
                        <div>
                          <h2 className="md:text-xl text-[16px] font-semibold">
                            M Rahman
                          </h2>
                          <p className="text-[14px] font-normal">
                            35 year (bowler)
                          </p>
                        </div>
                      </div>
                      </Link>
                      
                      <div className="flex gap-3 items-center">
                        <p className="text-1xl font-normal">Best</p>
                        <h1 className="md:text-2xl text-[16px] font-semibold">
                          4/12
                        </h1>
                      </div>
                    </div>
                    {/* Player Stats */}
                    <div className="mt-4 md:flex grid grid-cols-12 justify-between md:gap-4 text-center border-t border-[#9d9d9d] pt-3">
                      <div className="col-span-6 flex gap-2 items-center">
                        <p className="md:text-[14px] text-[13px] font-normal">
                          MATCHES
                        </p>
                        <h2 className="md:text-xl text-[14px] md:font-bold font-semibold">
                          79
                        </h2>
                      </div>
                      <div className="col-span-6 flex gap-2 items-center justify-end">
                        <p className="md:text-[14px] text-[13px] font-normal">
                          Wickets
                        </p>
                        <h2 className="md:text-xl text-[14px] md:font-bold font-semibold">
                          123
                        </h2>
                      </div>
                      <div className="col-span-6 flex gap-2 items-center">
                        <p className="md:text-[14px] text-[13px] font-normal">
                          Econ
                        </p>
                        <h2 className="md:text-xl text-[14px] md:font-bold font-semibold">
                          5.00
                        </h2>
                      </div>
                      <div className="col-span-6 flex gap-2 items-center justify-end">
                        <p className="md:text-[14px] text-[13px] font-normal">
                          AVG
                        </p>
                        <h2 className="md:text-xl text-[14px] md:font-bold font-semibold">
                          26.00
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>

      </div>
    </section>

  )
}
