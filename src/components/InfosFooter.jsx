import React from 'react'

function InfosFooter({titulo, texto1, texto2, texto3, texto4, texto5}) {
  return (
    <div>

        <div>
            <h3 className='text-white font-[600] text-[16px] mb-2'>{titulo}</h3>
            <ul className='flex flex-col gap-2'>
                <li className='text-[#b3b3b3] font-[500] hover:text-white hover:underline cursor-pointer text-[16px]'>{texto1}</li>
                <li className='text-[#b3b3b3] font-[500] hover:text-white hover:underline cursor-pointer text-[16px]'>{texto2}</li>
                <li className='text-[#b3b3b3] font-[500] hover:text-white hover:underline cursor-pointer text-[16px]'>{texto3}</li>
                <li className='text-[#b3b3b3] font-[500] hover:text-white hover:underline cursor-pointer text-[16px]'>{texto4}</li>
                <li className='text-[#b3b3b3] font-[500] hover:text-white hover:underline cursor-pointer text-[16px]'>{texto5}</li>
            </ul>
        </div>

    </div>
  )
}

export default InfosFooter