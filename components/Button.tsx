
import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
  disabled?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  type = 'button',
  fullWidth = false,
  disabled = false,
}) => {
  const baseClasses = 'font-bold rounded-full shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4';

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-10 py-4 text-lg',
  };

  const variantClasses = {
    primary: 'bg-orange-500 hover:bg-orange-600 text-white focus:ring-orange-300',
    secondary: 'bg-white hover:bg-slate-100 text-blue-600 border border-blue-600 focus:ring-blue-200',
  };
  
  const disabledClasses = 'opacity-50 cursor-not-allowed hover:scale-100';

  const className = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${fullWidth ? 'w-full' : ''}
    ${disabled ? disabledClasses : ''}
  `;

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
