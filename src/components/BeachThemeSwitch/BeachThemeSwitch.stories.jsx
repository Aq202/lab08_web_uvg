import React from 'react';
import Entity from './BeachThemeSwitch';

function Template(args) {
  return (
    <div>
      <Entity {...args} />
    </div>
  );
}

export default {
  title: 'Sprites/Entity',
  components: Entity,
};

export const AsSand1 = Template.bind({});
AsSand1.args = {
  type: ' ',
};

export const AsCactus1 = Template.bind({});
AsCactus1.args = {
  type: '|',
};

export const AsSandTarget = Template.bind({});
AsSandTarget.args = {
  type: 'g',
};
