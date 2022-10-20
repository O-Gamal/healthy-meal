import Image from "next/image"
import Logo from "./Logo"
import SearchBar from "./SearchBar"


const Header = () => {
    return (
        <header className="py-10 flex w-full justify-between items-center">
            <Logo />
            <SearchBar />
            <Image src='/profile.png' width={50} height={50} alt='profile photo' objectFit="cover" className="duration-300 rounded-full cursor-pointer" />
        </header>
    )
}
export default Header