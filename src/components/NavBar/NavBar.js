import './NavBar.css';
import { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import { useNavigate } from 'react-router-dom'

import { CartContext } from '../context/CartContext';
const NavBar = () => {
const navigate = useNavigate()
const {totalQuantity}= useContext(CartContext)
  return (
    <nav  >
      <div className='container-fluid'>
        <div className='row bgHead '>
          <div className='col-sm-4 d-flex flex-row'>
           <img className='logo' src='././images/logomotor.png'onClick={() => navigate('/')} alt='logo'/>
          </div>
          <div className='col-sm-4 menuNav'>
            <div className='pe-2 fs-2'><NavLink to={`/category/motor`} className= {({ isActive }) => isActive ? 'ActiveOption' : 'Option'  }>Motores</NavLink></div>
            <div className='pe-2 fs-2'><NavLink to={`/category/reductor`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Reductores</NavLink></div>
            <div className='pe-2 fs-2'><NavLink to={`/category/luminarias`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Luminarias</NavLink></div>
          </div>
          <div className='col-sm-4  d-flex flex-row-reverse'>
           <CartWidget className="logo" totalQuantity={totalQuantity} />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar