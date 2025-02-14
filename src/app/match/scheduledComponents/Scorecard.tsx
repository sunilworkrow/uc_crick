import React from 'react'
import Link from 'next/link'

export default function Scorecard() {
  return (
    <section className="lg:w-[1000px] mx-auto md:mb-0 mb-4 px-2 lg:px-0">
    <div id="tabs" className="my-4">
                    <div className="flex text-1xl space-x-8 p-2 bg-[#ffffff] rounded-lg overflow-auto">
                        <Link href="/match/scheduled/info">
                            <button
                                className="font-medium py-2 px-3 whitespace-nowrap "
                            >
                                More Info
                            </button>
                        </Link>
                        <Link href="/match/scheduled/live">
                            <button
                               
                                className="font-medium py-2 px-3 whitespace-nowrap"
                            >
                                Live
                            </button>
                        </Link>
                        <Link href="/match/scheduled/scorecard">
                            <button
                               
                                className="font-medium py-2 px-3 whitespace-nowrap bg-[#1A80F8] text-white rounded-md"
                            >
                                Scorecard
                            </button>
                        </Link>
                        <Link href="/match/scheduled/squad">
                            <button
                               
                                className="font-medium py-2 px-3 whitespace-nowrap"
                            >
                                Squads
                            </button>
                        </Link>
                        <Link href="/match/scheduled/points-table">
                            <button
                                
                                className="font-medium py-2 px-3 whitespace-nowrap"
                            >
                                Points Table
                            </button>
                        </Link>
                        <Link href="/match/scheduled/stats">
                            <button
                               
                                className="font-medium py-2 px-3 whitespace-nowrap"
                            >
                                Stats
                            </button>
                        </Link>
                        <Link href="/match/scheduled/fantasy-tips">
                            <button
                             
                                className="font-medium py-2 px-3 whitespace-nowrap"
                            >
                                Fantasy Tips
                            </button>
                        </Link>
                    </div>
                </div>

    <div className='bg-white p-4 rounded-md mb-8'>
          <div className='text-[18px] text-center text-red-600 font-semibold'>
          The match is yet to begin on [date] at [time].
          Stay tuned for live updates once the game starts!
          </div>
    </div>
    
</section>

  )
}
