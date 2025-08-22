"use client"
import { useState, useEffect } from "react"
import "./newgame.css"
import album from '../../../assets/ambum.jpg'
import jogoMemoria from '../../../assets/jogomemomora.jpg'
import quem from '../../../assets/quemsou.jpg'
import colagem from '../../../assets/colagem.jpg'
import quadrinho from '../../../assets/quadrinho.jpg'



export default function TrilhaAprendizagem() {
  const [telaAtual, setTelaAtual] = useState("menu")
  const [albumData, setAlbumData] = useState({})
  const [missaoCompleta, setMissaoCompleta] = useState({})
  const [quemSouEuCompleto, setQuemSouEuCompleto] = useState({})
  const [memoriaCartas, setMemoriaCartas] = useState([])
  const [cartasViradas, setCartasViradas] = useState([])
  const [paresEncontrados, setParesEncontrados] = useState([])
  const [tentativas, setTentativas] = useState(0)

  const [progressoJogos, setProgressoJogos] = useState({
    album: false,
    missoes: false,
    quemSouEu: false,
    memoria: false,
  })

  const alimentos = [
    { emoji: "🍎", nome: "Maçã", cor: "#ff6b6b" },
    { emoji: "🍌", nome: "Banana", cor: "#ffd93d" },
    { emoji: "🍊", nome: "Laranja", cor: "#ff8c42" },
    { emoji: "🍇", nome: "Uva", cor: "#9b59b6" },
    { emoji: "🥕", nome: "Cenoura", cor: "#e67e22" },
    { emoji: "🥬", nome: "Alface", cor: "#27ae60" },
    { emoji: "🍅", nome: "Tomate", cor: "#e74c3c" },
    { emoji: "🥒", nome: "Pepino", cor: "#2ecc71" },
  ]

  const frutasDescricoes = [
    { emoji: "🍎", nome: "Maçã", descricao: "Sou vermelha e crocante! 🍎" },
    { emoji: "🍌", nome: "Banana", descricao: "Sou amarela e doce! 🍌" },
    { emoji: "🍊", nome: "Laranja", descricao: "Sou laranja e suculenta! 🍊" },
    { emoji: "🍇", nome: "Uva", descricao: "Somos pequenas e roxas! 🍇" },
  ]

  const videos = [
    { titulo: "Frutas Coloridas 🌈", url: 'https://docs.google.com/videos/d/1ZCe_Utl9AMowQiO_418ntGhX1qWQVcQCX5z0gcwozzU/edit?usp=sharing' },
    { titulo: "Vegetais Saudáveis 🥬", url: 'https://docs.google.com/videos/d/1ZCe_Utl9AMowQiO_418ntGhX1qWQVcQCX5z0gcwozzU/edit?usp=sharing' },
    { titulo: "Alimentação Divertida 🎉", url: 'https://docs.google.com/videos/d/1ZCe_Utl9AMowQiO_418ntGhX1qWQVcQCX5z0gcwozzU/edit?usp=sharing' },
  ]

  useEffect(() => {
    const alimentosComResposta = Object.keys(albumData).length
    if (alimentosComResposta >= 4) {
      // Pelo menos 4 alimentos marcados
      setProgressoJogos((prev) => ({ ...prev, album: true }))
    }
  }, [albumData])

  useEffect(() => {
    const missoesCompletas = Object.values(missaoCompleta).filter(Boolean).length
    if (missoesCompletas >= 4) {
      setProgressoJogos((prev) => ({ ...prev, missoes: true }))
    }
  }, [missaoCompleta])

  useEffect(() => {
    const respostasCorretas = Object.values(quemSouEuCompleto).filter(Boolean).length
    if (respostasCorretas >= 4) {
      setProgressoJogos((prev) => ({ ...prev, quemSouEu: true }))
    }
  }, [quemSouEuCompleto])

  useEffect(() => {
    if (telaAtual === "memoria") {
      iniciarJogoMemoria()
    }
  }, [telaAtual])

  useEffect(() => {
    if (paresEncontrados.length === memoriaCartas.length && memoriaCartas.length > 0) {
      setProgressoJogos((prev) => ({ ...prev, memoria: true }))
    }
  }, [paresEncontrados, memoriaCartas])

  const jogoDesbloqueado = (jogo) => {
    switch (jogo) {
      case "album":
        return true // Primeiro jogo sempre desbloqueado
      case "missoes":
        return progressoJogos.album
      case "quem-sou-eu":
        return progressoJogos.missoes
      case "memoria":
        return progressoJogos.quemSouEu
      default:
        return false
    }
  }

  const navegarParaJogo = (jogo) => {
    if (jogoDesbloqueado(jogo)) {
      setTelaAtual(jogo)
    }
  }

  const iniciarJogoMemoria = () => {
    const frutasMemoria = ["🍎", "🍌", "🍊", "🍇", "🍎", "🍌", "🍊", "🍇"]
    const cartasEmbaralhadas = frutasMemoria.sort(() => Math.random() - 0.5)
    setMemoriaCartas(cartasEmbaralhadas)
    setCartasViradas([])
    setParesEncontrados([])
    setTentativas(0)
  }

  const virarCarta = (index) => {
    if (cartasViradas.length === 2 || cartasViradas.includes(index) || paresEncontrados.includes(index)) {
      return
    }

    const novasCartasViradas = [...cartasViradas, index]
    setCartasViradas(novasCartasViradas)

    if (novasCartasViradas.length === 2) {
      setTentativas(tentativas + 1)
      const [primeira, segunda] = novasCartasViradas

      if (memoriaCartas[primeira] === memoriaCartas[segunda]) {
        setTimeout(() => {
          setParesEncontrados([...paresEncontrados, primeira, segunda])
          setCartasViradas([])
        }, 1000)
      } else {
        setTimeout(() => {
          setCartasViradas([])
        }, 1000)
      }
    }
  }

  const AlbumFigurinhas = () => (
    <div className="tela-jogo">
      <div className="header-jogo">
        <button className="btn-voltar" onClick={() => setTelaAtual("menu")}>
          ⬅️ Voltar
        </button>
        <h2>📖 Álbum de Figurinhas</h2>
        <a href={album} download className="btn-pdf">📄 PDF</a>
      </div>

      <div className="instrucoes">
        <p>Clique nos alimentos que você já experimentou! 😋</p>
      </div>

      <div className="grid-album">
        {alimentos.map((alimento, index) => (
          <div key={index} className="card-alimento">
            <div className="emoji-alimento">{alimento.emoji}</div>
            <h3>{alimento.nome}</h3>
            <div className="opcoes-gosto">
              <button
                className={`btn-gosto ${albumData[alimento.nome] === "gostei" ? "ativo" : ""}`}
                onClick={() => setAlbumData({ ...albumData, [alimento.nome]: "gostei" })}
              >
                😍 Gostei
              </button>
              <button
                className={`btn-gosto ${albumData[alimento.nome] === "nao-gostei" ? "ativo" : ""}`}
                onClick={() => setAlbumData({ ...albumData, [alimento.nome]: "nao-gostei" })}
              >
                😐 Não Gostei
              </button>
              <button
                className={`btn-gosto ${albumData[alimento.nome] === "nao-experimentei" ? "ativo" : ""}`}
                onClick={() => setAlbumData({ ...albumData, [alimento.nome]: "nao-experimentei" })}
              >
                ❓ Não Experimentei
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const MuralMissoes = () => {
    const [frutasArrastadas, setFrutasArrastadas] = useState({})
    const [draggedItem, setDraggedItem] = useState(null)

    const handleDragStart = (e, fruta) => {
      setDraggedItem(fruta)
    }

    const handleDragOver = (e) => {
      e.preventDefault()
    }

    const handleDrop = (e, nomeAlvo) => {
      e.preventDefault()
      if (draggedItem && draggedItem.nome === nomeAlvo) {
        setFrutasArrastadas({ ...frutasArrastadas, [nomeAlvo]: draggedItem })
        setMissaoCompleta({ ...missaoCompleta, [nomeAlvo]: true })
      }
      setDraggedItem(null)
    }

    const frutasMissao = alimentos.slice(0, 4)

    return (
      <div className="tela-jogo">
        <div className="header-jogo">
          <button className="btn-voltar" onClick={() => setTelaAtual("menu")}>
            ⬅️ Voltar
          </button>
          <h2>🎯 Mural de Missões</h2>
          <a href={colagem} download className="btn-pdf">📄 PDF</a>
        </div>

        <div className="instrucoes">
          <p>Arraste cada fruta para seu nome! 🎯</p>
        </div>

        <div className="container-missoes">
          <div className="frutas-disponiveis">
            <h3>Frutas:</h3>
            {frutasMissao.map((fruta, index) => (
              <div key={index} className="fruta-arrastavel" draggable onDragStart={(e) => handleDragStart(e, fruta)}>
                {fruta.emoji}
              </div>
            ))}
          </div>

          <div className="alvos-nomes">
            <h3>Nomes:</h3>
            {frutasMissao.map((fruta, index) => (
              <div
                key={index}
                className={`alvo-nome ${missaoCompleta[fruta.nome] ? "completo" : ""}`}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, fruta.nome)}
              >
                {frutasArrastadas[fruta.nome] ? frutasArrastadas[fruta.nome].emoji : ""}
                <span>{fruta.nome}</span>
                {missaoCompleta[fruta.nome] && <span className="check">✅</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  const QuemSouEu = () => {
    const [respostasCorretas, setRespostasCorretas] = useState({})
    const [draggedFruit, setDraggedFruit] = useState(null)

    const handleDragStart = (e, fruta) => {
      setDraggedFruit(fruta)
    }

    const handleDragOver = (e) => {
      e.preventDefault()
    }

    const handleDrop = (e, descricao) => {
      e.preventDefault()
      if (draggedFruit && draggedFruit.descricao === descricao) {
        setRespostasCorretas({ ...respostasCorretas, [descricao]: draggedFruit })
        setQuemSouEuCompleto({ ...quemSouEuCompleto, [descricao]: true })
      }
      setDraggedFruit(null)
    }

    return (
      <div className="tela-jogo">
        <div className="header-jogo">
          <button className="btn-voltar" onClick={() => setTelaAtual("menu")}>
            ⬅️ Voltar
          </button>
          <h2>❓ Quem Sou Eu?</h2>
          <a href={quem} download className="btn-pdf">📄 PDF</a>
        </div>

        <div className="instrucoes">
          <p>Leia a dica e arraste a fruta certa! 🤔</p>
        </div>

        <div className="container-quem-sou-eu">
          <div className="frutas-opcoes">
            <h3>Frutas:</h3>
            {frutasDescricoes.map((fruta, index) => (
              <div key={index} className="fruta-opcao" draggable onDragStart={(e) => handleDragStart(e, fruta)}>
                {fruta.emoji}
              </div>
            ))}
          </div>

          <div className="descricoes">
            <h3>Dicas:</h3>
            {frutasDescricoes.map((fruta, index) => (
              <div
                key={index}
                className={`card-descricao ${quemSouEuCompleto[fruta.descricao] ? "completo" : ""}`}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, fruta.descricao)}
              >
                <p>{fruta.descricao}</p>
                <div className="area-resposta">
                  {respostasCorretas[fruta.descricao] ? respostasCorretas[fruta.descricao].emoji : "❓"}
                  {quemSouEuCompleto[fruta.descricao] && <span className="check">✅</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  const JogoMemoria = () => (
    <div className="tela-jogo">
      <div className="header-jogo">
        <button className="btn-voltar" onClick={() => setTelaAtual("menu")}>
          ⬅️ Voltar
        </button>
        <h2>🧠 Jogo da Memória</h2>
        <a href={jogoMemoria} download className="btn-pdf">📄 PDF</a>
      </div>

      <div className="instrucoes">
        <p>Encontre os pares de frutas! 🎯 Tentativas: {tentativas}</p>
      </div>

      <div className="grid-memoria">
        {memoriaCartas.map((carta, index) => (
          <div
            key={index}
            className={`carta-memoria ${cartasViradas.includes(index) || paresEncontrados.includes(index) ? "virada" : ""}`}
            onClick={() => virarCarta(index)}
          >
            <div className="carta-frente">❓</div>
            <div className="carta-verso">{carta}</div>
          </div>
        ))}
      </div>

      {paresEncontrados.length === memoriaCartas.length && (
        <div className="vitoria">
          <h3>🎉 Parabéns! Você encontrou todos os pares! 🎉</h3>
          <button className="btn-jogar-novamente" onClick={iniciarJogoMemoria}>
            🔄 Jogar Novamente
          </button>
        </div>
      )}
    </div>
  )

  const MenuPrincipal = () => (
    <>
      <nav class="menu-bar">
        <a class="recipe-button" href="/" data-discover="true">Início</a>
        <a class="recipe-button" href="/games" data-discover="true">Jogos</a>
      </nav>
      <div className="tela-menu">
        <div className="header">
          <h1>🌟 Trilha da Alimentação Saudável 🌟</h1>
          <p>Vamos aprender brincando! 🎮</p>
          <div className="barra-progresso-geral">
            <div className="progresso-texto">
              Seu Progresso: {Object.values(progressoJogos).filter(Boolean).length}/4 jogos completos
            </div>
            <div className="barra-progresso">
              <div
                className="progresso-preenchido"
                style={{ width: `${(Object.values(progressoJogos).filter(Boolean).length / 4) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="secao-apresentacao">
          <video src="https://docs.google.com/videos/d/1ZCe_Utl9AMowQiO_418ntGhX1qWQVcQCX5z0gcwozzU/edit?usp=sharing" controls className="video-apresentacao" />
          <img src={quadrinho} alt="Imagem de apoio" className="imagem-apresentacao" />
        </div>

        <div className="secao-videos">
          <h2>📺 Vídeos Educativos</h2>
          <div className="grid-videos">
            {videos.map((video, index) => (
              <div key={index} className="card-video">
                <video
                  src={video.url}
                  controls
                  className="video-player"
                />
                <h3>{video.titulo}</h3>
              </div>
            ))}
          </div>
        </div>


        <div className="secao-jogos">
          <h2>🎮 Jogos Divertidos</h2>
          <div className="ordem-jogos">
            <p>👆 Siga a ordem dos jogos para desbloquear o próximo!</p>
          </div>
          <div className="grid-jogos">
            <button
              className={`card-jogo ${progressoJogos.album ? "completo" : ""}`}
              onClick={() => navegarParaJogo("album")}
            >
              <div className="numero-jogo">1</div>
              <div className="icone-jogo">📖</div>
              <h3>Álbum de Figurinhas</h3>
              <p>Marque os alimentos que você já experimentou!</p>
              {progressoJogos.album && <div className="badge-completo">✅ Completo</div>}
            </button>

            <button
              className={`card-jogo ${!jogoDesbloqueado("missoes") ? "bloqueado" : ""} ${progressoJogos.missoes ? "completo" : ""}`}
              onClick={() => navegarParaJogo("missoes")}
              disabled={!jogoDesbloqueado("missoes")}
            >
              <div className="numero-jogo">2</div>
              <div className="icone-jogo">{jogoDesbloqueado("missoes") ? "🎯" : "🔒"}</div>
              <h3>Mural de Missões</h3>
              <p>{jogoDesbloqueado("missoes") ? "Arraste as frutas para o nome certo!" : "Complete o jogo anterior!"}</p>
              {progressoJogos.missoes && <div className="badge-completo">✅ Completo</div>}
            </button>

            <button
              className={`card-jogo ${!jogoDesbloqueado("quem-sou-eu") ? "bloqueado" : ""} ${progressoJogos.quemSouEu ? "completo" : ""}`}
              onClick={() => navegarParaJogo("quem-sou-eu")}
              disabled={!jogoDesbloqueado("quem-sou-eu")}
            >
              <div className="numero-jogo">3</div>
              <div className="icone-jogo">{jogoDesbloqueado("quem-sou-eu") ? "❓" : "🔒"}</div>
              <h3>Quem Sou Eu?</h3>
              <p>
                {jogoDesbloqueado("quem-sou-eu")
                  ? "Descubra qual fruta está sendo descrita!"
                  : "Complete o jogo anterior!"}
              </p>
              {progressoJogos.quemSouEu && <div className="badge-completo">✅ Completo</div>}
            </button>

            <button
              className={`card-jogo ${!jogoDesbloqueado("memoria") ? "bloqueado" : ""} ${progressoJogos.memoria ? "completo" : ""}`}
              onClick={() => navegarParaJogo("memoria")}
              disabled={!jogoDesbloqueado("memoria")}
            >
              <div className="numero-jogo">4</div>
              <div className="icone-jogo">{jogoDesbloqueado("memoria") ? "🧠" : "🔒"}</div>
              <h3>Jogo da Memória</h3>
              <p>{jogoDesbloqueado("memoria") ? "Encontre os pares de frutas!" : "Complete o jogo anterior!"}</p>
              {progressoJogos.memoria && <div className="badge-completo">✅ Completo</div>}
            </button>
          </div>

          {Object.values(progressoJogos).every(Boolean) && (
            <div className="parabens-final">
              <h2>🎉 PARABÉNS! 🎉</h2>
              <p>Você completou toda a trilha de aprendizagem!</p>
              <p>Agora você é um expert em alimentação saudável! 🌟</p>
            </div>
          )}
        </div>
      </div>
    </>

  )

  const renderizarTela = () => {
    switch (telaAtual) {
      case "album":
        return <AlbumFigurinhas />
      case "missoes":
        return <MuralMissoes />
      case "quem-sou-eu":
        return <QuemSouEu />
      case "memoria":
        return <JogoMemoria />
      default:
        return <MenuPrincipal />
    }
  }

  return <div className="app">{renderizarTela()}</div>
}
