import type { NextPage } from 'next';
import Layout from '../components/Layout';
import MealCard from '../components/MealCard';
import MealsFilterCard from '../components/MealsFilterCard';
import MealTypeFilter from '../components/MealTypeFilter';
import RecommendCard from '../components/RecommendCard';

import { meals, MealType } from '../TestData';

const Home: NextPage = () => {
  return (
    <Layout withSearch user={{ name: 'Omar' }}>
      <main className='w-full space-y-10'>
        {/* <h2 className='text-3xl font-bold'>Home</h2> */}
        <section className='space-y-5'>
          <section className='flex flex-col justify-center gap-5 lg:flex-row'>
            <MealsFilterCard />
            <RecommendCard />
          </section>
        </section>
        <MealTypeFilter />
        <section className='flex w-full flex-wrap justify-center gap-5 pb-28'>
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
