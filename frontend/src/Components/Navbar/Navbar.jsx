import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { ShopContext } from '../../Context/ShopContext';
import nav_dropdown from '../Assets/dropdown_icon.png';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Update the menu state based on the current location
    switch (location.pathname) {
      case '/':
        setMenu("shop");
        break;
      case '/usedcar':
        setMenu("usedcar");
        break;
      case '/sellcar':
        setMenu("sellcar");
        break;
      case '/newcar':
        setMenu("newcar");
        break;
      default:
        setMenu("shop");
    }
  }, [location.pathname]);

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }

  const handleLogout = () => {
    localStorage.removeItem('auth-token');
    navigate('/');
  }

  return (
    <div className='nav'>
      <Link to='/' style={{ textDecoration: 'none' }} className="nav-logo">
        <img src={logo} alt="logo" />
        <p>SHOPPER</p>
      </Link>
      <img onClick={dropdown_toggle} className='nav-dropdown' src={nav_dropdown} alt="" />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => { setMenu("shop") }}>
          <Link to='/' style={{ textDecoration: 'none' }}>Shop</Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("usedcar") }}>
          <Link to='/usedcar' style={{ textDecoration: 'none' }}>Buy Used Car</Link>
          {menu === "usedcar" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("sellcar") }}>
          <Link to='/sellcar' style={{ textDecoration: 'none' }}>Sell Cars</Link>
          {menu === "sellcar" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("newcar") }}>
          <Link to='/newcar' style={{ textDecoration: 'none' }}>Buy New Car</Link>
          {menu === "newcar" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem('auth-token')
          ? <button onClick={handleLogout}>Logout</button>
          : <Link to='/login' style={{ textDecoration: 'none' }}><button>Login</button></Link>}
        <Link to="/cart"><img src={cart_icon} alt="cart" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
}

export default Navbar;
