import './NavBar.css';
import { useContext } from 'react';
import { NavLink} from 'react-router-dom'
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
          <div className='col-sm-3 d-flex flex-row'>
           <img className='logo' src='././images/logomotor.png'onClick={() => navigate('/')} alt='logo'/>
          </div>
          <div className='col-sm-6 menuNav'>
            <button className='pe-2 fs-2  btn btn-dark' ><NavLink to={`/category/motor`} className= {({ isActive }) => isActive ? 'ActiveOption' : 'Option'  }>Motores</NavLink></button>
            <button className='pe-2 fs-2  btn btn-dark' ><NavLink to={`/category/reductor`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Reductores</NavLink></button>
            <button className='pe-2 fs-2  btn btn-dark' ><NavLink to={`/category/luminarias`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Luminarias</NavLink></button>
          </div>
          <div className='col-sm-3  d-flex flex-row-reverse'>
           <CartWidget cuantity={totalQuantity} />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar