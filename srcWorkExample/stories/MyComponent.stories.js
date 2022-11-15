import React from 'react';
import { storiesOf  } from '@storybook/react';

import { MyComponent } from "../components/MyComponent";
import { MyComponent1 } from "../components/MyComponent1";

const stories = storiesOf('App test', module);

stories.add('App', () => {
  return <><MyComponent /> <MyComponent1 /></>;
});