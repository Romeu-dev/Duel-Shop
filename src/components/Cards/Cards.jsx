
import { memo, useState } from 'react';
import { useApp } from '../../context/AppContext';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import "./Cards.css";

const Card = memo(({ id, name, image, description, value }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [ref, isIntersecting] = useIntersectionObserver();
  const { addToCart } = useApp();

  const handleAddToCart = () => {
    addToCart({ id, name, image, description, value });
  };

  return (
    <div 
      ref={ref}
      className={`card ${isIntersecting ? 'animate' : ''}`}
    >
      <div className="card-image-container">
        <img 
          src={image} 
          alt={name} 
          className={`card-image ${isImageLoaded ? 'loaded' : ''}`}
          onLoad={() => setIsImageLoaded(true)}
        />
        {!isImageLoaded && <div className="card-skeleton"></div>}
      </div>
      <div className="card-content">
        <h2 className="card-title">{name}</h2>
        <p className="card-desc">{description}</p>
        <div className="card-footer">
          <p className="card-price">R$ {value.toFixed(2)}</p>
          <button 
            className="add-to-cart-btn"
            onClick={handleAddToCart}
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>
  );
});


export default function CardSection() {
  const cards = [
    {
      id: 1,
      name: "Dragão Branco de Olhos Azuis",
      image: "/yugioh.jpg",
      description: "Um dos dragões mais poderosos e lendários.",
      value: 500,
    },
    {
      id: 2,
      name: "Mago Negro",
      image: "https://ygoprodeck.com/pics/46986414.jpg",
      description: "O mago definitivo em termos de ataque e defesa.",
      value: 450,
    },
    {
      id: 3,
      name: "Exodia, o Proibido",
      image: "https://ygoprodeck.com/pics/33396948.jpg",
      description: "Quando todas as partes estão reunidas, a vitória é certa.",
      value: 1000,
    },
    {
      id: 4,
      name: "Dragão Negro de Olhos Vermelhos",
      image: "https://ygoprodeck.com/pics/74677422.jpg",
      description: "Um dragão temível com imenso poder destrutivo.",
      value: 400,
    },
    {
      id: 5,
      name: "Kuriboh",
      image: "https://ygoprodeck.com/pics/40640057.jpg",
      description: "Uma criatura pequena mas com um grande coração.",
      value: 150,
    },
    {
      id: 6,
      name: "Slifer, o Dragão Celeste",
      image: "https://ygoprodeck.com/pics/10000020.jpg",
      description: "Um dos deuses egípcios, com poder devastador.",
      value: 2000,
    },
  ];

  return (
    <section className="card-section">
      <div className="card-grid">
        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
}
