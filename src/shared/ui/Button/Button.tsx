import clsx from 'clsx';
import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  icon?: React.ReactNode;
  iconPosition?: 'before' | 'after';
  variant?: 'text' | 'contained' | 'outlined';
  loading?: boolean;
  disabled?: boolean;
  className?: string;
}

const buttonVariants = {
  text: 'text',
  outlined: 'outlined',
  contained: 'contained',
}

export const Button = ({
  icon,
  text,
  iconPosition = 'before',
  variant = 'text',
  disabled,
  className,
  loading = false,
  ...props
}: ButtonProps) => {
  const content = loading ? (
    <span
      className={`box-border
      block
        h-[36px]
        w-[36px]
        animate-spin
        rounded-full
        border-4
        border-solid
        border-[#FFF] border-b-transparent`}
    ></span>
  ) : (
    <>
      {icon && iconPosition === 'before' && icon}
      {text && text}
      {icon && iconPosition === 'after' && icon}
    </>
  );
  return (
    <button
      disabled={disabled || loading}
      {...props}
      className={clsx('baseBtn', buttonVariants[variant], className)}
    >
      {content}
    </button>
  );
};
