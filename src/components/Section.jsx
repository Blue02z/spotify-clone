import React from 'react'
import Item from './Item'
function Section({titulo, artista, img}) {
  return (
    <div className='flex flex-col gap-3 mb-8'>

        <div className='flex items-center justify-between mx-3'>
            <h1 className='text-white text-[24px] font-[700] cursor-pointer hover:underline'>{titulo}</h1>
            <h4 className='text-white text-[14px] font-[600] cursor-pointer hover:underline'>Mostrar mais</h4>
        </div>

        <div className='flex '>
            <Item img={img} titulo={"Legião Urbana"} subtitulo={"Artista"} artista={artista}/>
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