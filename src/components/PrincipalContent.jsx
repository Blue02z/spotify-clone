import React from 'react'
import Section from './Section'
import Footer from './Footer'
function PrincipalContent() {
  return (
    <div className='w-full mt-1'>


        <div className='  bg-[#121212] px-4 py-8 h-full overflow-y-scroll rounded-[8px] w-full'>
            <Section  titulo={"Artistas populares" } artista={true} img={"https://upload.wikimedia.org/wikipedia/pt/2/22/Legi%C3%A3o_Urbana.jpg"}/>
            <Section  titulo={"Álbuns populares"} img={"https://upload.wikimedia.org/wikipedia/pt/7/72/Legi%C3%A3o_Urbana_-_Dois.jpg"} />
            <Section  titulo={"Estações de rádio populares"} img={"https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/radio/artist/1Cs0zKBU1kc0i8ypK3B9ai/pt"} />
            <Section  titulo={"Paradas em destaque"} img={"https://charts-images.scdn.co/assets_generated/locale_pt/regional/weekly/region_global_default.jpg"} />
            <Section  titulo={"Playlists do spotify"} img={"https://i.scdn.co/image/ab67706f000000020408713c731caaf1f800615a"} />
            <Footer/>
        </div>

    </div>
  )
}

export default PrincipalContent