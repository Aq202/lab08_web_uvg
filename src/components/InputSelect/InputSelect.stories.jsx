import React from 'react';
import Entity from './InputSelect';

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

export const AsInputSelect = Template.bind({});
AsInputSelect.args = {
  title: 'Seleccionar opciones',
  error: 'Error a mostrar',
  options: [{ title: 'Opción 1', value: 1 }, { title: 'Opción 2', value: 2 }],
};
