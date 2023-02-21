import React from 'react'
import { FC } from 'react';
import YouTube from 'react-youtube';



type YoutubeProps = {
    idVideo: string,
    //opts son las opciones del video reproductor
    opts: {
        height: string,
        width:  string,
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: number, // 0 es negativo
        }
    }
 }




const YotubeVideo: FC<YoutubeProps> = ({idVideo, opts}) => {
  return (
    <div className="flex justify-center">
      <YouTube videoId={idVideo} opts={opts}/>
    </div>
  )
}

export default YotubeVideo