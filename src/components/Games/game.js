import React, { useState } from "react";
// import Menu from "../components/Menu";
import JogosCestas from "./JogoCestas/cestas.js";
import JogoMemoria from "./JogoDaMemória/memoria.js";
import "./game.css";
import { Link } from "react-router-dom";

export default function JogosPage() {
    const [jogoSelecionado, setJogoSelecionado] = useState(null);

    const jogos = [
        { id: "alimentacao", nome: "Separar Alimentos" },
        { id: "memoria", nome: "Jogo da Memória" },
        // Futuro: adicionar outros jogos
    ];

    if (jogoSelecionado) {
        return (
            <div>
                <nav className="menu-bar">
                    <Link to="/" className="recipe-button" style={{ textDecoration: "none" }}>Início</Link>
                    <Link to="/jogos" className="recipe-button" style={{ textDecoration: "none" }}>Jogos</Link>
                    <button
                        className="voltar-btn"
                        onClick={() => setJogoSelecionado(null)}
                    >
                        🔙 Voltar para seleção
                    </button>
                </nav>

                {jogoSelecionado === "alimentacao" && <JogosCestas />}
                {jogoSelecionado === "memoria" && <JogoMemoria />}
            </div>
        );
    }

    return (
        <div>
            <nav className="menu-bar">
                <Link to="/" className="recipe-button" style={{ textDecoration: 'none' }}>Início</Link>
                <Link to="/recipes" className="recipe-button" style={{ textDecoration: 'none' }}>Receitas</Link>
            </nav>
            <div className="jogos-home">
                <h1>Vamos brincar ?</h1>
                <div className="lista-jogos">
                    {jogos.map((jogo) => (
                        <div
                            key={jogo.id}
                            className="jogo-card"
                            onClick={() => setJogoSelecionado(jogo.id)}
                        >
                            {jogo.nome}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
