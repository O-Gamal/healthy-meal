import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" legacyBehavior>
      <h3 className="cursor-pointer hover:opacity-90 text-white text-xl font-bold leading-5">
        Healthy<span className="block">Meal</span>
      </h3>
    </Link>
  );
};
export default Logo;
