import { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <img src="./public/logo.png" height="85px" alt="Logo da loja" />

    
      <div className={open ? "nav-content active" : "nav-content"}>
      
        <div className="search-container">
          <input type="search" placeholder="Pesquisar cartas..." />
          <button className="search-btn"><img src="./public/search_icon.svg" alt="Busca" /></button>
        </div>

        <ul className="menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">Novidades</a></li>
          <li><a href="#">Produtos</a></li>
          <li><a href="#">Contato</a></li>
        </ul>

        <div className="user-actions">
          <a href="#" className="login-link"><img src="./public/user_icon.svg" alt="" /></a>
          <a href="#" className="cart-icon"><img src="./public/cart_icon.svg" alt="Carrinho de compras" /></a>
        </div>

      </div>

    
      <button className="toggle" onClick={() => setOpen(!open)}>
        ☰
      </button>
    </nav>
  );
}