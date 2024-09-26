import React from 'react'
import Item from './Item'
function Section({titulo, artista, img}) {
  return (
    <div className='flex flex-col gap-5'>

        <div className='flex items-center justify-between'>
            <h1 className='text-white text-[24px] font-[700]'>{titulo}</h1>
            <h4 className='text-white text-[14px] font-[600]'>Mostrar mais</h4>
        </div>

        <div className='flex gap-8 '>
            <Item img={img} titulo={"Legião Urbana"} subtitulo={"Artista"} artista={artista}/>
            <Item img={img} titulo={"Legião Urbana"} subtitulo={"Artista"} artista={artista}/>
            <Item img={img} titulo={"Legião Urbana"} subtitulo={"Artista"} artista={artista}/>
            <Item img={img} titulo={"Legião Urbana"} subtitulo={"Artista"} artista={artista}/>
            <Item img={img} titulo={"Legião Urbana"} subtitulo={"Artista"} artista={artista}/>
        </div>

    </div>
  )
}

export default Section