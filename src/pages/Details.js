import React, { useEffect, useState } from 'react';
import ExtractDetails from '../components/ExtractDetails';
import { useParams } from 'react-router-dom';

const Details = () => {

  const { id } = useParams();

  return (
    <div className='details'>
      <ExtractDetails id={id} />
    </div>
  )
}

export default Details;