import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./cestas.css";
import cenoura from "../../../assets/carrot.png";
import laranja from "../../../assets/laranja.png";

const alimentos = [
  { nome: "Laranja", tipo: "saudavel", img: laranja },
  { nome: "Batata Frita", tipo: "nao-saudavel", img: "https://img.freepik.com/vetores-premium/vector-de-batatas-fritas-de-desenho-animado_1245719-4482.jpg?semt=ais_hybrid&w=740" },
  { nome: "Cenoura", tipo: "saudavel", img: cenoura },
  { nome: "Refrigerante", tipo: "nao-saudavel", img: "https://i.pinimg.com/736x/b7/dc/36/b7dc368a05707000b755a6d1bf36a569.jpg" },
];

export default function JogosCestas() {
  const [pontuacao, setPontuacao] = useState(0);
  const [mensagem, setMensagem] = useState("");
  const [alimentosRestantes, setAlimentosRestantes] = useState(alimentos);

  const onDrop = (e, escolha) => {
    e.preventDefault();
    const alimentoNome = e.dataTransfer.getData("alimento");
    const alimento = alimentosRestantes.find((a) => a.nome === alimentoNome);

    if (!alimento) return;

    if (alimento.tipo === escolha) {
      setPontuacao((prev) => prev + 1);
      setMensagem("✅ Muito bem! Continue assim!");
    } else {
      setMensagem("❌ Ops! Vamos tentar novamente!");
    }

    setAlimentosRestantes((prev) =>
      prev.filter((a) => a.nome !== alimento.nome)
    );
  };

  const onDragStart = (e, nome) => {
    e.dataTransfer.setData("alimento", nome);
  };

  const allowDrop = (e) => {
    e.preventDefault();
  };

  // Função para reiniciar o jogo
  const reiniciarJogo = () => {
    setPontuacao(0);
    setMensagem("");
    setAlimentosRestantes(alimentos);
  };

  return (
    <div className="jogo-container">
      <h1>🍏 Separe os Alimentos 🍟</h1>
      <p>Pontuação: {pontuacao}</p>
      {mensagem && <p className="mensagem">{mensagem}</p>}

      <div className="area-jogo">
        {/* Área de alimentos */}
        <div className="alimentos-lista">
          {alimentosRestantes.map((alimento) => (
            <div
              key={alimento.nome}
              className="alimento-card"
              draggable
              onDragStart={(e) => onDragStart(e, alimento.nome)}
            >
              <img src={alimento.img} alt={alimento.nome} />
              <p>{alimento.nome}</p>
            </div>
          ))}
        </div>

        {/* Cestas de destino */}
        <div className="cestas">
          <div
            className="cesta saudavel"
            onDrop={(e) => onDrop(e, "saudavel")}
            onDragOver={allowDrop}
          >
            🥦 Cesta Saudável
          </div>
          <div
            className="cesta nao-saudavel"
            onDrop={(e) => onDrop(e, "nao-saudavel")}
            onDragOver={allowDrop}
          >
            🍩 Cesta Não Saudável
          </div>
        </div>
      </div>

      {/* Botão para reiniciar */}
      <button className="btn-reiniciar" onClick={reiniciarJogo}>
        🔄 Recomeçar
      </button>

      {alimentosRestantes.length === 0 && (
        <p className="fim-jogo">🎉 Parabéns! Você completou o jogo!</p>
      )}
    </div>
  );
}
