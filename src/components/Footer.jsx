import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-logo">
            <img src="./public/logo.png" height="60px" alt="Logo da loja" />
            <h3>DuelShop</h3>
          </div>
          <p>Seu destino para as melhores cartas de Yu-Gi-Oh! Encontre raridades, decks completos e acessórios para duelistas.</p>
          <div className="social-links">
            <a href="#" aria-label="Facebook">📘</a>
            <a href="#" aria-label="Instagram">📷</a>
            <a href="#" aria-label="Twitter">🐦</a>
            <a href="#" aria-label="YouTube">📺</a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Links Rápidos</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Novidades</a></li>
            <li><a href="#">Produtos</a></li>
            <li><a href="#">Ofertas</a></li>
            <li><a href="#">Coleções</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Suporte</h4>
          <ul>
            <li><a href="#">Central de Ajuda</a></li>
            <li><a href="#">Como Comprar</a></li>
            <li><a href="#">Política de Troca</a></li>
            <li><a href="#">Rastreamento</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Informações</h4>
          <ul>
            <li><a href="#">Sobre Nós</a></li>
            <li><a href="#">Política de Privacidade</a></li>
            <li><a href="#">Termos de Uso</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Newsletter</h4>
          <p>Receba as últimas novidades e ofertas exclusivas!</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Seu e-mail" />
            <button type="submit">Inscrever</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; 2024 DuelShop. Todos os direitos reservados.</p>
          <div className="payment-methods">
            <span>Formas de Pagamento:</span>
            <div className="payment-icons">
              <span>💳</span>
              <span>🏦</span>
              <span>📱</span>
              <span>💰</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
