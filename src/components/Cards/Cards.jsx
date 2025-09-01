
import "./cards.css";


function Card({ name, image, description, value }) {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <h2 className="card-title">{name}</h2>
      <p className="card-desc">{description}</p>
      <p className="card-price">Valor: ${value}</p>
    </div>
  );
}


export default function CardSection() {
  const cards = [
    {
      name: "Dragão Branco de Olhos Azuis",
      image: "/yugioh.jpg",
      description: "Um dos dragões mais poderosos e lendários.",
      value: 500,
    },
    {
      name: "Mago Negro",
      image: "https://ygoprodeck.com/pics/46986414.jpg",
      description: "O mago definitivo em termos de ataque e defesa.",
      value: 450,
    },
    {
      name: "Exodia, o Proibido",
      image: "https://ygoprodeck.com/pics/33396948.jpg",
      description: "Quando todas as partes estão reunidas, a vitória é certa.",
      value: 1000,
    },
    {
      name: "Dragão Negro de Olhos Vermelhos",
      image: "https://ygoprodeck.com/pics/74677422.jpg",
      description: "Um dragão temível com imenso poder destrutivo.",
      value: 400,
    },
    {
      name: "Kuriboh",
      image: "https://ygoprodeck.com/pics/40640057.jpg",
      description: "Uma criatura pequena mas com um grande coração.",
      value: 150,
    },
    {
      name: "Slifer, o Dragão Celeste",
      image: "https://ygoprodeck.com/pics/10000020.jpg",
      description: "Um dos deuses egípcios, com poder devastador.",
      value: 2000,
    },
  ];

  return (
    <section className="card-grid">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </section>
  );
}
