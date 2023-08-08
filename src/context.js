import { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

const apiKey = 'c32047bb34cf431eb1e9fc7bc8279a05';

export function AppContextProvider({ children }) {
    const [recipes, setRecipes] = useState([]);
    const [query, setQuery] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [selectedIntolerances, setSelectedIntolerances] = useState([]);
    const [cuisines, setCuisines] = useState([]);
    const [mealsType, setMealsType] = useState([]);

    const fetchData = async () => {
        try {
            setIsLoading(true)
            
            const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch`, {
            params: {
                apiKey: apiKey,
                diet: 'vegetarian',
                number: 10,
                query: query,
                includeIngredients: true,
                instructionRequired: true,
                intolerances: selectedIntolerances.join(","),
                cuisine: cuisines,
                type: mealsType,
            }
            });

            if (response.data.results.length === 0) {
                throw new Error('No recipes found, try again');
            }   

            else {
                setRecipes(response.data.results);
            }
        } catch (err) {
            alert(err.message)
        } finally {
            setIsLoading(false)
        }
    }


    useEffect(() => {
        fetchData()
      }, [])

    return (
        <AppContext.Provider value={{fetchData, recipes, setRecipes, query, setQuery, isLoading, setIsLoading, selectedIntolerances, setSelectedIntolerances, cuisines, setCuisines, mealsType, setMealsType, apiKey}}>
            {children}
        </AppContext.Provider>
    )
}
