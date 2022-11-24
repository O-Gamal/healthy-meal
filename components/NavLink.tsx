import { Tooltip } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export interface NavLinkProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  shortcut: string;
  nav?: boolean;
}

const NavLink = ({ icon, label, href, shortcut, nav }: NavLinkProps) => {
  const router = useRouter();

  const current = router.pathname === href;

  useEffect(() => {
    const handleUserKeyPress = (e: KeyboardEvent) => {
      if (e.key === shortcut) {
        router.push(href);
      }
    };

    document.addEventListener('keypress', handleUserKeyPress);
    return () => document.removeEventListener('keypress', handleUserKeyPress);
  });

  return (
    <Link href={href}>
      {nav ? (
        <div
          className={`flex cursor-pointer items-center rounded-full px-3 py-1 ${
            current
              ? 'bg-green font-semibold text-dark-primary'
              : 'bg-dark-secondary bg-opacity-50 transition-opacity duration-200 hover:bg-opacity-100'
          }`}
        >
          <Tooltip
            color='#FAFBFB'
            openDelay={1000}
            transition='slide-up'
            offset={10}
            label={
              <span className='text-dark-primary'>{`press ${shortcut}`}</span>
            }
          >
            <div className='flex items-center gap-2'>
              {icon}
              <p className='hidden text-lg md:block'>{label}</p>
            </div>
          </Tooltip>
          {/* <span className='hidden lg:block text-sm mx-1 bg-gunmetal bg-opacity-20 w-5 text-center rounded-sm h-5'>{shortcut}</span> */}
        </div>
      ) : (
        <div className='flex cursor-pointer items-center gap-1 rounded-full bg-purple px-3 py-1 font-semibold text-dark-primary hover:opacity-90'>
          <Tooltip
            color='#FAFBFB'
            openDelay={1000}
            transition='slide-up'
            offset={10}
            label={
              <span className='text-dark-primary'>{`press ${shortcut}`}</span>
            }
          >
            <div className='flex items-center gap-2'>
              {icon}
              <p className='hidden whitespace-nowrap text-lg lg:block'>
                {label}
              </p>
            </div>
          </Tooltip>
        </div>
      )}
    </Link>
  );
};
export default NavLink;
