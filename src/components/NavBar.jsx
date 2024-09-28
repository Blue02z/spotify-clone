import React from 'react'
import { FaSpotify } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { GrHomeRounded } from "react-icons/gr";
import { FaBoxArchive } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { useState } from 'react';
function NavBar() {
    const [branco, setBranquear] = useState(false)
    const [outline, setOutline] = useState(false)

  return (
    <div>

        <div className='bg-[black] items-center px-2 pl-4 justify-between py-2 flex'>
            <div>
             <FaSpotify size={32} color='white' className='cursor-pointer'/>
            </div>

            <div className='flex items-center ml-52 gap-2'>
                <div className='bg-[#1f1f1f] flex justify-center items-center h-[48px] hover:scale-[1.1] cursor-pointer ease-linear duration-100 rounded-full w-[48px]'>
                    <GrHomeRounded fill='white' size={24} color='white'/>
                </div>

                <div className={`w-[490px] flex items-center cursor-pointer h-[48px] ${outline === true ? "border-2 bg-[hsla(0,0%,100%,.3)] border-white" : "border-none bg-[#1f1f1f]"}  rounded-[500px]`} onClickCapture={e => setBranquear(false)} onMouseEnter={e => setBranquear(true)} onMouseLeave={e => setBranquear(false)}>
                    {
                        outline === false && branco === true ? (
                            <IoSearchOutline size={32} color="white" className="ml-2" />
                        ) : outline === true ? (
                            <IoSearchOutline size={32} color="white" className="ml-2" />
                        ) : outline === false && branco === false ? (
                            <IoSearchOutline size={32} color="#b3b3b3" className="ml-2" />
                        ) : null
                        }

                    
                    <input type="text" className='focus:cursor-text cursor-pointer w-full ml-2 text-[16px] font-[400] bg-transparent h-[48px] text-[white] outline-none ' onFocus={e => setOutline(true)}  placeholder='O que você quer ouvir?' />
                    
                       
                        <span className='h-[60%] mx-4 w-[1px] bg-[#7c7c7c]'> </span>

                                 <FaBoxArchive size={26} color='white' className='mr-4 cursor-pointer'/>



                       
                </div>

            </div>

            <div className='flex'>
                <button className='py-[8px] font-[600] text-[17px] text-[#b3b3b3] px-[32px] cursor-pointer hover:text-[white] ease-linear hover:scale-[1.05]'>
                    Inscrever-se
                </button>

                <button className='bg-white font-[550] text-[17px] py-[12px] px-[32px] cursor-pointer rounded-[99999px] hover:scale-[1.05] ease-linear '>
                    Entrar
                </button>

            </div>

        </div>

    </div>
  )
}

export default NavBar