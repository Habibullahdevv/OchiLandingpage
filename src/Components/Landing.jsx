import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

const Landing = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
      <div className="textstructure uppercase mt-52 px-16">
        {["I Create", "EYE OPENING", "Presentations"].map((item, index) => {
          return <>
            <div className="masker">
              <h1 className="uppercase text-8xl leading-[6.5vw] tracking-tighter font-bold font-['Arial']">{item}</h1>

            </div>
          </>
        })}
      </div>
      <div className=' border-t-[1px] text-lg border-white mt-52 justify-between leading-none flex items-center py-5 px-20'>
        {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
          <p className='tracking-tight font-light leading-none text-md'>{item}</p>

        ))}
        <div className="start uppercase flex items-center gap-2" >
          <div className='px-4 py-2 border-[2px]  border-zinc-600 font-light rounded-full'>Start the project</div>

          <div className='w-10 h-10 rounded-full border-[2px] border-zinc-600 flex items-center justify-center'> <span className='rotate-[45deg]'>   <FaArrowUpLong /></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
