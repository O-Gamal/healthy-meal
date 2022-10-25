import { ArrowLeftIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router';
import Logo from "./Logo";
import SearchBar from "./SearchBar";

interface HeaderProps {
    user?: object;
    noSearch?: boolean;
}

const Header = ({ user, noSearch }: HeaderProps) => {
    const router = useRouter();
    return (
        <header className="py-10 flex w-full justify-between items-center mb-10">
            <Logo />
            {noSearch ? <button onClick={() => router.back()} className='border border-red text-red border-z py-2 px-5 transition-colors duration-200 hover:bg-red hover:font-semibold hover:text-dark-primary rounded-md flex items-center gap-3'><ArrowLeftIcon className='w-h h-5' />Go Back</button> : <SearchBar />}
            {
                user ?
                    <Image src='/profile.png' width={50} height={50} alt='profile photo' objectFit="cover" className="duration-300 rounded-full cursor-pointer" />
                    : <div className="flex items-center gap-5">
                        <Link href='/signin'><a className="flex items-center gap-1 rounded-md py-2 px-4 border border-white hover:border-green hover:text-green transition-colors duration-200"><UserCircleIcon className="w-5 h-5" />Sign In</a></Link>
                        <Link href='/signup'><a className="rounded-md py-2 px-4 border bg-green font-semibold hover:bg-opacity-80 text-dark-primary transition-colors duration-200">Sign Up</a></Link>
                    </div>
            }
        </header>
    )
}
export default Header