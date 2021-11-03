import React from 'react';
import { SongLyrics } from '.';

export default {
    title: 'components/SongLyrics',
    component: SongLyrics,
    
}

const Template = args => <SongLyrics {...args} />

export const Default = Template.bind({});
Default.args = {
    Song: {title: 'Money',runtime:6.33}
}