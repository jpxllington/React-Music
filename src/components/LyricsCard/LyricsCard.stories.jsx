import React from 'react';
import { LyricsCard } from '.';

export default {
    title: 'Components/Lyrics Card',
    component: LyricsCard
}

const Template = args => <LyricsCard {...args} />

export const Default = Template.bind({});
Default.args = {
    Album:[
        {id:0,artist:"Kanye West",title: "Hurricane", runtime: 4.03},
        {id:1,artist:"Koryn Hawthorne",title: "Speak To Me", runtime: 1.04}
    ]
}