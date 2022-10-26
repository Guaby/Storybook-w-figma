import React from 'react';

import { Button } from './Button';


export default {
    title: "My stories",
    component: Button,
  };
  
  export const myStory = () => <Button>Hello, World!</Button>;
  
  myStory.parameters = {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/yHPbOJ1DmEB6Ck5sdP5c1T/BC-Buttons?node-id=21%3A604",
    },
  };
