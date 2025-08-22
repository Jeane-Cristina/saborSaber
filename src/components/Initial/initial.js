// src/components/HomePage.jsx
import React, { useState } from "react";
import { useNavigate, } from "react-router-dom";
import "./initial.css";

import carrot from "../../assets/carrot.png";
import Mascote from "../../assets/JogosTEAcolhe.png";
import topLeftPiece from "../../assets/tLeft.png";
import topRightPiece from "../../assets/topRight.png";
import bottomLeftPiece from "../../assets/bLeft.png";
import bottomRightPiece from "../../assets/bRight.png";

export default function HomePage() {
  const navigate = useNavigate();
  const [role, setRole] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!role) {
      alert("⚠️ Escolha Pais/Responsáveis ou Crianças para continuar.");
      return;
    }
    if (!username || !password) {
      alert("⚠️ Usuário e senha são obrigatórios.");
      return;
    }

    // validação básica (apenas exemplo)
    if (username === "teste" && password === "123") {
      if (role === "parents") {
        navigate("/recipes");
      } else {
        navigate("/games");
      }
    } else {
      alert("❌ Usuário ou senha inválidos.");
    }
  };


  return (
    <div className="homepage">
      {/* Grupo top-left (4 peças)
      <div className="puzzle-group top-left">
        <img src={topLeftPiece} alt="" className="puzzle-piece p1" />
        <img src={topRightPiece} alt="" className="puzzle-piece p2" />
        <img src={bottomLeftPiece} alt="" className="puzzle-piece p3" />
        <img src={bottomRightPiece} alt="" className="puzzle-piece p4" />
      </div> */}

      {/* Grupo top-right (4 peças)
      <div className="puzzle-group top-right">
        <img src={topRightPiece} alt="" className="puzzle-piece p5" />
        <img src={bottomRightPiece} alt="" className="puzzle-piece p6" />
        <img src={topLeftPiece} alt="" className="puzzle-piece p7" />
        <img src={bottomLeftPiece} alt="" className="puzzle-piece p8" />
      </div> */}

      {/* Grupo bottom-left (3 peças)
      <div className="puzzle-group bottom-left">
        <img src={bottomLeftPiece} alt="" className="puzzle-piece p9" />
        <img src={topLeftPiece} alt="" className="puzzle-piece p10" />
        <img src={bottomRightPiece} alt="" className="puzzle-piece p11" />
      </div> */}

      {/* Grupo bottom-right (4 peças) */}
      {/* <div className="puzzle-group bottom-right">
        <img src={bottomRightPiece} alt="" className="puzzle-piece p12" />
        <img src={topRightPiece} alt="" className="puzzle-piece p13" />
        <img src={bottomLeftPiece} alt="" className="puzzle-piece p14" />
        <img src={topLeftPiece} alt="" className="puzzle-piece p15" />
      </div> */}

      {/* Conteúdo da página */}
      <div className="title">
        <h1>TEAcolhe - Alimentação com Afeto</h1>
      </div>

      <div className="buttons">
        <button className="btn games" onClick={() => navigate("/recipes")}>
          Pais/ Responsáveis
        </button>
        <button className="btn recipes" onClick={() => navigate("/games")}>
          Crianças
        </button>
      </div>

      <div className="image-section">
        <img src={Mascote} alt="illustration" className="main-img" />
        <div className="right-section">
          <h1>Bem-vindo!</h1>

          <div className="login-box">
            {/* <label htmlFor="role">Quem está acessando?</label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="">Selecione...</option>
              <option value="parents">Pais/Responsáveis</option>
              <option value="kids">Crianças</option>
            </select> */}

            <label htmlFor="username">Usuário</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Digite seu usuário"
              required
            />

            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha"
              required
            />

            <div className="forgot-password">
              <a href="/reset-password">Esqueceu a senha?</a>
            </div>

            <button className="btn-login" onClick={handleLogin}>
              Entrar
            </button>

          </div>
        </div>

      </div>
    </div>
  );
}
