import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const SearchBar = () => {
  return (
    <div className='relative text-white bg-gunmetal rounded-full w-1/2 flex items-center pl-4 pr-1'>
      <MagnifyingGlassIcon className='w-6 h-6' />
      <input
        type='search'
        placeholder='Search for your meal'
        className='w-full border-transparent focus:border-transparent focus:ring-0 border-none rounded-full bg-gunmetal text-base px-3 py-3 h-full outline-none'
      />
      <button className='hidden md:block text-dark-primary font-semibold bg-green rounded-full px-6 py-1 text-lg hover:bg-opacity-90 transition-opacity'>
        Search
      </button>
    </div>
  );
};
export default SearchBar;
