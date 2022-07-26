import React, { useEffect, useState } from 'react'
import { getGifs } from './helpers/getGifs';
import  GiphyItem  from './GiphyItem';



const GiphyGrid = ({category}) => {
    const [gifs, setGifs] = useState([]);
    

    

    useEffect(()=> {
      getGifs(category)
      .then( images => setGifs(images))

    }, [])

  return (
    <>
      <h3>{category}</h3>
      <hr />
      <section>
        {
          gifs.map(gif => {
            return (
              <GiphyItem key={gif.id} gif={gif}/>
            )
          }) 
        }
      </section>
    </>
  )
}

export default GiphyGrid
