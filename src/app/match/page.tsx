import React from 'react'
import MoreInfo from './matchComponents/MoreInfo'
import Layout from "@/app/components/Layout";
import Image from "next/image";
import Live from './matchComponents/Live';
import Scorecard from './matchComponents/Scorecard';



export default function page() {
  return (
    <Layout>

      <section className="bg-[#0E2149] border-[1px] border-[#E4E9F01A] lg:px-0 px-3">
        <div className="lg:w-[1000px] mx-auto">
          <div className="md:flex justify-between items-center md:py-0 py-4">
            <div className="flex items-center text-1xl text-[#FE4848] font-bold uppercase relative">
              <Image src="/assets/img/home/blinking-dot.gif" className="h-[20px]" width={20} height={20} alt="" />
              LIVE NOW
            </div>
            <div className="text-[#8192B4] font-normal  text-1xl md:text-center md:mx-0 my-3">
              Bangladesh in India August,&nbsp;2nd Test,{" "}
              <span className="font-semibold text-[#b9b9b9]"> Day 4-Session 3</span>
            </div>
            <div className="flex text-[#8192B4] text-1xl font-normal md:justify-start">
              <Image src="/assets/img/clander.png" className="mr-2" width={20} height={20} alt="" />
              1-5 oct 2024
            </div>
          </div>
        </div>
        <div className="border-t-[1px] border-[#E4E9F01A]">
          <div className="lg:w-[1000px] mx-auto md:py-9 tracking-[1px]">

            <div className="hidden md:flex py-8 justify-between items-center">
              <div className="flex gap-2 flex-row text-[#BDCCECA8] uppercase items-center w-full">
                <Image
                  className="lg:h-[42px] lg:w-[42px] h-[30px] w-[30px]"
                  src="/assets/img/flg-1.png"
                  width={30} height={30} alt="ind"
                />
                <div className="flex md:flex-col md:items-start items-center md:gap-0 gap-2">
                  <p className="text-[#BDCCECA8] font-bold md:text-[17px] lg:text-[19px] text-[14px] font-semibold uppercase">
                    IND
                  </p>
                  <p className="lg:text-[18px] text-[16px] font-semibold">
                    139/4 <span className="text-[13px] font-medium">(42.0)</span>{" "}
                    &amp; 222 <span className="text-[13px] font-medium">(66.2)</span>
                  </p>
                </div>
              </div>
              <div className="text-[#8192B4] font-normal text-center w-full text-center md:my-0 my-4">
                <p className="text-[#FFBD71] lg:text-[20px] text-[16px] font-semibold">
                  Day 4-Session 3
                </p>
                <p className="text-[#C1CEEA] text-[14px] ">
                  CRR: 3.8 IND trail by 299 runs.
                </p>
              </div>
              <div className="flex gap-2 flex-row flex-row-reverse md:flex-row  items-center text-[#8192B4] font-normal w-full justify-end">
                <div className="flex md:flex-col md:items-end items-center md:gap-0 gap-2">
                  <p className="text-[#BDCCECA8] font-bold md:text-[17px] lg:text-[19px] text-[14px] font-semibold uppercase">
                    BAN
                  </p>
                  <p className="lg:text-[18px] text-[16px] font-semibold">
                    160<span className="text-[14px] font-medium"> (63.0)</span>{" "}
                    &amp; Yet To Bet
                  </p>
                </div>
                <Image
                  src="/assets/img/ban.png"
                  className="lg:h-[42px] lg:w-[42px] h-[30px] w-[30px]"
                  width={30} height={30} alt="ban"
                />
              </div>
            </div>

            <div className="md:hidden block bg-[white] p-4 rounded-md mb-4">
              <div>
                <div>
                  <div className="flex items-center text-[14px] text-[#FE4848] font-semibold  relative">
                    <Image src="/assets/img/home/blinking-dot.gif" className="h-[15px]" width={30} height={30} alt="" />
                    Live

                  </div>

                  <div className="flex items-center justify-between">

                    <div className="flex gap-2 flex-row  uppercase items-center w-full">
                      <Image
                        className="lg:h-[42px] lg:w-[42px] h-[40px] w-[40px]"
                        src="/assets/img/flg-1.png"
                        width={30} height={30} alt="ind"
                      />
                      <div className="flex flex-col items-start gap-0">
                        <p className="text-[14px] font-semibold uppercase">
                          IND
                        </p>
                        <p className="lg:text-[18px] text-[18px] font-semibold">
                          139/4 <span className="text-[13px] font-medium">(42.0)</span>

                        </p>
                      </div>
                    </div>

                    <div className='border-r-[1px] border-[#e5e5e5] h-[60px]'></div>

                    <div className="w-full text-center">
                      <h2 className="text-[24px] font-semibold text-[#342df2]">No Ball</h2>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-3 text-[14px]">
                    <p>CRR : <span>8.69</span></p>
                    <p>Over left Today : <span>36.0</span></p>
                  </div>

                </div>

                <div>

                </div>


              </div>
            </div>

          </div>
        </div>
      </section>

      {/* <MoreInfo></MoreInfo> */}
      {/* <Live></Live> */}

      <Scorecard></Scorecard>

    </Layout>
  )
}
