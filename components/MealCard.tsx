import {
  BookmarkIcon as BookmarkOutlineIcon,
  ClockIcon,
  HandThumbUpIcon,
  PowerIcon,
} from '@heroicons/react/24/outline';
import { BookmarkIcon as BookmarkSolidIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { useState } from 'react';

interface MealCardProps {
  name: string;
  description: string;
  user: { name: string; photo: string };
  calories: number;
  prep_time: string;
  likes: number;
  photo: string;
}

const MealCard = ({
  photo,
  name,
  description,
  prep_time,
  calories,
  likes,
  user,
}: MealCardProps) => {
  const [bookmarked, setBookmarked] = useState(false);

  return (
    <div className='w-96 rounded-xl bg-dark-secondary'>
      <Image
        src={photo}
        alt={name}
        width={400}
        height={250}
        style={{ objectFit: 'cover' }}
        className='rounded-lg cursor-pointer hover:opacity-80 transition-opacity'
      />
      <section className='p-5 space-y-8'>
        <section className='flex items-center gap-3'>
          <div className='flex rounded-full items-center gap-1 py-1 px-2 bg-yellow text-sm hover:bg-opacity-90 transition-opacity cursor-pointer font-semibold text-dark-primary'>
            <ClockIcon className='w-4 h-4' />
            <span>{prep_time}</span>
          </div>
          <div className='flex rounded-full items-center gap-1 py-1 px-2 bg-green text-sm hover:bg-opacity-90 transition-opacity cursor-pointer font-semibold text-dark-primary'>
            <PowerIcon className='w-4 h-4' />
            <span>{calories} cal</span>
          </div>
          <div className='flex rounded-full items-center gap-1 py-1 px-2 bg-blue text-sm hover:bg-opacity-90 transition-opacity cursor-pointer font-semibold text-dark-primary'>
            <HandThumbUpIcon className='w-4 h-4' />
            <span>{likes} likes this meal</span>
          </div>
        </section>
        <section className='space-y-3'>
          <h3 className='text-2xl font-bold cursor-pointer hover:opacity-90'>
            {name}
          </h3>
          <p>{description?.slice(0, 100)} ...</p>
        </section>
        <section className='flex justify-between items-center select-none'>
          <div className='flex items-center gap-1 cursor-pointer'>
            <Image
              src={user.photo}
              alt={user.name}
              width={30}
              height={30}
              style={{ objectFit: 'cover' }}
              className='rounded-full'
            />
            <p className='font-sm'>
              by <span className='hover:underline'>{user.name}</span>
            </p>
          </div>
          {bookmarked ? (
            <BookmarkSolidIcon
              className='w-7 h-7 cursor-pointer'
              onClick={() => setBookmarked(false)}
            />
          ) : (
            <BookmarkOutlineIcon
              className='w-7 h-7 cursor-pointer'
              onClick={() => setBookmarked(true)}
            />
          )}
        </section>
      </section>
    </div>
  );
};
export default MealCard;
