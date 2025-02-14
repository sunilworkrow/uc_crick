import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Banner() {
    return (
        <div>
            <div className="rounded-lg bg-[#ffffff] p-4 mb-4">
                <Link href="#">
                    <div className="flex items-center gap-2 mb-2">
                        <Image src="/assets/img/flag/b-8.png" className="h-[30px]" width={30} height={30} alt="" />
                        <h3 className="text-1xl font-semibold ">India Cricket Team</h3>
                    </div>
                </Link>
                <div className="border-t-[1px] border-[#E4E9F0]" />
                <p className="text-gray-500 font-normal pt-2">
                    The Indian Cricket Team is governed by the Board of Control for
                    Cricket in India (BCCI), the governing body of cricket in the country.
                    The first recorded match in India was in 1721 when a group of sailors
                    gathered to play in Western India. However, it was only on 25th June
                    1932 at the famous Lord cricket ground in England that a national
                    team played an official Test match. Only the sixth team to...
                </p>
            </div>
        </div>
    )
}
