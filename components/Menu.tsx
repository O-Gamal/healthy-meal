import { BookmarkIcon, Cog6ToothIcon, HomeIcon, PlusIcon } from '@heroicons/react/24/outline'
import NavLink from "./NavLink"

const Menu = () => {

    return (
        <section className='z-40 p-3 fixed bottom-5 drop-shadow-lg left-1/2 bg-opacity-30 -translate-x-1/2 bg-gunmetal rounded-full'>
            <div className='flex items-center gap-5 z-50 p-3 bg-gunmetal rounded-full'>
                <nav className='flex items-center gap-2 pr-5 border-r border-white'>
                    <NavLink nav icon={<HomeIcon className='w-5 h-5' />} href="/" label="Home" shortcut="1" />
                    <NavLink nav icon={<BookmarkIcon className='w-5 h-5' />} href="/bookmarks" label="Bookmarks" shortcut="2" />
                    <NavLink nav icon={<Cog6ToothIcon className='w-5 h-5' />} href="/settings" label="Settings" shortcut="3" />
                </nav>
                <NavLink icon={<PlusIcon className='w-5 h-5' />} href="/add-new-recipe" label="Add New Recipe" shortcut="4" />
            </div>
        </section>
    )
}
export default Menu