import React from 'react';
import { useAppContext } from '../context';

const Cuisines = () => {

    const { cuisines, setCuisines } = useAppContext();

    const cousinesList = ['african',
    'asian',
    'american',
    'british',
    'cajun',
    'caribbean',
    'chinese',
    'eastern-european',
    'european',
    'french',
    'german',
    'greek',
    'indian',
    'irish',
    'italian',
    'japanese',
    'jewish',
    'korean',
    'latin-american',
    'mediterranean',
    'mexican',
    'middle-eastern',
    'nordic',
    'southern',
    'spanish',
    'thai',
    'vietnamese'];

    const handleCuisinesChange = (event) => {
      const selectedType = event.target.value;
      setCuisines(selectedType);
    };

    const cuisinesFilter = cousinesList.map(item => {
      return (
          <option
              className='option-value'
              value={item}
          >
              {item}
          </option>
      )
  })


  
  return (
    <div className='cuisines-div'>
        <h2>Cuisine:</h2>
        <select
          value={cuisines}
          onChange={handleCuisinesChange}
          className='form-control'
        >
          <option value=''>Select a cousine...</option>
          {cuisinesFilter}
        </select>
    </div>
  )
}

export default Cuisines