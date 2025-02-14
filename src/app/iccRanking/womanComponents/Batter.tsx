"use client"

import React, { useState } from 'react'

import Link from 'next/link'


export default function Team() {


    const [ODIMatch, setODIMatch] = useState('ODI');
  
   
  
  
    const matchCustomBox = (content: React.SetStateAction<string>) => {
      setODIMatch(content);
    };



    return (


        <section className="lg:w-[1000px] mx-auto md:mb-0 mb-4 px-2 lg:px-0">
           <div id="tabs" className="my-4">
                <div className="flex text-1xl space-x-8 p-2 bg-[#ffffff] rounded-lg overflow-auto">
                    <Link href="/iccRanking/man/team">
                    <button
                        className="font-medium py-2 px-5 whitespace-nowrap "
                    >
                        Man
                    </button>
                    </Link>

                    <Link href="/iccRanking/woman/team">
                    <button
                        className="font-medium py-2 px-5 whitespace-nowrap bg-[#1A80F8] text-white rounded-md"
                    >
                        Woman
                    </button>
                    </Link>
                </div>
            </div>



            <div id="info">
            <div className="cust-box-click-container">
              <div className="flex gap-4 items-center my-2 py-2 overflow-auto">
                <Link href="/iccRanking/woman/team">
                <button className="cust-box-click-button bg-[#ffffff] font-medium text-[#6A7586] px-7 py-1 rounded-full whitespace-nowrap"
                >
                  <span>Team</span>
                </button>
                </Link>
                <Link href="/iccRanking/woman/batter">
                <button className="cust-box-click-button font-medium px-7 py-1 rounded-full whitespace-nowrap bg-[#081736]  text-white"
                  
                >
                  <span>Batter</span>
                </button>
                </Link>
                <Link href="/iccRanking/woman/bowler">
                <button className="cust-box-click-button bg-[#ffffff] font-medium text-[#6A7586] px-7 py-1 rounded-full whitespace-nowrap"
                 
                >
                  <span>Bowler</span>
                </button>
                </Link> 
                <Link href="/iccRanking/woman/all-rounder">
                <button className="cust-box-click-button bg-[#ffffff] font-medium text-[#6A7586] px-7 py-1 rounded-full whitespace-nowrap"
                  
                >
                  <span>All Rounder</span>
                </button>
                </Link>
              </div>

              <div className="flex gap-4 items-center my-2 py-2 overflow-auto">

                <button
                  className={`cust-box-click-button font-medium px-7 py-1 rounded-full whitespace-nowrap ${ODIMatch === 'ODI' ? 'bg-[#081736] text-white' : 'bg-[#ffffff] text-[#6A7586]'
                    }`}
                  onClick={() => matchCustomBox('ODI')}
                >
                  <span>ODI</span>
                </button>
                <button
                  className={`cust-box-click-button font-medium px-7 py-1 rounded-full whitespace-nowrap ${ODIMatch === 't20' ? 'bg-[#081736] text-white' : 'bg-[#ffffff] text-[#98a8c0]'
                    }`}
                  onClick={() => matchCustomBox('t20')}
                >
                  <span>T20</span>
                </button>
                <button
                  className={`cust-box-click-button font-medium px-7 py-1 rounded-full whitespace-nowrap ${ODIMatch === 'test' ? 'bg-[#081736] text-white' : 'bg-[#ffffff] text-[#6A7586]'
                    }`}
                  onClick={() => matchCustomBox('test')}
                >
                  <span>Test</span>
                </button>
              </div>


              <div className="cust-box-click-team">

                <div className="">
                  <div className={`cust-box-click-content ${ODIMatch === 'ODI' ? '' : 'hidden'} mt-4`}>

                    <div className="md:col-span-4 col-span-12">
                      <div className="bg-white rounded-lg p-4 overflow-hidden">
                        <h3 className="text-[15px] font-semibold  pl-[7px] border-l-[3px] mb-3 border-[#229ED3]">
                          ODI
                        </h3>
                        <div className="border-t-[1px] border-[#E4E9F0]" />
                        <div
                          className="flex items-center rounded-lg justify-between text-white mt-3 p-4"
                          style={{
                            background: "linear-gradient(90deg, #3C1492 0%, #6D1E93 100%)"
                          }}
                        >
                          <div className="flex items-center">
                            <img
                              src="/assets/img/player/r-1.png"
                              alt="Player"
                              className="w-12 h-12 rounded-lg mr-3"
                            />
                            <div>
                              <h3 className="text-[14px] font-normal">Keshav</h3>
                              <h3 className="text-[14px] font-normal">Maharaj</h3>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-[14px] font-normal">Rating</p>
                            <p className="md:text-[17px] text-[15px] font-semibold">674</p>
                          </div>
                        </div>
                        <div className="py-4">
                          <table className="w-full text-left text-sm text-gray-600">
                            <thead className="bg-gray-100">
                              <tr>
                                <th className="py-2 px-2 font-medium text-gray-700">Rank</th>
                                <th className="font-medium text-gray-700" />
                                <th className="py-2 px-3 font-medium text-gray-700">Name</th>
                                <th className="py-2 px-3 font-medium text-gray-700">Team</th>
                                <th className="py-2 px-3 font-medium text-gray-700">Rating</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="text-center">2</td>
                                <td className="px-1">-</td>
                                <td className="py-2 px-3 font-medium text-[#3d3d3d]">R Khan</td>
                                <td className="py-2 px-3">AFG</td>
                                <td className="py-2 px-3">668</td>
                              </tr>
                              <tr>
                                <td className="text-center">3</td>
                                <td className="px-1">-</td>
                                <td className="py-2 px-3 font-medium text-[#3d3d3d]">K Yadav</td>
                                <td className="py-2 px-3">IND</td>
                                <td className="py-2 px-3">665</td>
                              </tr>
                              <tr>
                                <td className="text-center">4</td>
                                <td className="px-1">-</td>
                                <td className="py-2 px-3 font-medium text-[#3d3d3d]">A Zampa</td>
                                <td className="py-2 px-3">AUS</td>
                                <td className="py-2 px-3">663</td>
                              </tr>
                              <tr>
                                <td className="text-center">5</td>
                                <td className="px-1">-</td>
                                <td className="py-2 px-3 font-medium text-[#3d3d3d]">
                                  J Hazlewood
                                </td>
                                <td className="py-2 px-3">AUS</td>
                                <td className="py-2 px-3">656</td>
                              </tr>
                              <tr>
                                <td className="text-center">6</td>
                                <td className="px-1">-</td>
                                <td className="py-2 px-3 font-medium text-[#3d3d3d]">
                                  B Scholtz
                                </td>
                                <td className="py-2 px-3">PAK</td>
                                <td className="py-2 px-3">654</td>
                              </tr>
                              <tr>
                                <td className="text-center">7</td>
                                <td className="px-1">-</td>
                                <td className="py-2 px-3 font-medium text-[#3d3d3d]">S Afridi</td>
                                <td className="py-2 px-3">NAM</td>
                                <td className="py-2 px-3">650</td>
                              </tr>
                              <tr>
                                <td className="text-center">8</td>
                                <td className="px-1">-</td>
                                <td className="py-2 px-3 font-medium text-[#3d3d3d]">J Bumrah</td>
                                <td className="py-2 px-3">IND</td>
                                <td className="py-2 px-3">643</td>
                              </tr>
                              <tr>
                                <td className="text-center">9</td>
                                <td className="px-1">-</td>
                                <td className="py-2 px-3 font-medium text-[#3d3d3d]">M Siraj</td>
                                <td className="py-2 px-3">IND</td>
                                <td className="py-2 px-3">643</td>
                              </tr>
                              <tr>
                                <td className="text-center">10</td>
                                <td className="px-1">-</td>
                                <td className="py-2 px-3 font-medium text-[#3d3d3d]">T Boult</td>
                                <td className="py-2 px-3">NZ</td>
                                <td className="py-2 px-3">642</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        {/* Footer Button */}
                        <div className="px-4 text-center">
                          <button className="px-8 bg-[#081736] font-semibold text-white py-2 rounded hover:bg-blue-700">
                            View Full List
                          </button>
                        </div>
                      </div>
                    </div>


                  </div>
                  <div className={`cust-box-click-content ${ODIMatch === 't20' ? '' : 'hidden'} mt-4`}>

                    <div className="md:col-span-4 col-span-12">
                      <div className="bg-white rounded-lg p-4 overflow-hidden">
                        <h3 className="text-[15px] font-semibold  pl-[7px] border-l-[3px] mb-3 border-[#229ED3]">
                          T20
                        </h3>
                        <div className="border-t-[1px] border-[#E4E9F0]" />
                        <div
                          className="flex items-center rounded-lg justify-between text-white mt-3 p-4"
                          style={{
                            background: "linear-gradient(90deg, #2D71D6 0%, #114DA6 100%)"
                          }}
                        >
                          <div className="flex items-center">
                            <img
                              src="/assets/img/player/r-1.png"
                              alt="Player"
                              className="w-12 h-12 rounded-lg mr-3"
                            />
                            <div>
                              <h3 className="text-[14px] font-normal">Keshav</h3>
                              <h3 className="text-[14px] font-normal">Maharaj</h3>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-[14px] font-normal">Rating</p>
                            <p className="md:text-[17px] text-[15px] font-semibold">674</p>
                          </div>
                        </div>
                        <div className="py-4">
                          <table className="w-full text-left text-sm text-gray-600">
                            <thead className="bg-gray-100">
                              <tr>
                                <th className="py-2 px-2 font-medium text-gray-700">Rank</th>
                                <th className="font-medium text-gray-700" />
                                <th className="py-2 px-3 font-medium text-gray-700">Name</th>
                                <th className="py-2 px-3 font-medium text-gray-700">Team</th>
                                <th className="py-2 px-3 font-medium text-gray-700">Rating</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="text-center">2</td>
                                <td className="px-1">-</td>
                                <td className="py-2 px-3 font-medium text-[#3d3d3d]">R Khan</td>
                                <td className="py-2 px-3">AFG</td>
                                <td className="py-2 px-3">668</td>
                              </tr>
                              <tr>
                                <td className="text-center">3</td>
                                <td className="px-1">-</td>
                                <td className="py-2 px-3 font-medium text-[#3d3d3d]">K Yadav</td>
                                <td className="py-2 px-3">IND</td>
                                <td className="py-2 px-3">665</td>
                              </tr>
                              <tr>
                                <td className="text-center">4</td>
                                <td className="px-1">-</td>
                                <td className="py-2 px-3 font-medium text-[#3d3d3d]">A Zampa</td>
                                <td className="py-2 px-3">AUS</td>
                                <td className="py-2 px-3">663</td>
                              </tr>
                              <tr>
                                <td className="text-center">5</td>
                                <td className="px-1">-</td>
                                <td className="py-2 px-3 font-medium text-[#3d3d3d]">
                                  J Hazlewood
                                </td>
                                <td className="py-2 px-3">AUS</td>
                                <td className="py-2 px-3">656</td>
                              </tr>
                              <tr>
                                <td className="text-center">6</td>
                                <td className="px-1">-</td>
                                <td className="py-2 px-3 font-medium text-[#3d3d3d]">
                                  B Scholtz
                                </td>
                                <td className="py-2 px-3">PAK</td>
                                <td className="py-2 px-3">654</td>
                              </tr>
                              <tr>
                                <td className="text-center">7</td>
                                <td className="px-1">-</td>
                                <td className="py-2 px-3 font-medium text-[#3d3d3d]">S Afridi</td>
                                <td className="py-2 px-3">NAM</td>
                                <td className="py-2 px-3">650</td>
                              </tr>
                              <tr>
                                <td className="text-center">8</td>
                                <td className="px-1">-</td>
                                <td className="py-2 px-3 font-medium text-[#3d3d3d]">J Bumrah</td>
                                <td className="py-2 px-3">IND</td>
                                <td className="py-2 px-3">643</td>
                              </tr>
                              <tr>
                                <td className="text-center">9</td>
                                <td className="px-1">-</td>
                                <td className="py-2 px-3 font-medium text-[#3d3d3d]">M Siraj</td>
                                <td className="py-2 px-3">IND</td>
                                <td className="py-2 px-3">643</td>
                              </tr>
                              <tr>
                                <td className="text-center">10</td>
                                <td className="px-1">-</td>
                                <td className="py-2 px-3 font-medium text-[#3d3d3d]">T Boult</td>
                                <td className="py-2 px-3">NZ</td>
                                <td className="py-2 px-3">642</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                        <div className="px-4 text-center">
                          <button className="px-8 bg-[#081736] font-semibold text-white py-2 rounded hover:bg-blue-700">
                            View Full List
                          </button>
                        </div>
                      </div>
                    </div>


                  </div>

                  <div className={`cust-box-click-content ${ODIMatch === 'test' ? '' : 'hidden'} mt-4`}>

                    <div className="md:col-span-4 col-span-12">
                      <div className="bg-white rounded-lg p-4 overflow-hidden">
                        <h3 className="text-[15px] font-semibold  pl-[7px] border-l-[3px] mb-3 border-[#229ED3]">
                          Test
                        </h3>
                        <div className="border-t-[1px] border-[#E4E9F0]" />
                        <div
                          className="flex items-center rounded-lg justify-between text-white mt-3 p-4"
                          style={{
                            background: "linear-gradient(90deg, #D20A5E 0%, #9C0C0C 100%)"
                          }}
                        >
                          <div className="flex items-center">
                            <img
                              src="/assets/img/player/r-1.png"
                              alt="Player"
                              className="w-12 h-12 rounded-lg mr-3"
                            />
                            <div>
                              <h3 className="text-[14px] font-normal">Keshav</h3>
                              <h3 className="text-[14px] font-normal">Maharaj</h3>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-[14px] font-normal">Rating</p>
                            <p className="md:text-[17px] text-[15px] font-semibold">674</p>
                          </div>
                        </div>
                        <div className="py-4">
                          <table className="w-full text-left text-sm text-gray-600">
                            <thead className="bg-gray-100">
                              <tr>
                                <th className="py-2 px-2 font-medium text-gray-700">Rank</th>
                                <th className="font-medium text-gray-700" />
                                <th className="py-2 px-3 font-medium text-gray-700">Name</th>
                                <th className="py-2 px-3 font-medium text-gray-700">Team</th>
                                <th className="py-2 px-3 font-medium text-gray-700">Rating</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="text-center">2</td>
                                <td className="px-1">-</td>
                                <td className="py-2 px-3 font-medium text-[#3d3d3d]">R Khan</td>
                                <td className="py-2 px-3">AFG</td>
                                <td className="py-2 px-3">668</td>
                              </tr>
                              <tr>
                                <td className="text-center">3</td>
                                <td className="px-1">-</td>
                                <td className="py-2 px-3 font-medium text-[#3d3d3d]">K Yadav</td>
                                <td className="py-2 px-3">IND</td>
                                <td className="py-2 px-3">665</td>
                              </tr>
                              <tr>
                                <td className="text-center">4</td>
                                <td className="px-1">-</td>
                                <td className="py-2 px-3 font-medium text-[#3d3d3d]">A Zampa</td>
                                <td className="py-2 px-3">AUS</td>
                                <td className="py-2 px-3">663</td>
                              </tr>
                              <tr>
                                <td className="text-center">5</td>
                                <td className="px-1">-</td>
                                <td className="py-2 px-3 font-medium text-[#3d3d3d]">
                                  J Hazlewood
                                </td>
                                <td className="py-2 px-3">AUS</td>
                                <td className="py-2 px-3">656</td>
                              </tr>
                              <tr>
                                <td className="text-center">6</td>
                                <td className="px-1">-</td>
                                <td className="py-2 px-3 font-medium text-[#3d3d3d]">
                                  B Scholtz
                                </td>
                                <td className="py-2 px-3">PAK</td>
                                <td className="py-2 px-3">654</td>
                              </tr>
                              <tr>
                                <td className="text-center">7</td>
                                <td className="px-1">-</td>
                                <td className="py-2 px-3 font-medium text-[#3d3d3d]">S Afridi</td>
                                <td className="py-2 px-3">NAM</td>
                                <td className="py-2 px-3">650</td>
                              </tr>
                              <tr>
                                <td className="text-center">8</td>
                                <td className="px-1">-</td>
                                <td className="py-2 px-3 font-medium text-[#3d3d3d]">J Bumrah</td>
                                <td className="py-2 px-3">IND</td>
                                <td className="py-2 px-3">643</td>
                              </tr>
                              <tr>
                                <td className="text-center">9</td>
                                <td className="px-1">-</td>
                                <td className="py-2 px-3 font-medium text-[#3d3d3d]">M Siraj</td>
                                <td className="py-2 px-3">IND</td>
                                <td className="py-2 px-3">643</td>
                              </tr>
                              <tr>
                                <td className="text-center">10</td>
                                <td className="px-1">-</td>
                                <td className="py-2 px-3 font-medium text-[#3d3d3d]">T Boult</td>
                                <td className="py-2 px-3">NZ</td>
                                <td className="py-2 px-3">642</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                        <div className="px-4 text-center">
                          <button className="px-8 bg-[#081736] font-semibold text-white py-2 rounded hover:bg-blue-700">
                            View Full List
                          </button>
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
