import './NavBar.css';
import { NavLink, Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'

import { useNavigate } from 'react-router-dom'

const NavBar = () => {

  const navigate = useNavigate()

  return (
    <nav className="NavBar bgHeader" >
          <h3 onClick={() => navigate('/')}>AvilaElec</h3>
        <div className='probando'>
          <NavLink to={`/category/celular`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Motores</NavLink>
          <NavLink to={`/category/tablet`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Reductores</NavLink>
          <NavLink to={`/category/notebook`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Luminarias</NavLink>
          <NavLink to={`/category/motor`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Motores</NavLink>
        </div>
        <CartWidget className="logo" />
    </nav>
  )
}

export default NavBar