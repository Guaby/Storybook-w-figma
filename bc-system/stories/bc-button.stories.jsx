import React from 'react';
import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'BC-Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Label',
  backgroundColor: '#E22944;',
  icon: false
};
Primary.parameters = {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/yHPbOJ1DmEB6Ck5sdP5c1T/BC-Buttons?node-id=21%3A604",
    },
  };


export const PrimaryWithIcon = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PrimaryWithIcon.args = {
primary: true,
label: 'Label',
backgroundColor: '#E22944;',
icon: true
};
PrimaryWithIcon.parameters = {
    design: {
    type: "figma",
    url: "https://www.figma.com/file/yHPbOJ1DmEB6Ck5sdP5c1T/BC-Buttons?node-id=21%3A604",
    },
};


  