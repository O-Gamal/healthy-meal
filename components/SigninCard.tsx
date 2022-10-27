import { Form, Formik } from 'formik';
import Image from 'next/image';
import Link from 'next/link';
import * as Yup from 'yup';
import { TextInput } from './utils/FormElements';

const SigninCard = () => {
  return (
    <section className='bg-dark-secondary p-10 max-w-screen-sm mx-auto'>
      <h1 className='text-2xl text-center font-semibold mb-10'>Sign In</h1>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={Yup.object({
          email: Yup.string().email('Invalid email'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));

            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className='space-y-5'>
          <section className='space-y-2'>
            <TextInput
              label='Enter Your Email Address'
              name='email'
              type='email'
              placeholder='name@example.com'
            />

            <TextInput
              label='Enter Your Password'
              name='Password'
              type='Password'
              placeholder='password'
            />
          </section>
          <button type='submit' className='primary-button text-lg w-full'>
            Sign In
          </button>
          <Link href=''>
            <a className=' block text-center underline hover:opacity-80 transition-opacity duration-200 '>
              Forgot your password?
            </a>
          </Link>
          <p className='text-center'>
            No account?{' '}
            <Link href='/signup'>
              <a className='underline hover:opacity-80 transition-opacity duration-200  '>
                Create one
              </a>
            </Link>{' '}
          </p>
          <button
            type='submit'
            className='secondary-button text-lg w-full flex items-center justify-center gap-1 hover:border-[#f5b626] hover:text-[#f5b626]'
          >
            <Image
              alt='google'
              src='/static/icons/google.svg'
              width={30}
              height={30}
            />
            Continue With Google
          </button>
          <button
            type='submit'
            className='secondary-button text-lg w-full flex items-center justify-center gap-2 hover:border-[#2177d0] hover:text-[#2177d0]'
          >
            <Image
              alt='google'
              src='/static/icons/facebook.svg'
              width={24}
              height={24}
            />
            Continue WIth Facebook
          </button>
        </Form>
      </Formik>
    </section>
  );
};
export default SigninCard;
