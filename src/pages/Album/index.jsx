import React, {useState} from 'react';
import { FaveButton, Song, AlbumDetails, SongLyrics, BackButton } from '../../components';
import "./style.css"

export const Album = () =>{
    const [albums, ] = useState(
        [
           {title: "Speak To Me", runtime: 1.04},
           {title: "Breathe", runtime: 2.49},
           {title: "On The Run", runtime:3.36},
           {title: "Time", runtime:7.02},
           {title: "The Great Gig In The Sky", runtime:4.44},
           {title: "Money", runtime:6.33},
           {title: "Us And Them", runtime:7.52},
           {title: "Any Colour You Like", runtime:3.25},
           {title: "Brain Damage", runtime:3.45},
           {title: "Eclipse", runtime:1.54}
        ])
    
    const [songTitle, setSongTitle] = useState();

    return(
        <>
            <BackButton/>
            
            <AlbumDetails handleSelect={setSongTitle}/>
        
            { songTitle && <SongLyrics Song={songTitle} /> }
        </>
    )
}