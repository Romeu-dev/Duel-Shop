import { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import Cart from '../Cart/Cart';
import './Navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { getCartItemsCount } = useApp();

  // Fechar menu mobile quando clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (open && !event.target.closest('.navbar')) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  // Fechar menu mobile em telas maiores
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false);
  };

  const cartItemsCount = getCartItemsCount();

  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">
          <img src="./public/logo.png" height="85px" alt="Logo da loja" />
        </div>

        <div className={open ? "nav-content active" : "nav-content"}>
          <ul className="menu">
            <li><a href="#home" onClick={() => scrollToSection('home')}>Home</a></li>
            <li><a href="#novidades" onClick={() => scrollToSection('novidades')}>Novidades</a></li>
            <li><a href="#produtos" onClick={() => scrollToSection('produtos')}>Produtos</a></li>
            <li><a href="#contato" onClick={() => scrollToSection('contato')}>Contato</a></li>
          </ul>

          <div className="user-actions">
            <a href="#login" className="login-link">
              <img src="./public/user_icon.svg" alt="Login" />
            </a>
            <button className="cart-icon" onClick={toggleCart}>
              <img src="./public/cart_icon.svg" alt="Carrinho de compras" />
              {cartItemsCount > 0 && (
                <span className="cart-badge">{cartItemsCount}</span>
              )}
            </button>
          </div>
        </div>

        <button 
          className={`toggle ${open ? 'active' : ''}`} 
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}