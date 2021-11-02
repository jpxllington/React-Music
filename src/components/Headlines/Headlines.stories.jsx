import React from 'react';
import { Headlines } from '.';

export default {
    title: 'Components/Headlines',
    component: Headlines,
    argTypes: {
        handleSelect: {
            action: 'clicked',
            description: 'cb function' 
        },
        stories: {
            control: 'array',
            description: 'array of story objects'
        }
    }
}

const Template = args => <Headlines {...args} />

export const Default = Template.bind({});
Default.args = {
    stories: [
        { id: 1, title: 'Article 1', snippet: 'blah blah blah' },
        { id: 2, title: 'Article 2', snippet: 'blah blah blah' }
    ]
}