import React from 'react'
import { Link } from 'react-router-dom'
import './Categories.scss'

const Categories = () => {
  return (
    <div className="categories">
<div className="col">
    <div className="row">
        <img src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
    <button>
        <Link className='link' to='/products/1'>Sale</Link>
    </button>
    </div>
    <div className="row">
         <img src="https://images.pexels.com/photos/3236651/pexels-photo-3236651.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
    <button>
        <Link className='link' to='/products/1'>Women</Link>
    </button>
    </div>
</div>
<div className="col">
    <div className="row">
        <img src="https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
    <button>
        <Link className='link' to='/products/1'>New season</Link>
    </button>
    </div>
</div>
<div className="col col-l">
    <div className="row">
    <div className="col">
    <div className="row">
        <img src="https://images.pexels.com/photos/380782/pexels-photo-380782.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
    <button>
        <Link className='link' to='/products/1'>Men</Link>
    </button>
    </div>
    </div>
    <div className="col">
    <div className="row">
         <img src="https://images.pexels.com/photos/1460838/pexels-photo-1460838.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
    <button>
        <Link className='link' to='/products/1'>Assesories</Link>
    </button>
    </div>
    </div>
    </div>
    <div className="row">
         <img src="https://images.pexels.com/photos/2562992/pexels-photo-2562992.png?auto=compress&cs=tinysrgb&w=400" alt="" />
    <button>
        <Link className='link' to='/products/1'>Shoes</Link>
    </button>
    </div>
</div>
    </div>
  )
}

export default Categories