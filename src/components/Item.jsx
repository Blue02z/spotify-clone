import React from 'react'
import { IoMdPlay } from "react-icons/io";
import { useState } from 'react';
function Item({img, titulo, subtitulo, artista}) {
    const [showPlay, setShow] = useState()
  return (
    <div>
            {
                artista === true ? <div onMouseEnter={e => setShow(true)} onMouseLeave={e => setShow(false)} className='flex flex-col hover:cursor-pointer hover:bg-[hsla(0,0%,100%,.05)] p-4 hover:rounded-[8px] gap-2 justify-start max-w-[200px]'>
                <div className='flex justify-end sticky items-end'>
                {
                    showPlay === true ?  <div className='ease-in bg-[#1ed760] flex justify-center absolute items-center w-[50px] h-[50px] rounded-full'>
                    <IoMdPlay size={23}/>
                    </div> : console.log()
                }
                
                <img src={img} alt="" className='rounded-full w-[150px] h-[150px]'/>
            </div>
                <h2 className='text-[16px] text-white font-[600]'>{titulo}</h2>
                <p className='text-[#b3b3b3] text-[15px] font-[450]'>{subtitulo}</p>
            </div>

            :

            <div onMouseEnter={e => setShow(true)} onMouseLeave={e => setShow(false)} className='flex flex-col hover:cursor-pointer hover:bg-[hsla(0,0%,100%,.05)] p-4 hover:rounded-[8px] gap-2 justify-start max-w-[200px]'>
            <div className='flex justify-end sticky items-end'>
                {
                    showPlay === true ?  <div className='ease-in bg-[#1ed760] flex justify-center absolute items-center w-[50px] h-[50px] rounded-full'>
                    <IoMdPlay size={23}/>
                    </div> : console.log()
                }
                
                <img src={img} alt="" className='rounded-[8px] w-[150px] h-[150px]'/>
            </div>
            <h2 className='text-[16px] text-white font-[600]'>{titulo}</h2>
            <p className='text-[#b3b3b3] text-[15px] font-[450]'>{subtitulo}</p>
        </div>
            }
        

    </div>
  )
}

export default Item