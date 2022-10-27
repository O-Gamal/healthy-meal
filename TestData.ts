export interface MealType {
  meal_id: number;
  name: string;
  description: string;
  type: string;
  photo: string;
  calories: number;
  fat: number;
  protein: number;
  carb: number;
  prep_time: string;
  steps: string;
  ingredients: {
    name: string;
    factor: string;
  }[];
  likes: number;
  user: {
    name: string;
    photo: string;
  };
}

export const meals: MealType[] = [
  {
    meal_id: 0,
    name: 'Lemon Garlic Butter Chicken and Green Beans Skillet',
    description:
      'Chicken thighs and green beans are cooked in one skillet for easy prep and the flavor combination is spot on. With only 25 minutes of total work, this nourishing chicken meal makes weeknight dinners a breeze.',
    type: 'lunch/dinner',
    photo:
      'https://www.eatwell101.com/wp-content/uploads/2019/03/chicken-skillet-recipe-2.jpg',
    calories: 500,
    fat: 30,
    protein: 40,
    carb: 10,
    prep_time: '30 min',
    steps: `
        1. To make the lemon garlic butter chicken thighs recipe with green beans: In a small bowl, combine onion powder, paprika, salt, and pepper. Season chicken thighs generously with the spice mixture. Set aside while you prepare green beans.

        2. Arrange green beans in a microwave-safe dish with 1/2 cup (125ml) water. Cook in the microwave for 8-10 minutes, until almost done but still crisp.
        
        3. Melt 2 tablespoons butter in a large skillet over medium-low heat. Lay the seasoned chicken thighs in one layer in the skillet. Cook for 5-6 minutes then flip and cook another 5-6 minutes, until cooked through and a cooking thermometer displays 165°F (75°C). If chicken browns too quickly, lower the heat. Adjust timing depending on the thickness. Transfer chicken to a plate and set aside.
        
        4. In the same skillet, lower the heat and melt the remaining tablespoon of butter. Add chopped parsley, garlic, hot sauce, red crushed chili pepper flakes, and pre-cooked green beans and cook for 4 to 5 minutes, stirring regularly, until cooked to your liking. Add lemon juice and chicken stock and reduce the sauce for a couple of minutes, until slightly thickened.
        
        5. Push green beans to the side and add cooked chicken thighs back to the pan and reheat quickly. Adjust seasoning with pepper and serve the lemon garlic butter chicken thighs immediately, garnished with more crushed chili pepper, fresh parsley, and a slice of lemon if you like. Enjoy!
        `,
    ingredients: [
      {
        name: 'boneless chicken thighs',
        factor: '3 – 6 skinless',
      },
      {
        name: 'green beans',
        factor: '450 g',
      },
      {
        name: 'butter',
        factor: '3 tbsp',
      },
      {
        name: 'garlic cloves',
        factor: '4',
      },
      {
        name: 'paprika',
        factor: '1 tsp',
      },
      {
        name: 'onion powder',
        factor: '1 tsp',
      },
      {
        name: 'salt',
        factor: '1/4 tsp',
      },
      {
        name: 'lemon',
        factor: '1/2',
      },
      {
        name: 'chicken stock',
        factor: '1/2 cup',
      },
    ],
    user: {
      name: 'Christina Cherrier',
      photo:
        'https://secure.gravatar.com/avatar/c30348c11156422a9f902af480792c12?s=96&d=mm&r=g',
    },
    likes: 18,
  },
  {
    meal_id: 0,
    name: 'Lemon Garlic Butter Chicken and Green Beans Skillet',
    description:
      'Chicken thighs and green beans are cooked in one skillet for easy prep and the flavor combination is spot on. With only 25 minutes of total work, this nourishing chicken meal makes weeknight dinners a breeze.',
    type: 'lunch/dinner',
    photo:
      'https://www.eatwell101.com/wp-content/uploads/2019/03/chicken-skillet-recipe-2.jpg',
    calories: 500,
    fat: 30,
    protein: 40,
    carb: 10,
    prep_time: '30 min',
    steps: `
        1. To make the lemon garlic butter chicken thighs recipe with green beans: In a small bowl, combine onion powder, paprika, salt, and pepper. Season chicken thighs generously with the spice mixture. Set aside while you prepare green beans.

        2. Arrange green beans in a microwave-safe dish with 1/2 cup (125ml) water. Cook in the microwave for 8-10 minutes, until almost done but still crisp.
        
        3. Melt 2 tablespoons butter in a large skillet over medium-low heat. Lay the seasoned chicken thighs in one layer in the skillet. Cook for 5-6 minutes then flip and cook another 5-6 minutes, until cooked through and a cooking thermometer displays 165°F (75°C). If chicken browns too quickly, lower the heat. Adjust timing depending on the thickness. Transfer chicken to a plate and set aside.
        
        4. In the same skillet, lower the heat and melt the remaining tablespoon of butter. Add chopped parsley, garlic, hot sauce, red crushed chili pepper flakes, and pre-cooked green beans and cook for 4 to 5 minutes, stirring regularly, until cooked to your liking. Add lemon juice and chicken stock and reduce the sauce for a couple of minutes, until slightly thickened.
        
        5. Push green beans to the side and add cooked chicken thighs back to the pan and reheat quickly. Adjust seasoning with pepper and serve the lemon garlic butter chicken thighs immediately, garnished with more crushed chili pepper, fresh parsley, and a slice of lemon if you like. Enjoy!
        `,
    ingredients: [
      {
        name: 'boneless chicken thighs',
        factor: '3 – 6 skinless',
      },
      {
        name: 'green beans',
        factor: '450 g',
      },
      {
        name: 'butter',
        factor: '3 tbsp',
      },
      {
        name: 'garlic cloves',
        factor: '4',
      },
      {
        name: 'paprika',
        factor: '1 tsp',
      },
      {
        name: 'onion powder',
        factor: '1 tsp',
      },
      {
        name: 'salt',
        factor: '1/4 tsp',
      },
      {
        name: 'lemon',
        factor: '1/2',
      },
      {
        name: 'chicken stock',
        factor: '1/2 cup',
      },
    ],
    user: {
      name: 'Christina Cherrier',
      photo:
        'https://secure.gravatar.com/avatar/c30348c11156422a9f902af480792c12?s=96&d=mm&r=g',
    },
    likes: 18,
  },
  {
    meal_id: 0,
    name: 'Lemon Garlic Butter Chicken and Green Beans Skillet',
    description:
      'Chicken thighs and green beans are cooked in one skillet for easy prep and the flavor combination is spot on. With only 25 minutes of total work, this nourishing chicken meal makes weeknight dinners a breeze.',
    type: 'lunch/dinner',
    photo:
      'https://www.eatwell101.com/wp-content/uploads/2019/03/chicken-skillet-recipe-2.jpg',
    calories: 500,
    fat: 30,
    protein: 40,
    carb: 10,
    prep_time: '30 min',
    steps: `
        1. To make the lemon garlic butter chicken thighs recipe with green beans: In a small bowl, combine onion powder, paprika, salt, and pepper. Season chicken thighs generously with the spice mixture. Set aside while you prepare green beans.

        2. Arrange green beans in a microwave-safe dish with 1/2 cup (125ml) water. Cook in the microwave for 8-10 minutes, until almost done but still crisp.
        
        3. Melt 2 tablespoons butter in a large skillet over medium-low heat. Lay the seasoned chicken thighs in one layer in the skillet. Cook for 5-6 minutes then flip and cook another 5-6 minutes, until cooked through and a cooking thermometer displays 165°F (75°C). If chicken browns too quickly, lower the heat. Adjust timing depending on the thickness. Transfer chicken to a plate and set aside.
        
        4. In the same skillet, lower the heat and melt the remaining tablespoon of butter. Add chopped parsley, garlic, hot sauce, red crushed chili pepper flakes, and pre-cooked green beans and cook for 4 to 5 minutes, stirring regularly, until cooked to your liking. Add lemon juice and chicken stock and reduce the sauce for a couple of minutes, until slightly thickened.
        
        5. Push green beans to the side and add cooked chicken thighs back to the pan and reheat quickly. Adjust seasoning with pepper and serve the lemon garlic butter chicken thighs immediately, garnished with more crushed chili pepper, fresh parsley, and a slice of lemon if you like. Enjoy!
        `,
    ingredients: [
      {
        name: 'boneless chicken thighs',
        factor: '3 – 6 skinless',
      },
      {
        name: 'green beans',
        factor: '450 g',
      },
      {
        name: 'butter',
        factor: '3 tbsp',
      },
      {
        name: 'garlic cloves',
        factor: '4',
      },
      {
        name: 'paprika',
        factor: '1 tsp',
      },
      {
        name: 'onion powder',
        factor: '1 tsp',
      },
      {
        name: 'salt',
        factor: '1/4 tsp',
      },
      {
        name: 'lemon',
        factor: '1/2',
      },
      {
        name: 'chicken stock',
        factor: '1/2 cup',
      },
    ],
    user: {
      name: 'Christina Cherrier',
      photo:
        'https://secure.gravatar.com/avatar/c30348c11156422a9f902af480792c12?s=96&d=mm&r=g',
    },
    likes: 18,
  },
  {
    meal_id: 0,
    name: 'Lemon Garlic Butter Chicken and Green Beans Skillet',
    description:
      'Chicken thighs and green beans are cooked in one skillet for easy prep and the flavor combination is spot on. With only 25 minutes of total work, this nourishing chicken meal makes weeknight dinners a breeze.',
    type: 'lunch/dinner',
    photo:
      'https://www.eatwell101.com/wp-content/uploads/2019/03/chicken-skillet-recipe-2.jpg',
    calories: 500,
    fat: 30,
    protein: 40,
    carb: 10,
    prep_time: '30 min',
    steps: `
        1. To make the lemon garlic butter chicken thighs recipe with green beans: In a small bowl, combine onion powder, paprika, salt, and pepper. Season chicken thighs generously with the spice mixture. Set aside while you prepare green beans.

        2. Arrange green beans in a microwave-safe dish with 1/2 cup (125ml) water. Cook in the microwave for 8-10 minutes, until almost done but still crisp.
        
        3. Melt 2 tablespoons butter in a large skillet over medium-low heat. Lay the seasoned chicken thighs in one layer in the skillet. Cook for 5-6 minutes then flip and cook another 5-6 minutes, until cooked through and a cooking thermometer displays 165°F (75°C). If chicken browns too quickly, lower the heat. Adjust timing depending on the thickness. Transfer chicken to a plate and set aside.
        
        4. In the same skillet, lower the heat and melt the remaining tablespoon of butter. Add chopped parsley, garlic, hot sauce, red crushed chili pepper flakes, and pre-cooked green beans and cook for 4 to 5 minutes, stirring regularly, until cooked to your liking. Add lemon juice and chicken stock and reduce the sauce for a couple of minutes, until slightly thickened.
        
        5. Push green beans to the side and add cooked chicken thighs back to the pan and reheat quickly. Adjust seasoning with pepper and serve the lemon garlic butter chicken thighs immediately, garnished with more crushed chili pepper, fresh parsley, and a slice of lemon if you like. Enjoy!
        `,
    ingredients: [
      {
        name: 'boneless chicken thighs',
        factor: '3 – 6 skinless',
      },
      {
        name: 'green beans',
        factor: '450 g',
      },
      {
        name: 'butter',
        factor: '3 tbsp',
      },
      {
        name: 'garlic cloves',
        factor: '4',
      },
      {
        name: 'paprika',
        factor: '1 tsp',
      },
      {
        name: 'onion powder',
        factor: '1 tsp',
      },
      {
        name: 'salt',
        factor: '1/4 tsp',
      },
      {
        name: 'lemon',
        factor: '1/2',
      },
      {
        name: 'chicken stock',
        factor: '1/2 cup',
      },
    ],
    user: {
      name: 'Christina Cherrier',
      photo:
        'https://secure.gravatar.com/avatar/c30348c11156422a9f902af480792c12?s=96&d=mm&r=g',
    },
    likes: 18,
  },
  {
    meal_id: 0,
    name: 'Lemon Garlic Butter Chicken and Green Beans Skillet',
    description:
      'Chicken thighs and green beans are cooked in one skillet for easy prep and the flavor combination is spot on. With only 25 minutes of total work, this nourishing chicken meal makes weeknight dinners a breeze.',
    type: 'lunch/dinner',
    photo:
      'https://www.eatwell101.com/wp-content/uploads/2019/03/chicken-skillet-recipe-2.jpg',
    calories: 500,
    fat: 30,
    protein: 40,
    carb: 10,
    prep_time: '30 min',
    steps: `
        1. To make the lemon garlic butter chicken thighs recipe with green beans: In a small bowl, combine onion powder, paprika, salt, and pepper. Season chicken thighs generously with the spice mixture. Set aside while you prepare green beans.

        2. Arrange green beans in a microwave-safe dish with 1/2 cup (125ml) water. Cook in the microwave for 8-10 minutes, until almost done but still crisp.
        
        3. Melt 2 tablespoons butter in a large skillet over medium-low heat. Lay the seasoned chicken thighs in one layer in the skillet. Cook for 5-6 minutes then flip and cook another 5-6 minutes, until cooked through and a cooking thermometer displays 165°F (75°C). If chicken browns too quickly, lower the heat. Adjust timing depending on the thickness. Transfer chicken to a plate and set aside.
        
        4. In the same skillet, lower the heat and melt the remaining tablespoon of butter. Add chopped parsley, garlic, hot sauce, red crushed chili pepper flakes, and pre-cooked green beans and cook for 4 to 5 minutes, stirring regularly, until cooked to your liking. Add lemon juice and chicken stock and reduce the sauce for a couple of minutes, until slightly thickened.
        
        5. Push green beans to the side and add cooked chicken thighs back to the pan and reheat quickly. Adjust seasoning with pepper and serve the lemon garlic butter chicken thighs immediately, garnished with more crushed chili pepper, fresh parsley, and a slice of lemon if you like. Enjoy!
        `,
    ingredients: [
      {
        name: 'boneless chicken thighs',
        factor: '3 – 6 skinless',
      },
      {
        name: 'green beans',
        factor: '450 g',
      },
      {
        name: 'butter',
        factor: '3 tbsp',
      },
      {
        name: 'garlic cloves',
        factor: '4',
      },
      {
        name: 'paprika',
        factor: '1 tsp',
      },
      {
        name: 'onion powder',
        factor: '1 tsp',
      },
      {
        name: 'salt',
        factor: '1/4 tsp',
      },
      {
        name: 'lemon',
        factor: '1/2',
      },
      {
        name: 'chicken stock',
        factor: '1/2 cup',
      },
    ],
    user: {
      name: 'Christina Cherrier',
      photo:
        'https://secure.gravatar.com/avatar/c30348c11156422a9f902af480792c12?s=96&d=mm&r=g',
    },
    likes: 18,
  },
  {
    meal_id: 0,
    name: 'Lemon Garlic Butter Chicken and Green Beans Skillet',
    description:
      'Chicken thighs and green beans are cooked in one skillet for easy prep and the flavor combination is spot on. With only 25 minutes of total work, this nourishing chicken meal makes weeknight dinners a breeze.',
    type: 'lunch/dinner',
    photo:
      'https://www.eatwell101.com/wp-content/uploads/2019/03/chicken-skillet-recipe-2.jpg',
    calories: 500,
    fat: 30,
    protein: 40,
    carb: 10,
    prep_time: '30 min',
    steps: `
        1. To make the lemon garlic butter chicken thighs recipe with green beans: In a small bowl, combine onion powder, paprika, salt, and pepper. Season chicken thighs generously with the spice mixture. Set aside while you prepare green beans.

        2. Arrange green beans in a microwave-safe dish with 1/2 cup (125ml) water. Cook in the microwave for 8-10 minutes, until almost done but still crisp.
        
        3. Melt 2 tablespoons butter in a large skillet over medium-low heat. Lay the seasoned chicken thighs in one layer in the skillet. Cook for 5-6 minutes then flip and cook another 5-6 minutes, until cooked through and a cooking thermometer displays 165°F (75°C). If chicken browns too quickly, lower the heat. Adjust timing depending on the thickness. Transfer chicken to a plate and set aside.
        
        4. In the same skillet, lower the heat and melt the remaining tablespoon of butter. Add chopped parsley, garlic, hot sauce, red crushed chili pepper flakes, and pre-cooked green beans and cook for 4 to 5 minutes, stirring regularly, until cooked to your liking. Add lemon juice and chicken stock and reduce the sauce for a couple of minutes, until slightly thickened.
        
        5. Push green beans to the side and add cooked chicken thighs back to the pan and reheat quickly. Adjust seasoning with pepper and serve the lemon garlic butter chicken thighs immediately, garnished with more crushed chili pepper, fresh parsley, and a slice of lemon if you like. Enjoy!
        `,
    ingredients: [
      {
        name: 'boneless chicken thighs',
        factor: '3 – 6 skinless',
      },
      {
        name: 'green beans',
        factor: '450 g',
      },
      {
        name: 'butter',
        factor: '3 tbsp',
      },
      {
        name: 'garlic cloves',
        factor: '4',
      },
      {
        name: 'paprika',
        factor: '1 tsp',
      },
      {
        name: 'onion powder',
        factor: '1 tsp',
      },
      {
        name: 'salt',
        factor: '1/4 tsp',
      },
      {
        name: 'lemon',
        factor: '1/2',
      },
      {
        name: 'chicken stock',
        factor: '1/2 cup',
      },
    ],
    user: {
      name: 'Christina Cherrier',
      photo:
        'https://secure.gravatar.com/avatar/c30348c11156422a9f902af480792c12?s=96&d=mm&r=g',
    },
    likes: 18,
  },
  {
    meal_id: 0,
    name: 'Lemon Garlic Butter Chicken and Green Beans Skillet',
    description:
      'Chicken thighs and green beans are cooked in one skillet for easy prep and the flavor combination is spot on. With only 25 minutes of total work, this nourishing chicken meal makes weeknight dinners a breeze.',
    type: 'lunch/dinner',
    photo:
      'https://www.eatwell101.com/wp-content/uploads/2019/03/chicken-skillet-recipe-2.jpg',
    calories: 500,
    fat: 30,
    protein: 40,
    carb: 10,
    prep_time: '30 min',
    steps: `
        1. To make the lemon garlic butter chicken thighs recipe with green beans: In a small bowl, combine onion powder, paprika, salt, and pepper. Season chicken thighs generously with the spice mixture. Set aside while you prepare green beans.

        2. Arrange green beans in a microwave-safe dish with 1/2 cup (125ml) water. Cook in the microwave for 8-10 minutes, until almost done but still crisp.
        
        3. Melt 2 tablespoons butter in a large skillet over medium-low heat. Lay the seasoned chicken thighs in one layer in the skillet. Cook for 5-6 minutes then flip and cook another 5-6 minutes, until cooked through and a cooking thermometer displays 165°F (75°C). If chicken browns too quickly, lower the heat. Adjust timing depending on the thickness. Transfer chicken to a plate and set aside.
        
        4. In the same skillet, lower the heat and melt the remaining tablespoon of butter. Add chopped parsley, garlic, hot sauce, red crushed chili pepper flakes, and pre-cooked green beans and cook for 4 to 5 minutes, stirring regularly, until cooked to your liking. Add lemon juice and chicken stock and reduce the sauce for a couple of minutes, until slightly thickened.
        
        5. Push green beans to the side and add cooked chicken thighs back to the pan and reheat quickly. Adjust seasoning with pepper and serve the lemon garlic butter chicken thighs immediately, garnished with more crushed chili pepper, fresh parsley, and a slice of lemon if you like. Enjoy!
        `,
    ingredients: [
      {
        name: 'boneless chicken thighs',
        factor: '3 – 6 skinless',
      },
      {
        name: 'green beans',
        factor: '450 g',
      },
      {
        name: 'butter',
        factor: '3 tbsp',
      },
      {
        name: 'garlic cloves',
        factor: '4',
      },
      {
        name: 'paprika',
        factor: '1 tsp',
      },
      {
        name: 'onion powder',
        factor: '1 tsp',
      },
      {
        name: 'salt',
        factor: '1/4 tsp',
      },
      {
        name: 'lemon',
        factor: '1/2',
      },
      {
        name: 'chicken stock',
        factor: '1/2 cup',
      },
    ],
    user: {
      name: 'Christina Cherrier',
      photo:
        'https://secure.gravatar.com/avatar/c30348c11156422a9f902af480792c12?s=96&d=mm&r=g',
    },
    likes: 18,
  },
  {
    meal_id: 0,
    name: 'Lemon Garlic Butter Chicken and Green Beans Skillet',
    description:
      'Chicken thighs and green beans are cooked in one skillet for easy prep and the flavor combination is spot on. With only 25 minutes of total work, this nourishing chicken meal makes weeknight dinners a breeze.',
    type: 'lunch/dinner',
    photo:
      'https://www.eatwell101.com/wp-content/uploads/2019/03/chicken-skillet-recipe-2.jpg',
    calories: 500,
    fat: 30,
    protein: 40,
    carb: 10,
    prep_time: '30 min',
    steps: `
        1. To make the lemon garlic butter chicken thighs recipe with green beans: In a small bowl, combine onion powder, paprika, salt, and pepper. Season chicken thighs generously with the spice mixture. Set aside while you prepare green beans.

        2. Arrange green beans in a microwave-safe dish with 1/2 cup (125ml) water. Cook in the microwave for 8-10 minutes, until almost done but still crisp.
        
        3. Melt 2 tablespoons butter in a large skillet over medium-low heat. Lay the seasoned chicken thighs in one layer in the skillet. Cook for 5-6 minutes then flip and cook another 5-6 minutes, until cooked through and a cooking thermometer displays 165°F (75°C). If chicken browns too quickly, lower the heat. Adjust timing depending on the thickness. Transfer chicken to a plate and set aside.
        
        4. In the same skillet, lower the heat and melt the remaining tablespoon of butter. Add chopped parsley, garlic, hot sauce, red crushed chili pepper flakes, and pre-cooked green beans and cook for 4 to 5 minutes, stirring regularly, until cooked to your liking. Add lemon juice and chicken stock and reduce the sauce for a couple of minutes, until slightly thickened.
        
        5. Push green beans to the side and add cooked chicken thighs back to the pan and reheat quickly. Adjust seasoning with pepper and serve the lemon garlic butter chicken thighs immediately, garnished with more crushed chili pepper, fresh parsley, and a slice of lemon if you like. Enjoy!
        `,
    ingredients: [
      {
        name: 'boneless chicken thighs',
        factor: '3 – 6 skinless',
      },
      {
        name: 'green beans',
        factor: '450 g',
      },
      {
        name: 'butter',
        factor: '3 tbsp',
      },
      {
        name: 'garlic cloves',
        factor: '4',
      },
      {
        name: 'paprika',
        factor: '1 tsp',
      },
      {
        name: 'onion powder',
        factor: '1 tsp',
      },
      {
        name: 'salt',
        factor: '1/4 tsp',
      },
      {
        name: 'lemon',
        factor: '1/2',
      },
      {
        name: 'chicken stock',
        factor: '1/2 cup',
      },
    ],
    user: {
      name: 'Christina Cherrier',
      photo:
        'https://secure.gravatar.com/avatar/c30348c11156422a9f902af480792c12?s=96&d=mm&r=g',
    },
    likes: 18,
  },
];
