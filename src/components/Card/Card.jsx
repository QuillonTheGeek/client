import React from 'react'
import { Link } from 'react-router-dom'
import './Card.scss'

const Card = ({item}) => {
  return (
    <Link to={`/product/${item.id}`} className='link'>
    <div className="card">
      <div className="image">
        {item.isNew && <span> Newly Arrived</span>}
        <img src={item.img} className='mainImg'/>
        <img src={item.img2} className='secondImg'/>
      </div>
    <h2>{item.title}</h2>
    <div className="prices">
      <h3>${item.oldPrice}</h3>
      <h3>${item.price}</h3>
    </div>
    </div>
    </Link>
  )
}

export default Card