import React from 'react';
import { useAppContext } from '../context';

const MealsType = () => {

    const { mealsType, setMealsType } = useAppContext();

    const mealsTypeOptions = [
        'main course',
        'side dish',
        'dessert',
        'appetizer',
        'salad',
        'bread',
        'breakfast',
        'soup',
        'beverage',
        'sauce',
        'marinade',
        'fingerfood',
        'snack',
        'drink'
    ];

    const handleMealsTypeChange = (event) => {
        const selectedType = event.target.value;
        setMealsType(selectedType);
      };

    const mealsTypeFilter = mealsTypeOptions.map(item => {
        return (
            <option
            className='meal-select' 
                value={item}
            >
                {item}
            </option>
        )
    })

  return (
    <div className='meals-type-div'>
        <h2>Meals Type:</h2>
        <select
          value={mealsType}
          onChange={handleMealsTypeChange}
          className='form-control'
        >
          <option
          value=''>
            Select a meal type...
            </option>
          {mealsTypeFilter}
        </select>
    </div>
  )
}

export default MealsType