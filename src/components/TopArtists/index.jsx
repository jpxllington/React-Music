import React from 'react';
import { FaveButton } from '../FaveButton';

export const TopArtists = ({ Artists }) => {
    return (
        <ul>
            {
                Artists.map(st =>  (
                    <li key={st.id}>
                        <FaveButton /> <strong role="heading" aria-label="top artists">{st.Name}</strong> {st.Album}
                    </li>
                ))
            }
        </ul>
    )
}
