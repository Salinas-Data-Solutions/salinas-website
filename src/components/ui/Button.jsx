import React from 'react';
import clsx from 'clsx';

const ButtonLink = ({
  variant = 'secondary',
  target,
  text,
  icon = '',
  className = '',
  type,
  children,
  ...rest
}) => {
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    tertiary: 'btn btn-tertiary',
    link: 'cursor-pointer hover:text-primary',
  };


  if (type === 'button' || type === 'submit' || type === 'reset') {
    return (
      <button
        type={type}
        className={clsx(variants[variant], className)}
        {...rest}
      >
        {children}
      </button>
    );
  } else {
    return (
      <a
        className={clsx(variants[variant], className, "btn")}
        {...(target && { target: target, rel: 'noopener noreferrer' })}
        {...rest}
      >
        {children}
      </a>
    );
  }
};

export default ButtonLink;
