import React from 'react';
import { FaveButton } from '../FaveButton';

export const Headlines = ({ stories }) => {
    return (
        <ul>
            {
                stories.map(st =>  (
                    <li key={st.id}>
                        <FaveButton /> <strong role="heading" aria-label="headline">{st.headline}</strong> {st.snippet}
                    </li>
                ))
            }
        </ul>
    )
}
