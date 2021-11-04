import React from 'react';
import {AlbumDetails} from ".";

export default {
    title: "components/Album Details",
    component: AlbumDetails
}

const Template = args => <AlbumDetails {...args} />

export const Default = Template.bind({});
Default.args = {
    Album:[
        {id:0,artist:"Kanye West",title: "Hurricane", runtime: 4.03},
        {id:1,artist:"Koryn Hawthorne",title: "Speak To Me", runtime: 1.04}
        // {id:2,artist:"",title: "Breathe", runtime: 2.49},
        // {id:3,title: "On The Run", runtime:3.36},
        // {id:4,title: "Time", runtime:7.02},
        // {id:5,title: "The Great Gig In The Sky", runtime:4.44},
        // {id:6,title: "Money", runtime:6.33},
        // {id:7,title: "Us And Them", runtime:7.52},  
        // {id:8,artist: "Pink Floyd",title: "Any Colour You Like", runtime:3.25},     
        // {id:9,title: "Brain Damage", runtime:3.45},
        // {id:10,title: "Eclipse", runtime:1.54}
    ]
}