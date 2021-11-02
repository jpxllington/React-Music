import React from 'react';

export const ArtistCard = ({Artist}) =>{
    return(
        <article aria-label="artist profile" id="artistProfile">
            <h3>{Artist.Name}</h3>
            <p>
                {Artist.Profile}
            </p>
        </article>
    )
}