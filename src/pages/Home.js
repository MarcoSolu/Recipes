import React, { useState, useEffect } from "react";
import { useAppContext } from "../context";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import Intolerances from "../components/Intolerances";
import Cuisines from "../components/Cuisines";
import MealsType from "../components/MealsType";

const Home = () => {

  const { recipes, isLoading} = useAppContext(); 
  const [showFilters, setShowFilters] = useState(false);
  
  const elements = recipes.map(recipe => {
    return (
      <div key={recipe.id} className="card">
        <div className="card-body">
          <img src={recipe.image} className="card-img-top" alt="..." />
          <div className="recipes-info">
            <span className="card-title text-center text-wrap">{recipe.title}</span>
            <Link to={`/details/${recipe.id}`}>
              <button type="button" className="btn btn-success">More Info</button>
            </Link>
          </div>
        </div>
      </div>
    )
  })

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <main className="main">
      <div className="filter">
        <button className="btn btn-success mt-2" onClick={toggleFilters}>
            Filters
          </button>
      </div>

      <div className="filter-container">
          {isLoading ? <Loader /> : <div className={`filter-menu ${showFilters ? "active" : ""}`}>
            <Intolerances />
            <Cuisines />
            <MealsType />
          </div>}
          </div>

      <div className="recipes-grid-container">
          {isLoading ? <Loader /> : elements}
      </div>
    </main>
  )
}

export default Home;