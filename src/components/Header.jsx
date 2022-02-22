import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../context/AppContext'
import { FaShoppingCart } from 'react-icons/fa'
import '../styles/components/Header.css'
import logo from '../assets/logos/games.png'

const Header = () => {
  const { state: { cart } } = useContext(AppContext);

  const medium = 30;
  const orange = '#2296F3';

  return (
    <div className='Header'>
      <h1 className='Header-title'>
        <Link to='/'>
          <img className='Header-img' src={logo} alt="Logo de games store" />
        </Link>
      </h1>
      <div className='Header-checkout'>
        <Link to='/checkout'>
          <FaShoppingCart color={orange} size={medium} />
        </Link>
        {cart.length > 0 && <div className='Header-alert'>{cart.length}</div>}
      </div>
    </div>
  );
}

export default Header