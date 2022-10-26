import React from 'react';
import PropTypes from 'prop-types';
import './button.css';


function strech(e) {
  e.target.style.padding = '0.8rem 1.3rem'
}
function shrink(e) {
  e.target.style.padding = '0.8rem 1rem'
}
/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor, size, label, isactive, isdesaible, icon, ...props }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  const iconMode = icon ? 'withIcon' : 'withoutIcon';
  const activeMode = isactive ? 'active' : '';
  const desaibleMode = isdesaible ? 'desaible': ''
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode, activeMode, desaibleMode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      onMouseOver={strech}
      onMouseLeave={shrink}
      {...props}
    >
      <span className={['withIcon', iconMode].join(' ')}/>
      {label}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  icon: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: '#E22944;',
  primary: true,
  icon: false,
  size: 'medium',
  onClick: undefined,
};
