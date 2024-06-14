import React from 'react';
import { Button, Input } from 'src/shared/ui';
import { Link } from 'react-router-dom';
import isEmail from 'validator/lib/isEmail';
import { useForm } from 'react-hook-form';

interface SigninValues {
  email: string;
  password: string;
}

export const SigninPage = () => {
  const {
    handleSubmit,
    formState: { errors, isValid },
    register,
  } = useForm<SigninValues>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    shouldFocusError: false,
  });

  function onSubmit(data: SigninValues) {
    console.log('submited', data);
  }

  return (
    <div>
      <h1 className="sectionHeader text-3xl">Sign In</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="my-[50px] max-w-[750px]"
      >
        <Input
          label="Email"
          {...register('email', {
            required: 'Enter your email',
            validate: (v) => {
              return isEmail(v) || 'Email is invalid';
            },
          })}
          placeholder="Examplesrcmail.com"
          error={errors.email?.message}
        ></Input>
        <Input
          label="Password"
          placeholder="Password..."
          type="password"
          {...register('password', {
            required: 'Enter your password',
            minLength: {
              value: 4,
              message: 'Password length must be at least 4 characters',
            },
            maxLength: {
              value: 30,
              message: 'Password length must be at least 4 characters',
            },
          })}
          error={errors.password?.message}
        ></Input>
        <Button
          disabled={!isValid}
          variant="contained"
          text="Sign In"
          className="w-full justify-center p-6 text-xl"
        ></Button>
      </form>
      <p className="font-quicksandRegular text-xl text-lightText dark:text-darkText ">
        Don't have account?{' '}
        <Link
          to={'/sign-up'}
          className="text-altText underline transition-colors hover:text-yellowPrimary"
        >
          Sign up
        </Link>
      </p>
    </div>
  );
};
