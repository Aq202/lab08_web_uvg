import React from 'react';
import Entity from './Player';

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

export const AsManPlayer = Template.bind({});
AsManPlayer.args = {
  skin: 1,
  move: 'left',
};

export const AsWomanPlayer = Template.bind({});
AsWomanPlayer.args = {
  skin: 2,
  move: 'down',
};

export const AsBoyPlayer = Template.bind({});
AsBoyPlayer.args = {
  skin: 3,
  move: 'up',
};
