import React from 'react'

function Infos({titulo, texto, btnText}) {
  return (
    <div>

        <div className='bg-[#1f1f1f] py-[16px] px-[18px] my-4 rounded-[8px]'>
                <h2 className='text-white font-[600] mb-2 text-[16px]'>{titulo}</h2>
                <p className='text-white font-[500] text-[14px]'>{texto}</p>
                <button className='bg-white font-[550] mt-4 text-black py-[4px] px-[16px] rounded-[9999px]'>
                    {btnText}
                </button>
        </div>

    </div>
  )
}

export default Infos