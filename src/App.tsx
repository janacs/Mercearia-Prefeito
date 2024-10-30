import { useState } from "react";

export default function App() {
  const [frutasFiltradas, setFrutasFiltradas] = useState([]);

  const frutas = [
    {
      nome: "Melão",
      preco: 7,
    },
    {
      nome: "Morango",
      preco: 6,
    },
    {
      nome: "Acerola",
      preco: 5,
    },
    {
      nome: "Laranja",
      preco: 9.9, //valor decimal
    },
    {
      nome: "Abacate",
      preco: 5,
    },
    {
      nome: "Caju",
      preco: 12,
    },
  ];

  const promocao = () => {
    setFrutasFiltradas(
      frutas.filter((elemento) => {
        return elemento.preco <= 7;
      })
    );
  };
  return (
    <section>
      <h1>Mercearia do Prefeito</h1>
      <button onClick={promocao}>Frutas na promoção</button>
      <div>
        {frutasFiltradas.map((item) => (
          <ul>
            <li>{item.preco}</li>
            <li>{item.nome}</li>
          </ul>
        ))}
      </div>
    </section>
  );
}
