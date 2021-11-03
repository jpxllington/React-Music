import React, {useState, useEffect} from 'react';
import axios from "axios";

export const SongLyrics = ({Song}) => {
    const[song, setSong] = useState();

    useEffect(() =>{
        async function getLyrics(){
            try{
                let {data} = await axios.get(`https://api.lyrics.ovh/v1/Pink-Floyd/${Song.title}`)
                setSong(data.lyrics)
            } catch(e){

            }
        }
        getLyrics()
    },)
    return (
        <p>
            {song}
        </p>
    )
}