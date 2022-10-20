import { BookmarkIcon, Cog6ToothIcon, HomeIcon, PlusIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import NavLink from "./NavLink"

const Menu = () => {
    return (
        <section className='lg:w-48 lg:space-y-10 space-y-4 '>
            <nav className='lg:space-y-2 flex items-center gap-3 w-full rounded-md justify-center lg:block'>
                <NavLink icon={<HomeIcon className='w-5 h-5' />} href="/" label="Home" shortcut="1" />
                <NavLink icon={<BookmarkIcon className='w-5 h-5' />} href="/bookmarks" label="Bookmarks" shortcut="2" />
                <NavLink icon={<Cog6ToothIcon className='w-5 h-5' />} href="/settings" label="Settings" shortcut="3" />
            </nav>
            <Link href='/new-meal'>
                <div className="flex mx-auto w-fit hover:opacity-80 px-3 py-1 rounded-md items-center cursor-pointer bg-purple text-dark-primary font-semibold gap-1">
                    <PlusIcon className='w-5 h-5' />
                    <p className='text-lg'>Add New Recipe</p>
                </div>
            </Link>
        </section>
    )
}
export default Menu