import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import logo from '../images/logo.png';
import { FiSearch } from 'react-icons/fi';
import { AiFillHome} from 'react-icons/ai'
import { useAppContext } from '../context'; 
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  
  const [search, setSearch] = useState('');

  const {fetchData, recipes, setRecipes, query, setQuery, isLoading, setIsLoading, error, setError, apiKey} = useAppContext();

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setQuery(event.target.value);
    setSearch(event.target.value);
  };

  const handleButtonClick = (event) => {
    event.preventDefault();
    fetchData();
    setSearch('');
    navigate('/');
  }

  return (
    <nav className='navbar'>
        <div className='d-flex align-items-center px-3 w-33'>
          <h1>Vegetarian Recipes</h1>
          <img src={logo} alt='...' className='logo' />
        </div>
        <div className='search-div w-33'>
          <input
          onChange={handleInputChange}
          value={search}
          className='search-bar'
          placeholder='search...'
          type='text' />
          <button
          onClick={handleButtonClick}
          type='submit'
          className='search-btn'>
            <FiSearch />
          </button>
        </div>
        <Link to='/' className='home-link w-33 mx-5'>
            <AiFillHome className='home'/>
        </Link>
    </nav>
  )
}

export default Navbar;