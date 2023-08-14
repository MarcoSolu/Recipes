import React, { useState, useEffect } from 'react'
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAppContext } from '../context';
import Loader from '../components/Loader';
import striptags from 'striptags';



const ExtractDetails = ({ id }) => {

    const [isDetailsLoading, setIsDetailsLoading] = useState(false)
    const [isDetailsError, seIstDetailsError] = useState(false)
    const [details, setDetails] = useState([]);

    const { apiKey } = useAppContext();

    const fetchDetailsData = async () => {
        try {
            setIsDetailsLoading(true)
            const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}&includeNutrition=false`)
            setDetails(response.data)
        } catch (err) {
            seIstDetailsError(true);
        } finally {
            setIsDetailsLoading(false)
        }
    }

    useEffect(() => {
        fetchDetailsData()
    }, [id])

    const ingredients = details?.extendedIngredients?.map((ing, index) => {
        return (
            <li key={index}>{ing.original}</li>
        )
    });
    
    const instructions = details?.analyzedInstructions?.[0]?.steps?.map(item => {
        return (
            <li key={item.number} >{item.step}</li>
        )
    }); 

  return (
    <div> 
        {isDetailsLoading ? (
        <Loader /> 
        ) : (
        <div className='details-container'>

            <div className='d-flex flex-column align-items-center border-divs'>
                <h1 className='details-title'> {details.title} </h1>
                <img className='details-img my-5 w-50' src={details.image} />
            </div>
            
            <div className='recipe-description border-divs'>
                <h2 className='py-2'>Recipe description:</h2>
                <p> {striptags(details.summary)} </p>
            </div>

            <h2 className='details-ready border-divs'> Ready in:
                <span> {details.readyInMinutes}' </span>
            </h2>

            <div className='details-ingredients border-divs'>
                <h2 className='py-2'>Ingredients</h2>
                <ul className='details-ingredients-list'>
                    {ingredients}
                </ul>
            </div>

            <div className='border-divs'>
                <h2 className='py-2'>Preparation</h2>
                <ol className='details-instrucions-list'>
                    {instructions}
                </ol>
            </div>
            
        </div>
        )}
    </div>
    )
}

export default ExtractDetails;