import React ,{ useState, useEffect } from 'react';
import {Song} from "../Song"
import { FaveButton } from '..';
import axios from 'axios';


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