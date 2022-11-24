import {
  BookmarkIcon,
  Cog6ToothIcon,
  HomeIcon,
  PlusIcon,
} from '@heroicons/react/24/outline';
import NavLink from './NavLink';

const Nav = () => {
  return (
    <section className='fixed bottom-5 left-1/2 z-40 -translate-x-1/2 rounded-full bg-gunmetal bg-opacity-30 p-3 drop-shadow-xl'>
      <div className='z-50 flex items-center gap-5 rounded-full bg-gunmetal p-3'>
        <nav className='flex items-center gap-2 border-r border-white pr-5'>
          <NavLink
            nav
            icon={<HomeIcon className='h-5 w-5' />}
            href='/'
            label='Home'
            shortcut='1'
          />
          <NavLink
            nav
            icon={<BookmarkIcon className='h-5 w-5' />}
            href='/bookmarks'
            label='Bookmarks'
            shortcut='2'
          />
          <NavLink
            nav
            icon={<Cog6ToothIcon className='h-5 w-5' />}
            href='/settings'
            label='Settings'
            shortcut='3'
          />
        </nav>
        <NavLink
          icon={<PlusIcon className='h-5 w-5' />}
          href='/add-new-recipe'
          label='Add New Recipe'
          shortcut='4'
        />
      </div>
    </section>
  );
};
export default Nav;
