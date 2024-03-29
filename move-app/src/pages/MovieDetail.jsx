import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { IMG_BASE_URL } from '../components/Movie'


export default function MovieDetail() {
  const {title} = useParams();
  const {state} = useLocation();


  return (
    <div className="page-container">
      <div style={{display:'flex'}}>
        <img
          style={{width:'300px',height:'450px'}}
          src={IMG_BASE_URL + state.poster_path} 
          alt="영화포스터" />
        <div>
          <h4>{title}</h4>
        </div>
      </div>
    </div>
  )
}
