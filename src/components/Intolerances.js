import React from 'react';
import { useAppContext } from '../context';

const Intolerances = () => {

    const { selectedIntolerances, setSelectedIntolerances } = useAppContext();

    const intoleranceList = [
        'dairy',
        'egg',
        'gluten',
        'grain',
        'peanut',
        'seafood',
        'sesame',
        'shellfish',
        'soy',
        'sulfite',
        'tree nut',
        'wheat'
    ];

    const handleIntoleranceChange = (event) => {
        const intoleranceValue = event.target.value
        if (selectedIntolerances.includes(intoleranceValue)) {
          setSelectedIntolerances(
            selectedIntolerances.filter(item => item !== intoleranceValue)
          )
        }
        else {
          setSelectedIntolerances([...selectedIntolerances, intoleranceValue]);
        }
      };

      const intoleranceElements = intoleranceList.map(item => {
        return (
            <label key={item}>
                <input
                    type='checkbox'
                    value={item}
                    checked={selectedIntolerances.includes(item)}
                    onChange={handleIntoleranceChange}
                    className='mx-2'
                />
                {item.charAt(0).toUpperCase() + item.slice(1)}
            </label>
        )
      })

  return (
    <div className="intolerance-container">
        <div className='intolerance-div'>
          <h2>Intolerances:</h2>
          <span>All recipes returned will not contain ingredients that are not suitable with selected intolerances.</span>
          <div className="intolerance-checkboxes">
              {intoleranceElements}
          </div>
        </div>
    </div>
  )
}

export default Intolerances