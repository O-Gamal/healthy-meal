import { UserCircleIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import Logo from './Logo';
import SearchBar from './SearchBar';

interface HeaderProps {
  user?: object;
  withSearch?: boolean;
}

const Header = ({ user, withSearch }: HeaderProps) => {
  const loggedinRender = (
    <Image
      src='/profile.png'
      width={50}
      height={50}
      alt='profile photo'
      objectFit='cover'
      className='duration-300 rounded-full cursor-pointer'
    />
  );

  const notLoggedinRender = (
    <div className='flex items-center gap-5'>
      <Link href='/signin'>
        <a className='flex items-center gap-1 rounded-md py-2 px-4 border border-white hover:border-green hover:text-green transition-colors duration-200'>
          <UserCircleIcon className='w-5 h-5' />
          Sign In
        </a>
      </Link>
      <Link href='/signup'>
        <a className='rounded-md py-2 px-4 border bg-green font-semibold hover:bg-opacity-80 text-dark-primary transition-colors duration-200'>
          Sign Up
        </a>
      </Link>
    </div>
  );
  return (
    <header className='py-10 flex w-full justify-between items-center mb-10'>
      <Logo />
      {withSearch && <SearchBar />}
      {user ? loggedinRender : notLoggedinRender}
    </header>
  );
};
export default Header;
