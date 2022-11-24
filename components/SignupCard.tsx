import { gql, useMutation } from '@apollo/client';
import { Form, Formik } from 'formik';
import Image from 'next/image';
import Link from 'next/link';
import * as Yup from 'yup';
import { endpoint } from '../apollo-client';
import { TextInput } from './utils/FormElements';

const SignupCard = () => {
  const SIGNUP = gql`
    mutation SIGNUP($user: UserSignup!) {
      signup(user: $user)
    }
  `;

  const [signup, { data, loading, error }] = useMutation(SIGNUP);

  return (
    <section className='bg-dark-secondary p-10 max-w-screen-sm mx-auto rounded-lg'>
      <h1 className='text-2xl text-center font-semibold mb-10'>Sign Up</h1>
      <section className='mt-5'>
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
            passwordConfirmation: '',
          }}
          validationSchema={Yup.object({
            name: Yup.string().required(),
            email: Yup.string().email('Invalid email').required(),
            password: Yup.string().required('Password is required'),
            passwordConfirmation: Yup.string().oneOf(
              [Yup.ref('password'), null],
              'Passwords must match'
            ),
          })}
          onSubmit={(values) => {
            signup({
              variables: {
                user: {
                  name: values.name,
                  email: values.email,
                  password: values.password,
                },
              },
            });
          }}
        >
          <Form className='space-y-5'>
            <section className='space-y-2'>
              <TextInput
                label='Enter Your Name'
                name='name'
                type='text'
                placeholder='name'
              />

              <TextInput
                label='Enter Your Email Address'
                name='email'
                type='email'
                placeholder='name@example.com'
              />

              <TextInput
                label='Enter Your Password'
                name='password'
                type='Password'
                placeholder='password'
              />

              <TextInput
                label='Confirm Your Password'
                name='passwordConfirmation'
                type='Password'
                placeholder='password confirmation'
              />
            </section>
            <button type='submit' className='primary-button text-lg w-full'>
              Signup
            </button>
            <p className='text-center'>
              Have an account?{' '}
              <Link href='/signin'>
                <a className='underline hover:opacity-80 transition-opacity duration-200  '>
                  Sign in
                </a>
              </Link>
            </p>
            <a
              href={endpoint + '/auth/google'}
              className='secondary-button text-lg w-full flex items-center justify-center gap-1 hover:border-[#f5b626] hover:text-[#f5b626]'
            >
              <Image
                alt='google'
                src='/static/icons/google.svg'
                width={30}
                height={30}
              />
              Continue With Google
            </a>
            <a
              href={endpoint + '/auth/facebook'}
              className='secondary-button text-lg w-full flex items-center justify-center gap-2 hover:border-[#2177d0] hover:text-[#2177d0]'
            >
              <Image
                alt='google'
                src='/static/icons/facebook.svg'
                width={24}
                height={24}
              />
              Continue With Facebook
            </a>
          </Form>
        </Formik>
      </section>
    </section>
  );
};

export default SignupCard;
