import React from 'react';
import {Song} from "../Song"
import { FaveButton } from '..';

export const AlbumDetails = ({Album}) => {
    return(
        <ol>
             {
                Album.map(st =>  (
                    <li key={st.id}>
                      <FaveButton /> <strong role="heading" aria-label="song">{st.title}</strong> {st.runtime}
                    </li>
                ))
            }
        </ol>
    )
}