import clsx from 'clsx';
import React, { InputHTMLAttributes } from 'react';
import { UseFormRegister } from 'react-hook-form';

type InputProps = {
  label: string;
  error: string | undefined;
} & InputHTMLAttributes<HTMLInputElement> &
  ReturnType<UseFormRegister<{ [index: string]: string }>>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, onBlur, onChange, name, error, ...props }, ref) => {
    return (
      <label className="relative mb-4 block pb-10 font-quicksandRegular text-xl text-lightAltText dark:text-darkAltText">
        {label}
        <input
          {...props}
          ref={ref}
          onBlur={onBlur}
          onChange={onChange}
          name={name}
          className={clsx(
            `peer mt-3 block w-full rounded-xl bg-lightAlt p-4 focus:text-lightAltText focus:outline focus:outline-2 
            focus:outline-altText dark:bg-darkAlt dark:focus:text-darkAltText`,
            error &&
              'text-red-700 outline outline-2 outline-red-700 dark:text-red-700',
          )}
        />
        {error && (
          <p className="absolute bottom-0 left-1 font-quicksandRegular text-base text-red-700 peer-focus:hidden">
            {error}
          </p>
        )}
      </label>
    );
  },
);
