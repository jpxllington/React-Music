import React from 'react';
import { TopArtists } from '.';

export default {
    title: 'components/TopArtists',
    component: TopArtists,
    argTypes: {
        handleSelect: {
            action: 'clicked',
            description: 'cb function' 
        },
        Artists: {
            control: 'array',
            description: 'array of artist objects'
        }
    }
}

const Template = args => <TopArtists {...args} />

export const Default = Template.bind({});
Default.args = {
    Artists: [
        { id: 1, Name: 'Artist 1', Album: 'Album 1' },
        { id: 2, Name: 'Artist 2', Album: 'Album 2' }
    ]
}