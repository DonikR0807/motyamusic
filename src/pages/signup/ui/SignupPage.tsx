import { useForm } from 'react-hook-form';
import { Button, Input } from 'src/shared/ui';
import { Link } from 'react-router-dom';
import isEmail from 'validator/es/lib/isEmail';

interface SignupValues {
  email: string;
  password: string;
  repeatPassword: string;
}

export const SignupPage = () => {
  const {
    handleSubmit,
    formState: { errors, isValid },
    register,
    getValues
  } = useForm<SignupValues>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    shouldFocusError: false,
  });

  function onSubmit(data: SignupValues) {
    console.log('submited', data);
  }

  return (
    <div>
      <h1 className="sectionHeader text-3xl">Sign Up</h1>
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
        <Input
          label="Repeat password"
          placeholder="Password..."
          type="password"
          {...register('repeatPassword', {
            required: 'Repeat your password',
            validate: (v) => {
              return v === getValues('password') || "Passwords don't match";
            },
          })}
          error={errors.repeatPassword?.message}
        ></Input>
        <Button
          disabled={!isValid}
          variant="contained"
          text="Sign Up"
          className="w-full justify-center p-6 text-xl"
        ></Button>
      </form>
      <p className="font-quicksandRegular text-xl text-lightText dark:text-darkText ">
        Already have account?{' '}
        <Link
          to={'/sign-in'}
          className="text-altText underline transition-colors hover:text-yellowPrimary"
        >
          Log in
        </Link>
      </p>
    </div>
  );
};
