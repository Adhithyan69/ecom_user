import React from 'react';
import { Home, ClipboardList, ShoppingCart, User } from 'lucide-react';
import './BottomNav.css';

const BottomNav = () => {
  return (
    <nav className="bottom-nav">
      <a href="#" className="bottom-nav__link bottom-nav__link--active">
        <Home className="bottom-nav__icon" />
        <span className="bottom-nav__text">Home</span>
      </a>
      <a href="#" className="bottom-nav__link">
        <ClipboardList className="bottom-nav__icon" />
        <span className="bottom-nav__text">Orders</span>
      </a>
      <a href="#" className="bottom-nav__link">
        <ShoppingCart className="bottom-nav__icon" />
        <span className="bottom-nav__text">Cart</span>
      </a>
      <a href="#" className="bottom-nav__link">
        <User className="bottom-nav__icon" />
        <span className="bottom-nav__text">Profile</span>
      </a>
    </nav>
  );
};

export default BottomNav;