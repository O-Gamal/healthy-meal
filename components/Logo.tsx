import Link from "next/link"

const Logo = () => {
    return (
        <Link href='/'><h3 className="cursor-pointer hover:opacity-90 text-white text-lg font-bold leading-4">Healthy<span className="block">Meal</span></h3></Link>
    )
}
export default Logo