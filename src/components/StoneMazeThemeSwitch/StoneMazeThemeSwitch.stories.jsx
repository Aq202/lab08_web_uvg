import React from 'react';
import Entity from './StoneMazeThemeSwitch';

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

export const AsLava = Template.bind({});
AsLava.args = {
  type: '-',
};

export const AsLava2 = Template.bind({});
AsLava2.args = {
  type: '+',
};

export const AsLava3 = Template.bind({});
AsLava3.args = {
  type: '|',
};

export const AsFloor = Template.bind({});
AsFloor.args = {
  type: ' ',
};

export const AsTarget = Template.bind({});
AsTarget.args = {
  type: 'g',
};
