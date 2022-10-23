import { Tooltip } from '@mantine/core';
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export interface NavLinkProps {
    icon: React.ReactNode;
    label: string;
    href: string;
    shortcut: string;
    nav?: boolean
}


const NavLink = ({ icon, label, href, shortcut, nav }: NavLinkProps) => {
    const router = useRouter();

    const current = router.pathname === href;

    useEffect(() => {
        const handleUserKeyPress = (e: KeyboardEvent) => {
            if (e.key === shortcut) {
                router.push(href);
            }
        }

        document.addEventListener("keypress", handleUserKeyPress);
        return () => document.removeEventListener("keypress", handleUserKeyPress)
    });

    return (
        <Link href={href}>{nav ?
            <div className={`flex px-3 py-1 rounded-full items-center cursor-pointer ${current ? 'bg-green text-dark-primary font-semibold' : 'bg-dark-secondary bg-opacity-50 hover:bg-opacity-100 transition-opacity duration-200'}`}>
                <Tooltip color='#FAFBFB' openDelay={1000} transition='slide-up' offset={10} label={<span className='text-dark-primary'>{`press ${shortcut}`}</span>}>
                    <div className="flex items-center gap-2">
                        {icon}
                        <p className='text-lg'>{label}</p>
                    </div>
                </Tooltip>
                {/* <span className='hidden lg:block text-sm mx-1 bg-gunmetal bg-opacity-20 w-5 text-center rounded-sm h-5'>{shortcut}</span> */}
            </div>
            : <div className="flex hover:opacity-90 px-3 py-1 rounded-full items-center cursor-pointer bg-purple text-dark-primary font-semibold gap-1">
                <Tooltip color='#FAFBFB' openDelay={1000} transition='slide-up' offset={10} label={<span className='text-dark-primary'>{`press ${shortcut}`}</span>}>
                    <div className="flex items-center gap-2">
                        {icon}
                        <p className='text-lg'>{label}</p>
                    </div>
                </Tooltip>
            </div>}
        </Link>
    )
}
export default NavLink