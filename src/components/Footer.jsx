import React from 'react'
import InfosFooter from './InfosFooter'
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

function Footer() {
  return (
    <div className='flex flex-col gap-8 pb-8'>

        <div className='flex gap-16 py-10'>
            <InfosFooter titulo={"Empresa"} texto1={"Sobre"} texto2={"Empregos"} texto3={"For the Record"}/>
            <InfosFooter titulo={"Comunidade"} texto1={"Para Artistas"} texto2={"Desenvolvedores"} texto3={"Publicidade"} texto4={"investidores"} texto5={"Fornecedores"}/>
            <InfosFooter titulo={"Links úteis"} texto1={"Suporte"} texto2={"Aplicativo móvel \n grátis"} />
            <InfosFooter titulo={"Planos do Spotify"} texto1={"Premium Individual"} texto2={"Premium Duo"} texto3={"Premium Família"} texto4={"Premium Universitário"} texto5={"Spotify Free"}/>  

            <div className='flex gap-4'>
              <div className='bg-[#292929] hover:bg-[#6e6e6e83] flex justify-center items-center p-2 rounded-full h-[40px] w-[40px]'><FaInstagram size={19} color='white'/></div>
              <div className='bg-[#292929] hover:bg-[#6e6e6e83] flex justify-center items-center p-2 rounded-full h-[40px] w-[40px]'> <FaTwitter size={19} color='white'/></div>
              <div className='bg-[#292929] hover:bg-[#6e6e6e83] flex justify-center items-center p-2 rounded-full h-[40px] w-[40px]'><FaFacebook size={19} color='white'/></div>
            </div>

        </div>

        <div className='w-full h-[1.2px] bg-[#ffffff1a]'>

        </div>

        <div>
          <p className='text-[#b3b3b3] text-[14px] font-[500]'>
              © 2024 Spotify AB
          </p>
        </div>

    </div>
  )
}

export default Footer