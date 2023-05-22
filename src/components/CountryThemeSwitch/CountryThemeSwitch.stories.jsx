import React from 'react';
import Entity from './CountryThemeSwitch';

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

export const AsGrass = Template.bind({});
AsGrass.args = {
  type: ' ',
};

export const AsTnt = Template.bind({});
AsTnt.args = {
  type: '|',
};

export const AsCountryTarget = Template.bind({});
AsCountryTarget.args = {
  type: 'g',
};
