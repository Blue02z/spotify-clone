import React from 'react'
import { BiLibrary } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import { FiGlobe } from "react-icons/fi";
import { useState } from 'react';
import Infos from './Infos';
function Aside() {
    const [brancar, setBrancar] = useState()
    const [mais, setMais] = useState()
    const [scroll, setScroll] = useState()
  return (
    <div>

        <div className='pt-4 pb-14 mt-1 px-2 rounded-[9px] bg-[#121212] w-[314px]'>

                <div className='flex justify-between pt-2 mx-4'>
                    <button className='flex items-center' onMouseEnter={e => setBrancar(true)} onMouseLeave={e=> setBrancar(false)}>
                    {
                            brancar === true ? <div className='flex gap-2'>
                                <BiLibrary size={28}  color='white'/>  <h2 className='text-[17px] font-[700]  text-[white]'>Sua biblioteca</h2>
                            </div> : <div className='flex gap-2'>
                                <BiLibrary size={28}  color='#b3b3b3'/>
                                     <h2 className='text-[17px] font-[700]  text-[#b3b3b3]'>Sua biblioteca</h2>
                            </div>
                            
                            
                        }
                      
                     
                    </button>
                    
                    <button className={`${mais === true ? "p-1 bg-[#ffffff0c]  rounded-full" : 'p-1'}`} onMouseEnter={e=> setMais(true)} onMouseLeave={e=>setMais(false)}>
                        {
                            mais === true ? <IoMdAdd size={22} color='#ffffff97'/> : <IoMdAdd size={22} color='#b3b3b3'/>
                        }
                            
                    </button>

                </div>

                <div className={`mt-8 ${scroll === true ? "overflow-y-scroll" : "overflow-y-hidden"}  h-[200px] flex flex-col`} onMouseEnter={e=>setScroll(true)} onMouseLeave={e=> setScroll(false)}>
                    <Infos titulo={"Crie sua primeira playlist"} texto={"É fácil, vamos te ajudar."} btnText={"Criar playlist"}/>
                    <Infos titulo={"Que tal seguir um podcast novo?"} texto={"Avisaremos você sobre novos episódios."} btnText={"Explore podcasts"}/>
                   
                </div>
                
            <div className='flex flex-col ml-4 mt-8 gap-3'>
                <span className='flex gap-5'>
                    <p className='text-[12px] text-[#b3b3b3] font-[500] cursor-pointer'>Legal</p>
                    <p className='text-[12px] text-[#b3b3b3] font-[500] cursor-pointer'>Segurança e Centro de Privacidade</p>
                </span>
                <span className='flex gap-5'>
                    <p className='text-[12px] text-[#b3b3b3] font-[500] cursor-pointer'>Política de Privacidade</p>
                    <p className='text-[12px] text-[#b3b3b3] font-[500] cursor-pointer'>Cookies</p>
                </span>
                <span className='flex gap-5'>
                    <p className='text-[12px] text-[#b3b3b3] font-[500] cursor-pointer'>Sobre Anúncios</p>
                    <p className='text-[12px] text-[#b3b3b3] font-[500] cursor-pointer'>Acessibilidade</p>
                </span>
                <p className='text-[12px] text-white font-[500] cursor-pointer hover:underline'>Cookies</p>
            </div>


            <div className='border-[#818181] mt-8 ml-5 border-[1px] rounded-[9999px] py-1 items-center px-2 w-[172px] flex gap-2 hover:scale-[1.06] cursor-pointer '>
                <FiGlobe size={16} color='#b3b3b3'/>
                <h2 className='text-white text-[14px] font-[600]'>Português do Brasil</h2>
            </div>

        </div>

    </div>
  )
}

export default Aside