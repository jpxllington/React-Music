import React from 'react';
import { FaveButton } from '../FaveButton';
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import { AlbumDetails } from '..';

export const TopArtists = ({ Artists }) => {
    const handleClick = () => {
        
    }
    return (
        <ul>
            {
                Artists.map(st =>  (
                    <li key={st.id}>
                        <Router>
                            <Link to={`/Album/`}>
                                    <strong role="heading" aria-label="top artists" onClick={handleClick}>{st.Name}</strong> {st.Album}
                            </Link>
                        </Router>
                    </li>
                ))
            }
        </ul>
    )
}
