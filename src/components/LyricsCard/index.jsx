import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const LyricsCard = ({album : { artist , title }}) => {
    
    const [ album, setAlbum ] = useState();
    const [ statusMessage, setStatusMessage ] = useState('Loading');
    useEffect(() => {
        const fetchSong = async () => {
            setStatusMessage('Loading')
            try {   
                
                let { data } = await axios.get(`https://api.lyrics.ovh/v1/${artist}/${title}`);
                //let { data } = await axios.get(`https://futureproof-news.herokuapp.com/articles/${storyId}`);
                console.log(data);
                setAlbum(data);
                setStatusMessage('');
            } catch (err) {
                console.warn(err);
                setStatusMessage(`Oops there\'s been an issue! ${err.message}`)
            }
        }
        fetchSong()
    }, [album])

    return ( 
        <article aria-label="featured lyrics" id="feature">
            <>
            <h3>{ statusMessage ? statusMessage : album}</h3>
            <p>
                {!statusMessage && album }
            </p>
            </>
        </article>
    )

}