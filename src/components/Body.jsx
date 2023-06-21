import React, {useCallback, useRef, useState } from 'react';

import Card from './Card';
import useRecipe from '../hooks/useRecipe';

import '../styles/body.css';

const Body = () => {
  const [from, setFrom] = useState(0);
  const {loading, error, recipes} = useRecipe(from);

  const intersectObserver = useRef();
  const lastRecipeRef = useCallback(entry => {
    if(loading) return
    if(intersectObserver.current) intersectObserver.current.disconnect();

    intersectObserver.current = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting){
        setFrom(from+20)
      }
    })
    if(entry) intersectObserver.current.observe(entry)
  }, [loading]);
  if(error) return <p>Error</p>

  const cards = recipes.map((r, i)=>{
    if(i+1 == recipes.length){
      return <Card ref={lastRecipeRef} name={r.name} thumbnail_url={r.thumbnail_url} description={r.description} key={r.id} />
    }
    return <Card name={r.name} thumbnail_url={r.thumbnail_url} description={r.description} key={r.id} />
  })


  return (
    <div className='body'>
        <div className='container'>
            {cards}
        </div>
    </div>
  )
}

export default Body
