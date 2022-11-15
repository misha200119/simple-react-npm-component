import React from 'react';
import { storiesOf  } from '@storybook/react';

import { Calendar } from '../index';

const stories = storiesOf('App test', module);

stories.add('App', () => {
  return <Calendar />;
});