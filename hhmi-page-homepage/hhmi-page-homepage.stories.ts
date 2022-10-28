import { Story, Meta } from '@storybook/web-components';
import { html } from 'lit';

import {genericStoryContext as gsc} from 'src/shared/utility-types';

export interface Args {
  content?: unknown;
}

export default {
  title: 'Pages/Homepage',
  
  argTypes: {
    content: {
      control: {
        type: 'text'
      }
    }
  },
  parameters: {
    layout: 'fullscreen',  // padded, centered, fullscreen
    tag: [
      // Issue Example
      { 
        issue: '' // JIRA/Ticket URL
      },
      // Tag Example
      {
        label: '',
        description: '',
        url: '',
        type: '', // jira, beta, default, inProgress
        // override type styling.
        style: {
          color: '#ffffff',
          background: '#344563'
        },
      }
    ]
  },
} as Meta;

const Template: Story<Args> = (data) => {
  const { content } = data;
  
  return html`${content}`;
  
};

export const Homepage = Template.bind({});
Homepage.args = {
  content: 'Content Text'
};

Homepage.parameters = {
  backgrounds: {
    default: 'light', // light, dark
  },
  viewport: {
    defaultViewport: 'responsive', // mobile, responsive
  },
  design: [
    {
      type: 'figma', // 'image', 'figma'
      url: '',
    }
  ],
};
