import React from 'react';
import Entity from './Entity';
// import PropTypes from 'prop-types';
// import styles from './Template.module.css';

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

export const AsPlayer = Template.bind({});
AsPlayer.args = {
  val: 'P',
};
