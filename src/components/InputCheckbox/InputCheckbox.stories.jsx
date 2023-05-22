import React from 'react';
import Entity from './InputCheckbox';

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

export const AsManPlayerUp = Template.bind({});
AsManPlayerUp.args = {
  title: 'Opción 1',
  checked: true,
};
