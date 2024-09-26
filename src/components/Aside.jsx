import React from 'react'
import { BiLibrary } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import { FiGlobe } from "react-icons/fi";

import Infos from './Infos';

function Aside() {
  return (
    <div>

        <div className='py-7 mt-1 px-2 rounded-[9px] bg-[#121212] w-[314px]'>

                <div className='flex justify-between pt-2 mx-4'>
                    <button className='flex items-center gap-2'>
                        <BiLibrary color='#b3b3b3' size={28}/>
                        <h2 className='text-[17px] font-[600] text-[#b3b3b3]'>Sua biblioteca</h2>
                    </button>

                    <button>
                            <IoMdAdd size={22} color='#b3b3b3'/>
                    </button>

                </div>

                <div className='mt-8 overflow-y-scroll h-[200px] flex flex-col'>
                    <Infos titulo={"Crie sua primeira playlist"} texto={"É fácil, vamos te ajudar."} btnText={"Criar playlist"}/>
                    <Infos titulo={"Crie sua primeira playlist"} texto={"É fácil, vamos te ajudar."} btnText={"Criar playlist"}/>
                   
                </div>
                
            <div className='flex flex-col ml-4 mt-8 gap-3'>
                <span className='flex gap-5'>
                    <p className='text-[12px] text-[#b3b3b3] font-[500]'>Legal</p>
                    <p className='text-[12px] text-[#b3b3b3] font-[500]'>Segurança e Centro de Privacidade</p>
                </span>
                <span className='flex gap-5'>
                    <p className='text-[12px] text-[#b3b3b3] font-[500]'>Política de Privacidade</p>
                    <p className='text-[12px] text-[#b3b3b3] font-[500]'>Cookies</p>
                </span>
                <span className='flex gap-5'>
                    <p className='text-[12px] text-[#b3b3b3] font-[500]'>Sobre Anúncios</p>
                    <p className='text-[12px] text-[#b3b3b3] font-[500]'>Acessibilidade</p>
                </span>
                <p className='text-[12px] text-white font-[500]'>Cookies</p>
            </div>


            <div className='border-[#818181] mt-8 ml-5 border-[1px] rounded-[9999px] py-1 items-center px-2 w-[172px] flex gap-2'>
                <FiGlobe size={16} color='#b3b3b3'/>
                <h2 className='text-white text-[14px] font-[600]'>Português do Brasil</h2>
            </div>

        </div>

    </div>
  )
}

export default Aside