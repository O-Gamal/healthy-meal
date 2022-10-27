'use client';

import type { NextPage } from 'next';
import MealCard from '../components/MealCard';
import MealsFilterCard from '../components/MealsFilterCard';
import MealTypeFilter from '../components/MealTypeFilter';
import RecommendCard from '../components/RecommendCard';

import { meals, MealType } from '../TestData';

const Home: NextPage = () => {
  return (
    <main className='w-full space-y-10'>
      {/* <h2 className='text-3xl font-bold'>Home</h2> */}
      <section className='space-y-5'>
        <section className='flex justify-center gap-5'>
          <MealsFilterCard />
          <RecommendCard />
        </section>
        <MealTypeFilter />
      </section>
      <section className='flex gap-5 justify-center flex-wrap w-full pb-28'>
        {meals.map((meal: MealType, index: number) => (
          <MealCard
            key={index}
            name={meal.name}
            description={meal.description}
            user={meal.user}
            calories={meal.calories}
            prep_time={meal.prep_time}
            likes={meal.likes}
            photo={meal.photo}
          />
        ))}
      </section>
    </main>
  );
};

export default Home;
