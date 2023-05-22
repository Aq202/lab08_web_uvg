import React from 'react';
import Entity from './InputText';

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

export const AsInputText = Template.bind({});
AsInputText.args = {
  title: 'Campo de texto',
  error: 'Error a mostrar',
  value: 'Valor en value',
  placeholder: 'Placeholder',
};
