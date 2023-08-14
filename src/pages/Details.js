import React, { useEffect, useState } from 'react';
import ExtractDetails from '../components/ExtractDetails';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Details = () => {

  const { id } = useParams();
  const searchParams = new URLSearchParams(window.location.search);
  const recipeTitle = searchParams.get('title');

  return (
    <>
      <Helmet>
        <title>{recipeTitle}</title>
      </Helmet>
      <div className='details'>
        <ExtractDetails id={id} />
      </div>
    </>
  )
}

export default Details;