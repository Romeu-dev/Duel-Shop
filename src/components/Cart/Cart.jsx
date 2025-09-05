import { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import './Cart.css';

const Cart = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateCartQuantity, getCartTotal, clearCart } = useApp();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(itemId);
    } else {
      updateCartQuantity(itemId, newQuantity);
    }
  };

  const handleCheckout = () => {
    // Criar mensagem para WhatsApp
    const cartItems = cart.map(item => 
      `• ${item.name} - R$ ${item.value.toFixed(2)} x${item.quantity}`
    ).join('\n');
    
    const total = getCartTotal();
    const message = `🛒 *Pedido DuelShop*\n\n${cartItems}\n\n💰 *Total: R$ ${total.toFixed(2)}*\n\nGostaria de finalizar este pedido!`;
    
    // Número do WhatsApp (substitua pelo seu número)
    const phoneNumber = '5511999999999'; // Formato: 55 + DDD + número
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Abrir WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Limpar carrinho e fechar
    clearCart();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={`cart-overlay ${isAnimating ? 'active' : ''}`} onClick={onClose}>
      <div className="cart-sidebar" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>Carrinho de Compras</h2>
          <button className="cart-close" onClick={onClose}>×</button>
        </div>

        <div className="cart-content">
          {cart.length === 0 ? (
            <div className="cart-empty">
              <p>Seu carrinho está vazio</p>
              <button className="continue-shopping" onClick={onClose}>
                Continuar Comprando
              </button>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {cart.map((item) => (
                  <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.name} className="cart-item-image" />
                    <div className="cart-item-details">
                      <h3 className="cart-item-name">{item.name}</h3>
                      <p className="cart-item-price">R$ {item.value.toFixed(2)}</p>
                      <div className="cart-item-controls">
                        <button 
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          className="quantity-btn"
                        >
                          -
                        </button>
                        <span className="quantity">{item.quantity}</span>
                        <button 
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          className="quantity-btn"
                        >
                          +
                        </button>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="remove-btn"
                        >
                          🗑️
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="cart-footer">
                <div className="cart-total">
                  <span>Total: R$ {getCartTotal().toFixed(2)}</span>
                </div>
                <div className="cart-actions">
                  <button className="clear-cart" onClick={clearCart}>
                    Limpar Carrinho
                  </button>
                  <button className="checkout-btn" onClick={handleCheckout}>
                    Finalizar Compra
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
