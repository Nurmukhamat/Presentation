import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Главная</Link></li>
        <li><Link to="/science">Наука</Link></li>
        <li><Link to="/agriculture">Сельское хозяйство</Link></li>
        <li><Link to="/it-sector">IT-сектор</Link></li>
        <li><Link to="/space">Космос</Link></li>
        <li><Link to="/teh">Технологии</Link></li>
        <li><Link to="/sfera">Сфера</Link></li>
        <li><Link to="/nano">Нано-техники</Link></li>
        <li><Link to="/brend">Известные бренды</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
