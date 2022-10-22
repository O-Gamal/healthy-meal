import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export interface NavLinkProps {
    icon: React.ReactNode;
    label: string;
    href: string;
    shortcut: string;
}


const NavLink = ({ icon, label, href, shortcut }: NavLinkProps) => {
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
        <Link href={href}>
            <div className={`flex justify-between px-3 py-1 rounded-md items-center cursor-pointer w-full ${current ? 'bg-green shadow-md text-dark-primary font-semibold' : 'bg-dark-secondary bg-opacity-50 hover:bg-opacity-100 transition-opacity duration-200'}`}>
                <div className="flex items-center gap-3">
                    {icon}
                    <p className='text-lg'>{label}</p>
                </div>
                <span className='hidden lg:block text-sm mx-1 bg-gunmetal bg-opacity-20 w-5 text-center rounded-sm h-5'>{shortcut}</span>
            </div>
        </Link>
    )
}
export default NavLink