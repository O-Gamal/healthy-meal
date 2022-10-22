import type { NextPage } from 'next';
import Layout from '../components/Layout';
import MealCard from '../components/MealCard';

import { meals, MealType } from '../TestData';

const Home: NextPage = () => {
  return (
    <Layout>
      <main>
        <h2 className='text-4xl font-bold mb-10'>Home</h2>
        <section className='grid grid-cols-3 gap-10 flex-wrap mb-10'>
          {meals.map(
            (meal: MealType) =>
              <MealCard
                key={meal.meal_id}
                name={meal.name}
                description={meal.description}
                user={meal.user}
                calories={meal.calories}
                prep_time={meal.prep_time}
                likes={meal.likes}
                photo={meal.photo}
              />
          )}
        </section>
      </main>
    </Layout>
  )
}

export default Home
