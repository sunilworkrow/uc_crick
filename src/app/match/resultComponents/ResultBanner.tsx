import React from 'react'
import Image from 'next/image'

export default function ResultBanner() {
  return (
    
    <section className="bg-[#0E2149] border-[1px] border-[#E4E9F01A] lg:px-0 px-3">
    <div className="lg:w-[1000px] mx-auto">
        <div className="md:flex justify-between items-center md:py-0 py-4">
            <div className=" text-1xl text-[#13b76dbd] font-bold uppercase ">
                <span className="h-[10px] w-[10px] inline-block	bg-[#13b76dbd] rounded-full" /> RESULT
            </div>
            <div className="text-[#8192B4] font-normal  text-1xl md:text-center md:mx-0 my-3">
                Bangladesh in India August,&nbsp;2nd Test,{" "}
                <span className="font-semibold"> Day 4-Session 3 </span>
            </div>
            <div className="flex text-[#8192B4] text-1xl font-normal  md:justify-start">
                <Image src="/assets/img/clander.png" className="mr-2" width={20} height={10} alt="" />
                1-5 oct 2024
            </div>
        </div>
    </div>
    <div className="border-t-[1px] border-[#E4E9F01A]">
        <div className="lg:w-[1000px] mx-auto md:py-8 tracking-[1px]">
            <div className="md:flex py-8 justify-between items-center">
                <div className="flex gap-2 flex-row text-[#BDCCECA8] uppercase items-center w-full">
                    <Image
                        className="lg:h-[42px] lg:w-[42px] h-[30px] w-[30px]"
                        src="/assets/img/flg-1.png"
                        width={42} height={42} alt="ind"
                    />
                    <div className="flex md:flex-col md:items-start items-center md:gap-0 gap-2">
                        <p className="text-[#BDCCECA8] md:text-[17px] lg:text-[19px] text-[14px] font-semibold uppercase">
                            IND
                        </p>
                        <p className="lg:text-[21px] text-[17px] font-semibold">
                            139/4 <span className="text-[14px] font-medium">(42.0)</span>{" "}
                            &amp; 222{" "}
                            <span className="text-[14px] font-medium">(66.2)</span>
                        </p>
                    </div>
                </div>
                <div className="text-[#8192B4] font-normal w-full text-center md:my-0 my-4 flex gap-2 items-center">
                    <p className="text-[#13b76dbd] lg:text-[24px] text-[16px] font-semibold">
                        IND WON BY 245 RUN
                    </p>
                    <Image src="/assets/img/home/win-2.png" width={40} height={40} alt="" />
                </div>
                <div className="flex gap-2  flex-row-reverse md:flex-row   items-center text-[#8192B4] font-normal w-full justify-end">
                    <div className="flex md:flex-col md:items-end items-center md:gap-0 gap-2">
                        <p className="text-[#BDCCECA8] md:text-[17px] lg:text-[19px] text-[14px] font-semibold uppercase">
                            BAN
                        </p>
                        <p className="lg:text-[21px] text-[17px] font-semibold">
                            160<span className="text-[14px] font-medium"> (63.0)</span>
                            &amp; Yet To Bet
                        </p>
                    </div>
                    <Image
                        src="/assets/img/ban.png"
                        className="lg:h-[42px] lg:w-[42px] h-[30px] w-[30px]"
                        width={42} height={42} alt="ban"
                    />
                </div>
            </div>
        </div>
    </div>
</section>

  )
}
