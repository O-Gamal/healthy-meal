import { Switch } from '@mantine/core';
import type { NextPage } from 'next';
import { useState } from 'react';
import Layout from '../components/Layout';
import MealCard from '../components/MealCard';
import MealsFilterCard from '../components/MealsFilterCard';
import RecommendCard from '../components/RecommendCard';

import { meals, MealType } from '../TestData';

const Home: NextPage = () => {
  const mealTypes = ['Snacks', 'Breakfasts', 'Lunches', 'Dinners'];

  const [selectedMealTypes, setSelectedMealTypes] = useState<string[]>([]);

  const handleMealTypeFilter = (mealType: string) => {
    if (selectedMealTypes.includes(mealType)) {
      const updatedMealTypesList = selectedMealTypes.filter(
        (meal) => meal !== mealType
      );
      setSelectedMealTypes(updatedMealTypesList);
      return;
    }

    setSelectedMealTypes([...selectedMealTypes, mealType]);
  };

  return (
    <Layout withSearch user={{ name: 'Omar' }}>
      <main className='w-full space-y-10'>
        {/* <h2 className='text-3xl font-bold'>Home</h2> */}
        <section className='space-y-5'>
          <section className='flex justify-center gap-5'>
            <MealsFilterCard />
            <RecommendCard />
          </section>
          <section className='flex justify-center gap-5 items-center'>
            <Switch
              size='md'
              label={
                <span className='text-white text-lg cursor-pointer select-none'>
                  Following's meals only
                </span>
              }
              className=''
            />
            <div className='space-x-2'>
              {mealTypes.map((mealType) => (
                <span
                  key={mealType}
                  onClick={() => handleMealTypeFilter(mealType)}
                  className={`border select-none cursor-pointer px-2 py-1 rounded-md ${
                    selectedMealTypes.includes(mealType)
                      ? 'bg-green border-green text-dark-primary font-semibold'
                      : 'hover:bg-dark-secondary border-white'
                  }`}
                >
                  {mealType}
                </span>
              ))}
            </div>
          </section>
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
    </Layout>
  );
};

export default Home;
