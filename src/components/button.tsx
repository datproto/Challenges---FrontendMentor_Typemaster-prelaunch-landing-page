import React from 'react';

interface ButtonProps {
  type?: 'gray' | 'orange';
  children?: React.ReactChild | React.ReactChild[];
  customClass?: string;
}

function Button({ type, children, customClass }: ButtonProps) {
  return (
    <div className={`btn ${type === 'gray' ? 'btn-gray' : 'btn-orange'} ${customClass}`}>
      {children}
    </div>
  );
}

Button.defaultProps = {
  type: 'gray',
  children: 'button',
  customClass: null
};

export default Button;
