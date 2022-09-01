import React, { useState, useEffect } from 'react'
import axios from './axios'
import'./Row.css'
import { Link } from 'react-router-dom'

const base_url = 'https://image.tmdb.org/t/p/original/'

function Row({title,fetchUrl, isLargeRow}) {
  let [movies,setMoviess] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl)
      setMoviess(request.data.results)
      return request;
    }

    fetchData();
  }, [fetchUrl])

  movies = movies.filter(movie => movie.backdrop_path && movie.poster_path)


  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className='row__posters'>
          {movies.map((movie,index) => (
          <Link  className="row__link" to='/movieInfo' state={movie} key={index}>
              <img key={movie.id} 
                className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
                src={`${base_url}${ isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                alt={movie.name}
                />
            </Link>
            )
          )}
        </div>
    </div>
  )
}

export default Row