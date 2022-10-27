import { Switch } from '@mantine/core';
import { useState } from 'react';

const MealTypeFilter = () => {
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
    <section className='flex justify-center gap-5 items-center'>
      <Switch
        size='md'
        label={
          <span className='text-white text-lg cursor-pointer select-none'>
            Following&apos;s meals only
          </span>
        }
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
  );
};
export default MealTypeFilter;
