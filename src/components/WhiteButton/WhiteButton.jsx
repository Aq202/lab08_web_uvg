import React from 'react';
import PropTypes from 'prop-types';
import { button, blue } from './WhiteButton.module.css';

function WhiteButton({
  children, className, submit, ...props
}) {
  return (
    <button type={submit ? 'submit' : 'button'} className={` ${button} ${blue} ${className}`} {...props}>{children}</button>
  );
}

export default WhiteButton;

WhiteButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  submit: PropTypes.bool,
};

WhiteButton.defaultProps = {
  className: null,
  submit: PropTypes.bool,
};
