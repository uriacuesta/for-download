import { Story, Meta } from '@storybook/web-components';
import { html } from 'lit';

import './hhmi-test';
import {  HhmiTestProps } from './hhmi-test';

export interface Args extends HhmiTestProps {
  content?: unknown;
}

export default {
  title: 'Atoms/Test',
  component: 'hhmi-test',
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
  
  return html`<hhmi-test>${content}</hhmi-test>`;
};

export const Test = Template.bind({});
Test.args = {
  content: 'Content Text'
};

Test.parameters = {
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
