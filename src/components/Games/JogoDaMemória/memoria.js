import React, { useState, useEffect } from "react";
import abacate from "../../../assets/abacate.png";
import cenoura from "../../../assets/carrot.png";
import cereja from "../../../assets/cereja.png";
import laranja from "../../../assets/laranja.png";
import kiwi from "../../../assets/kiwi.png";
import limao from "../../../assets/lemon.png";
import "./memoria.css";

const cardImages = [
  { src: abacate, matched: false },
  { src: cereja, matched: false },
  { src: kiwi, matched: false },
  { src: cenoura, matched: false },
  { src: limao, matched: false },
  { src: laranja, matched: false }
];

export default function JogoMemoria() {
  const [cards, setCards] = useState([]);
  const [firstChoice, setFirstChoice] = useState(null);
  const [secondChoice, setSecondChoice] = useState(null);
  const [disabled, setDisabled] = useState(false);

  // Embaralhar e reiniciar
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffledCards);
    setFirstChoice(null);
    setSecondChoice(null);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  const handleChoice = (card) => {
    if (!disabled) {
      firstChoice ? setSecondChoice(card) : setFirstChoice(card);
    }
  };

  useEffect(() => {
    if (firstChoice && secondChoice) {
      setDisabled(true);
      if (firstChoice.src === secondChoice.src) {
        setCards(prev =>
          prev.map(card =>
            card.src === firstChoice.src ? { ...card, matched: true } : card
          )
        );
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [firstChoice, secondChoice]);

  const resetTurn = () => {
    setFirstChoice(null);
    setSecondChoice(null);
    setDisabled(false);
  };

  return (
    <div className="jogo-memoria">
      <div className="card-grid">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`card ${card === firstChoice || card === secondChoice || card.matched ? "flipped" : ""}`}
            onClick={() => handleChoice(card)}
          >
            <div className="inner">
              <div className="front">
                <img src={card.src} alt="alimento" />
              </div>
              <div className="back"></div>
            </div>
          </div>
        ))}
      </div>

      <button className="restart-btn" onClick={shuffleCards}>
        🔄 Recomeçar
      </button>
    </div>
  );
}
