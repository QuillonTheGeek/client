import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom'; 
import './Navbar.scss'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="wrapper">
        <div className="left">
            <div className="item">
                <img src="/img/usa.png" alt="" />
                <ExpandMoreIcon/>
            </div>
            <div className="item">
                <Link className='link'>USD</Link>
                <ExpandMoreIcon/>
            </div>
            <div className="item">
            <Link className='link' to='/products/1'>Women</Link>
            </div>
            <div className="item">
            <Link className='link' to='/products/2'>Men</Link>
            </div>
            <div className="item">
            <Link className='link' to='/products/3'>Children</Link>
            </div>
        </div>

        <div className="center">
            <Link className='link' to='/'>MY-STORE</Link>
        </div>

        <div className="right">
            <div className="item">
                <Link className='link' to='/'>Homepage</Link>
            </div>
            <div className="item">
                <Link className='link' to='/'>About</Link>
            </div>
            <div className="item">
                <Link className='link' to='/'>Contact</Link>
            </div>
            <div className="item">
                <Link className='link' to='/'>Stores</Link>
            </div>
           <div className="icon">
            <SearchIcon/>
            <PersonOutlineIcon/>
            <FavoriteBorderIcon/>
            <div className="cartIcon">
            <ShoppingCartCheckoutIcon/>
                <span>0</span>
            </div>
           </div>
        </div>
     
      

        </div>
    </div>
  )
}

export default Navbar