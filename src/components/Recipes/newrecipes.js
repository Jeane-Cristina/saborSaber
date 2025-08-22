import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card"
import { Button } from "./button"
import { Progress } from "./progess"
import { Badge } from "./badge"
import { Link } from "react-router-dom";
import estica from '../../assets/imgestica.jpg'
import img2 from '../../assets/4990109033214094757 (1).jpg'
import img3 from '../../assets/4990109033214094757.jpg'
import img4 from '../../assets/4990109033214094758.jpg'
import img5 from '../../assets/4990109033214094759.jpg'
import img6 from '../../assets/4990109033214094760.jpg'
import img7 from '../../assets/4990109033214094761.jpg'
import img8 from '../../assets/4990109033214094762.jpg'
import img9 from '../../assets/4990109033214094763.jpg'
import img10 from '../../assets/4990109033214094764.jpg'
import img11 from '../../assets/4990109033214094765.jpg'
import img12 from '../../assets/4990109033214094766.jpg'
import img13 from '../../assets/4990109033214094767.jpg'
import img14 from '../../assets/4990109033214094768.jpg'
import img15 from '../../assets/4990109033214094769.jpg'
import img16 from '../../assets/4990109033214094769.jpg'
import img17 from '../../assets/4990109033214094770.jpg'
import img18 from '../../assets/4990109033214094771.jpg'
import img19 from '../../assets/4990109033214094772.jpg'
import img20 from '../../assets/4990109033214094773.jpg'
import img21 from '../../assets/4990109033214094773.jpg'
import img22 from '../../assets/4990109033214094774.jpg'
import img23 from '../../assets/4990109033214094775.jpg'
import img24 from '../../assets/4990109033214094776.jpg'
import img25 from '../../assets/4990109033214094776.jpg'
import img26 from '../../assets/4990109033214094777.jpg'
import img27 from '../../assets/4990109033214094778.jpg'
import img28 from '../../assets/4990109033214094779.jpg'
import img29 from '../../assets/4990109033214094780.jpg'
import img30 from '../../assets/4990109033214094781.jpg'
import img31 from '../../assets/4990109033214094782.jpg'
import img32 from '../../assets/4990109033214094783.jpg'
import img33 from '../../assets/4990109033214094784.jpg'
import d1 from '../../assets/4990109033214094784.jpg'
import d2 from '../../assets/4990109033214094784.jpg'
import d3 from '../../assets/4990109033214094784.jpg'
import c1 from '../../assets/4990109033214094830.jpg'
import c2 from '../../assets/4990109033214094831.jpg'
import c3 from '../../assets/4990109033214094832.jpg'
import c4 from '../../assets/4990109033214094833.jpg'
import c5 from '../../assets/4990109033214094834.jpg'
import c6 from '../../assets/4990109033214094835.jpg'
import c7 from '../../assets/4990109033214094836.jpg'
import c8 from '../../assets/4990109033214094837.jpg'
import c9 from '../../assets/4990109033214094838.jpg'
import c10 from '../../assets/4990109033214094839.jpg'
import c11 from '../../assets/4990109033214094840.jpg'

import {
  Trophy,
  Star,
  Lock,
  CheckCircle,
  Play,
  FileText,
  BookOpen,
  Users,
  Download,
  Upload,
  ImageIcon,
  Award,
  Sparkles,
  RefreshCw,
} from "lucide-react"
import './newrecipes.css'

const initialLevels = [
  {
    id: 0,
    title: "Boas-vindas",
    description: "Apresentação e convite para a jornada",
    unlocked: true,
    completed: false,
    totalPoints: 50,
    certificateName: "Explorador de Nutrientes",
    activities: [
      {
        id: "0-1",
        name: "Arroizito se apresenta e convida para a jornada",
        type: "video",
        points: 30,
        completed: false,
        iconType: "play",
        src: 'https://drive.google.com/file/d/1ZCe_Utl9AMowQiO_418ntGhX1qWQVcQCX5z0gcwozzU/preview',
      },
      {
        id: "0-2",
        name: "Alguns Conceitos Importantes para nossa jornada",
        type: "pdf",
        points: 20,
        completed: false,
        iconType: "filetext",
      },
    ],
  },
  {
    id: 1,
    title: "Sensibilização",
    description: "Compreendendo a seletividade alimentar no TEA",
    unlocked: false,
    completed: false,
    totalPoints: 100,
    certificateName: "Chef Afetivo",
    activities: [
      {
        id: "1-1",
        name: "O que é seletividade alimentar no TEA",
        type: "video",
        points: 40,
        completed: false,
        iconType: "play",
        src: 'https://drive.google.com/file/d/1ZCe_Utl9AMowQiO_418ntGhX1qWQVcQCX5z0gcwozzU/preview',
      },
      {
        id: "1-2",
        name: "Características nutricionais e deficiências",
        type: "pdf",
        points: 30,
        completed: false,
        iconType: "filetext",
      },
      { id: "1-3", name: "Quiz de 5 perguntas", type: "quiz", points: 30, completed: false, iconType: "checkcircle" },
    ],
  },
  {
    id: 2,
    title: "Fundamentos Nutricionais",
    description: "Principais nutrientes e alimentos fortificados",
    unlocked: false,
    completed: false,
    totalPoints: 170,
    certificateName: "Encadeador Mestre",
    activities: [
      {
        id: "2-1",
        name: "Cards nutritivos interativos",
        type: "cards",
        points: 40,
        completed: false,
        iconType: "users",
      },
      {
        id: "2-2",
        name: 'Ebook "Receitas Fortificadas"',
        type: "ebook",
        points: 50,
        completed: false,
        iconType: "bookopen",
      },
      {
        id: "2-3",
        name: "Montar cardápio de 1 dia",
        type: "mission",
        points: 30,
        completed: false,
        iconType: "trophy",
      },
    ],
  },
  {
    id: 3,
    title: "Fundamentos Comportamentais",
    description: "Terapia alimentar e encadeamento",
    unlocked: false,
    completed: false,
    totalPoints: 130,
    certificateName: "Guardião da Rotina",
    activities: [
      {
        id: "3-1",
        name: "Introdução ao esticamento alimentar",
        type: "img",
        points: 50,
        completed: false,
        iconType: "play",
      },
      {
        id: "3-2",
        name: "Vídeos: encadeamento alimentar",
        type: "imgc",
        points: 50,
        completed: false,
        iconType: "bookopen",
      },
      {
        id: "3-3",
        name: "Ebook de encadeamento alimentar",
        type: "imgcE",
        points: 50,
        completed: false,
        iconType: "bookopen",
      },
    ],
  },
  {
    id: 4,
    title: "Missão",
    description: "Tabela de Esticamento",
    unlocked: false,
    completed: false,
    totalPoints: 50,
    certificateName: "Explorador de Nutrientes",
    activities: [
      {
        id: "4-1",
        name: "Tabela de Esticamento Alimentar",
        type: "imgcE",
        points: 50,
        completed: false,
        iconType: "play",
      },
      {
        id: "2-3",
        name: "Envie a tabela completa aqui",
        type: "mission",
        points: 30,
        completed: false,
        iconType: "trophy",
      },
      {
        id: "3-4",
        name: "Escolher 1 alimento e criar plano",
        type: "mission",
        points: 30,
        completed: false,
        iconType: "trophy",
      },
    ],
  },
]

const encouragementMessages = [
  "🌟 Excelente! Você está fazendo um trabalho incrível!",
  "🎉 Parabéns! Mais um passo importante concluído!",
  "💪 Que dedicação! Continue assim, você está no caminho certo!",
  "✨ Fantástico! Seu comprometimento faz toda a diferença!",
  "🚀 Incrível! Você está construindo conhecimento valioso!",
  "🌈 Maravilhoso! Cada atividade te aproxima do seu objetivo!",
  "🎯 Perfeito! Você está dominando os conceitos importantes!",
  "💖 Que progresso lindo! Sua dedicação é inspiradora!",
]

const getIcon = (iconType, className) => {
  switch (iconType) {
    case "play":
      return <Play className={className} />
    case "filetext":
      return <FileText className={className} />
    case "checkcircle":
      return <CheckCircle className={className} />
    case "users":
      return <Users className={className} />
    case "bookopen":
      return <BookOpen className={className} />
    case "trophy":
      return <Trophy className={className} />
    default:
      return <CheckCircle className={className} />
  }
}

// Removendo tipagem TypeScript dos props dos componentes
const LevelCertificate = ({ level, onClose }) => {
  const downloadCertificate = () => {
    // monta o path do certificado pelo ID ou nome
    const certificatePath = `../../assets/1png`


    const link = document.createElement("a")
    link.href = certificatePath
    link.download = certificatePath
    link.click()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full text-center shadow-2xl">
        <Award className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">🎉 Parabéns!</h2>
        <h3 className="text-xl font-semibold text-blue-600 mb-4">Você conquistou o certificado:</h3>
        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-4 rounded-lg mb-4">
          <h4 className="text-lg font-bold text-gray-800">{level.certificateName}</h4>
        </div>
        <p className="text-gray-600 mb-6">
          Nível {level.id} - {level.title} concluído com sucesso!
        </p>
        <div className="flex gap-3">
          <Button onClick={downloadCertificate} variant="outline" className="flex-1 bg-transparent">
            <Download className="h-4 w-4 mr-2" />
            Baixar Certificado
          </Button>
          <Button onClick={onClose} className="flex-1 bg-blue-600 hover:bg-blue-700">
            <Sparkles className="h-4 w-4 mr-2" />
            Continuar
          </Button>
        </div>
      </div>
    </div>
  )
}

const EncouragementMessage = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, 3000)
    return () => clearTimeout(timer)
  }, [onClose])


  return (
    <div className="fixed top-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg z-40 animate-bounce">
      <div className="flex items-center gap-2">
        <Sparkles className="h-5 w-5" />
        <span className="font-medium">{message}</span>
      </div>
    </div>
  )
}

const VideoPlayer = ({ title, onComplete, src }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)

  const handleEnded = () => {
    setIsPlaying(false)
    setProgress(100)
  }

  return (
    <div className="bg-gray-900 rounded-lg p-6 text-white">
      <div className="aspect-video bg-black rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
        {!isPlaying ? (
          <Button
            onClick={() => setIsPlaying(true)}
            size="lg"
            className="bg-red-600 hover:bg-red-700"
          >
            <Play className="h-6 w-6 mr-2" />
            Reproduzir Vídeo
          </Button>
        ) : (
          <iframe
            title={'teste'}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            style={{ width: '100%', height: '100%' }}
            className="absolute top-0 left-0 w-full h-full"
            src={src}
            controls
            autoPlay
            onEnded={handleEnded}
            onTimeUpdate={(e) => {
              const current = e.target.currentTime
              const total = e.target.duration
              setProgress((current / total) * 100)
            }}
          />
        )}
      </div>

      <h3 className="text-lg font-semibold mb-2">{title}</h3>

      {isPlaying && (
        <Progress value={progress} className="w-full mb-3" />
      )}

      {progress === 100 && (
        <Button onClick={onComplete} className="w-full">
          <CheckCircle className="h-4 w-4 mr-2" />
          Marcar como Concluído
        </Button>
      )}
    </div>
  )
}

const PDFDownload = ({ title, onComplete }) => {
  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = "/placeholder.pdf"
    link.download = `${title}.pdf`
    link.click()
    onComplete()
  }

  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <FileText className="h-8 w-8 text-blue-600" />
          <div>
            <h3 className="font-semibold text-gray-800">{title}</h3>
            <p className="text-sm text-gray-600">Material em PDF para download</p>
          </div>
        </div>
        <Button onClick={handleDownload} className="bg-blue-600 hover:bg-blue-700">
          <Download className="h-4 w-4 mr-2" />
          Baixar PDF
        </Button>
      </div>
    </div>
  )
}

const InteractiveCards = ({ title, onComplete }) => {
  const [currentCard, setCurrentCard] = useState(0)
  const [completed, setCompleted] = useState(false)

  const nutritionCards = [
    { nutrient: "Alimentação com afeto", image: c1 },
    { nutrient: "Fontes de Nutrientes B12", image: c2 },
    { nutrient: "Fontes de Nutrientes B6", image: c3 },
    { nutrient: "Fontes de Nutrientes B9", image: c4 },
    { nutrient: "Fontes de Nutrientes Vitamina E", image: c5 },
    { nutrient: "Fontes de Nutrientes Vitamina D", image: c6 },
    { nutrient: "Fontes de Nutrientes Zinco", image: c7 },
    { nutrient: "Fontes de Nutrientes Selênio", image: c8 },
    { nutrient: "Fontes de Nutrientes Magnésio", image: c9 },
    { nutrient: "Fontes de Nutrientes Cálcio", image: c10 },
    { nutrient: "Fontes de Nutrientes Biotina e B5", image: c11 },

  ]

  const handleNext = () => {
    if (currentCard < nutritionCards.length - 1) {
      setCurrentCard(currentCard + 1)
    } else {
      setCompleted(true)
    }
  }

  const handleDownload = (image, nutrient) => {
    const link = document.createElement("a")
    link.href = image
    link.download = `${nutrient}.png`
    link.click()
  }

  if (completed) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">Cards Concluídos!</h3>
        <p className="text-gray-600 mb-4">
          Você explorou todos os nutrientes importantes!
        </p>
        <Button onClick={onComplete} className="bg-green-600 hover:bg-green-700">
          Finalizar Atividade
        </Button>
      </div>
    )
  }

  const card = nutritionCards[currentCard]

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 max-w-lg w-full mx-auto">
      <div className="text-center mb-4">
        <Badge variant="outline">
          {currentCard + 1} / {nutritionCards.length}
        </Badge>
      </div>

      <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg p-6 mb-4">
        <h3 className="text-2xl font-bold text-center mb-4 text-purple-800">
          {card.nutrient}
        </h3>

        <div className="flex justify-center">
          <img
            src={card.image}
            alt={card.nutrient}
            className="w-full max-w-md h-auto object-contain rounded-lg shadow"
          />
        </div>

        <div className="mt-4 flex justify-center">
          <Button
            onClick={() => handleDownload(card.image, card.nutrient)}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Baixar Card
          </Button>
        </div>
      </div>

      <Button onClick={handleNext} className="w-full">
        {currentCard < nutritionCards.length - 1 ? "Próximo Card" : "Finalizar"}
      </Button>
    </div>

  )
}


const QuizComponent = ({ title, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState([])
  const [showResults, setShowResults] = useState(false)
  const [showCorrectAnswers, setShowCorrectAnswers] = useState(false)
  const [canRetry, setCanRetry] = useState(false)

  const questions = [
    {
      question: "O que é seletividade alimentar no TEA?",
      options: [
        "Uma preferência normal por certos alimentos",
        "Uma condição que afeta a aceitação de alimentos devido a sensibilidades sensoriais",
        "Apenas uma fase que passa naturalmente",
        "Um problema comportamental simples",
      ],
      correct: 1,
    },
    {
      question: "Qual é a principal causa da seletividade alimentar em crianças com TEA?",
      options: [
        "Falta de disciplina",
        "Sensibilidades sensoriais e processamento sensorial atípico",
        "Mimimi dos pais",
        "Problemas digestivos apenas",
      ],
      correct: 1,
    },
    {
      question: "Como deve ser a abordagem para introduzir novos alimentos?",
      options: [
        "Forçar a criança a comer",
        "Gradual e respeitosa, considerando as sensibilidades",
        "Eliminar todos os alimentos preferidos",
        "Usar apenas recompensas",
      ],
      correct: 1,
    },
    {
      question: "Qual profissional é essencial no tratamento da seletividade alimentar?",
      options: [
        "Apenas o pediatra",
        "Terapeuta ocupacional especializado em integração sensorial",
        "Apenas o nutricionista",
        "Nenhum profissional específico",
      ],
      correct: 1,
    },
    {
      question: "O que é encadeamento alimentar?",
      options: [
        "Comer vários alimentos em sequência",
        "Técnica que conecta alimentos aceitos a novos alimentos gradualmente",
        "Misturar todos os alimentos",
        "Comer apenas alimentos da mesma cor",
      ],
      correct: 1,
    },
  ]

  const handleAnswer = (answerIndex) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = answerIndex
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const getScore = () => {
    return answers.reduce((score, answer, index) => {
      return score + (answer === questions[index].correct ? 1 : 0)
    }, 0)
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setShowResults(false)
    setShowCorrectAnswers(false)
    setCanRetry(false)
  }

  const showAnswers = () => {
    setShowCorrectAnswers(true)
    const score = getScore()
    if (score < 3) {
      setCanRetry(true)
    }
  }

  if (showResults && !showCorrectAnswers) {
    const score = getScore()
    const percentage = (score / questions.length) * 100

    return (
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <div className="text-center">
          <CheckCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Quiz Concluído!</h3>
          <p className="text-lg mb-4">
            Você acertou {score} de {questions.length} perguntas ({Math.round(percentage)}%)
          </p>

          <div className="flex gap-3 justify-center">
            <Button onClick={showAnswers} variant="outline" className="bg-white">
              Ver Respostas Corretas
            </Button>
            {score >= 3 && (
              <Button onClick={onComplete} className="bg-green-600 hover:bg-green-700">
                Finalizar Quiz
              </Button>
            )}
          </div>
        </div>
      </div>
    )
  }

  if (showCorrectAnswers) {
    const score = getScore()

    return (
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4 text-center">Respostas Corretas</h3>

        <div className="space-y-4 mb-6">
          {questions.map((question, qIndex) => {
            const userAnswer = answers[qIndex]
            const isCorrect = userAnswer === question.correct

            return (
              <div key={qIndex} className="border rounded-lg p-4">
                <h4 className="font-medium mb-2">
                  {qIndex + 1}. {question.question}
                </h4>

                <div className="space-y-2">
                  {question.options.map((option, oIndex) => {
                    let className = "p-2 rounded text-sm "

                    if (oIndex === question.correct) {
                      className += "bg-green-100 text-green-800 border border-green-300"
                    } else if (oIndex === userAnswer && !isCorrect) {
                      className += "bg-red-100 text-red-800 border border-red-300"
                    } else {
                      className += "bg-gray-50 text-gray-600"
                    }

                    return (
                      <div key={oIndex} className={className}>
                        {option}
                        {oIndex === question.correct && " ✓ (Correta)"}
                        {oIndex === userAnswer && !isCorrect && " ✗ (Sua resposta)"}
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          {score < 3 ? (
            <div>
              <p className="text-red-600 mb-4 font-medium">
                Você precisa acertar pelo menos 3 questões para prosseguir. Tente novamente!
              </p>
              <Button onClick={resetQuiz} className="bg-blue-600 hover:bg-blue-700">
                <RefreshCw className="h-4 w-4 mr-2" />
                Tentar Novamente
              </Button>
            </div>
          ) : (
            <div>
              <p className="text-green-600 mb-4 font-medium">Parabéns! Você atingiu a pontuação mínima.</p>
              <div className="flex gap-3 justify-center">
                <Button onClick={resetQuiz} variant="outline">
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Tentar Novamente
                </Button>
                <Button onClick={onComplete} className="bg-green-600 hover:bg-green-700">
                  Finalizar Quiz
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-semibold">{title}</h3>
          <Badge variant="outline">
            {currentQuestion + 1} / {questions.length}
          </Badge>
        </div>
        <Progress value={((currentQuestion + 1) / questions.length) * 100} />
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-medium mb-4">{questions[currentQuestion].question}</h4>
        <div className="space-y-2">
          {questions[currentQuestion].options.map((option, index) => (
            <Button
              key={index}
              variant="outline"
              className="w-full text-left justify-start h-auto p-4 bg-transparent hover:bg-blue-50 resposta"
              onClick={() => handleAnswer(index)}
            >
              {option}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}

const MissionComponent = ({ title, onComplete }) => {
  const [textInput, setTextInput] = useState("")
  const [files, setFiles] = useState(null)

  const handleSubmit = () => {
    if (textInput.trim() || files) {
      onComplete()
    }
  }

  return (
    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <Trophy className="h-5 w-5 text-yellow-600" />
        {title}
      </h3>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Descreva sua experiência ou plano:</label>
          <textarea
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg resize-none"
            rows={4}
            placeholder="Compartilhe seus insights, planos ou resultados..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Anexar arquivos (imagens, vídeos ou PDFs):</label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <input
              type="file"
              multiple
              accept="image/*,video/*,.pdf"
              onChange={(e) => setFiles(e.target.files)}
              className="hidden"
              id="file-upload"
            />
            <label htmlFor="file-upload" className="cursor-pointer">
              <div className="flex flex-col items-center gap-2">
                <div className="flex gap-2">
                  <ImageIcon className="h-8 w-8 text-gray-400" />
                  <Upload className="h-8 w-8 text-gray-400" />
                </div>
                <p className="text-sm text-gray-600">Clique para selecionar arquivos ou arraste aqui</p>
                <p className="text-xs text-gray-500">Suporta: imagens, vídeos e PDFs</p>
              </div>
            </label>
          </div>
          {files && files.length > 0 && (
            <div className="mt-2">
              <p className="text-sm text-green-600">{files.length} arquivo(s) selecionado(s)</p>
            </div>
          )}
        </div>

        <Button onClick={handleSubmit} disabled={!textInput.trim() && !files} className="w-full">
          <CheckCircle className="h-4 w-4 mr-2" />
          Enviar Missão
        </Button>
      </div>
    </div>
  )
}

export default function LearningPathPage() {
  const [levels, setLevels] = useState(initialLevels)
  const [totalScore, setTotalScore] = useState(0)
  const [activeActivity, setActiveActivity] = useState(null)
  const [showCertificate, setShowCertificate] = useState(null)
  const [encouragementMsg, setEncouragementMsg] = useState(null)
  const [viewingLevel, setViewingLevel] = useState(0)

  // useEffect(() => {
  //   const savedProgress = localStorage.getItem("tea-learning-progress")
  //   if (savedProgress) {
  //     const parsed = JSON.parse(savedProgress)
  //     setLevels(parsed.levels)
  //     setTotalScore(parsed.totalScore)
  //     setViewingLevel(parsed.viewingLevel)
  //   }
  // }, [])

  const saveProgress = (newLevels, newScore, newViewingLevel) => {
    const progress = {
      levels: newLevels,
      totalScore: newScore,
      viewingLevel: newViewingLevel,
    }
    localStorage.setItem("tea-learning-progress", JSON.stringify(progress))
  }

  const completeActivity = (levelId, activityId) => {
    const newLevels = levels.map((level) => {
      if (level.id === levelId) {
        const newActivities = level.activities.map((activity) => {
          if (activity.id === activityId && !activity.completed) {
            return { ...activity, completed: true }
          }
          return activity
        })

        const completedActivities = newActivities.filter((a) => a.completed).length
        const isLevelCompleted = completedActivities === newActivities.length

        return {
          ...level,
          activities: newActivities,
          completed: isLevelCompleted,
        }
      }
      return level
    })

    const newScore = newLevels.reduce((total, level) => {
      return total + level.activities.filter((a) => a.completed).reduce((sum, a) => sum + a.points, 0)
    }, 0)

    const completedLevel = newLevels.find((l) => l.id === levelId)

    if (completedLevel?.completed && !levels.find((l) => l.id === levelId)?.completed) {
      setShowCertificate(completedLevel)
    }

    if (completedLevel?.completed && levelId < newLevels.length - 1) {
      newLevels[levelId + 1].unlocked = true
    }

    const newViewingLevel = newLevels.findIndex((l) => !l.completed && l.unlocked)

    setLevels(newLevels)
    setTotalScore(newScore)
    setViewingLevel(newViewingLevel === -1 ? levels.length - 1 : newViewingLevel)

    const randomMessage = encouragementMessages[Math.floor(Math.random() * encouragementMessages.length)]
    setEncouragementMsg(randomMessage)

    saveProgress(newLevels, newScore, newViewingLevel === -1 ? levels.length - 1 : newViewingLevel)
  }

  const getProgressPercentage = () => {
    const totalPossiblePoints = levels.reduce((sum, level) => sum + level.totalPoints, 0)
    return totalPossiblePoints > 0 ? (totalScore / totalPossiblePoints) * 100 : 0
  }

  const PDFIMG = ({ title, onComplete, imageSrc }) => {
    const handleDownload = () => {
      const link = document.createElement("a")
      link.href = `/pdfs/${title}.pdf`
      link.download = `${title}.pdf`
      link.click()
      if (onComplete) onComplete()
    }

    return (
      <div>
        <button onClick={handleDownload}>📄 Baixar {title}</button>
        {imageSrc && (
          <img
            src={imageSrc}
            alt={`Download ${title}`}
            onClick={handleDownload}
            style={{ cursor: "pointer", width: "100%", marginLeft: "10px" }}
          />
        )}
      </div>
    )
  }

  const VideoCarousel = ({ onComplete }) => {
    const [currentVideo, setCurrentVideo] = useState(0)
    const [completedVideos, setCompletedVideos] = useState(new Set())
    const [isPlaying, setIsPlaying] = useState(false)

    const videos = [
      {
        id: 1,
        title: "O que não fazer na alimentação com uma criança autista seletiva?",
        description: "O que não fazer na alimentação com uma criança autista seletiva?",
        src: "https://drive.google.com/file/d/1zsDmWToYWGk82M9dFPF5iLDRSrp_niJLMR6x7DKUlaQ/preview",
        duration: "3:16",
      },
      {
        id: 2,
        title: "Como introduzir novos alimentos em crianças seletivas com autismo?",
        description: "Como introduzir novos alimentos em crianças seletivas com autismo?",
        src: "https://drive.google.com/file/d/1BoHd049D3afskZmYYiEl251gS6C2cPpke_e-pajSxr0/preview",
        duration: "3:02",
      },
      {
        id: 3,
        title: "Quais são os característicos da seletividade alimentar?",
        description: "Quais são os característicos da seletividade alimentar?",
        src: "https://drive.google.com/file/d/1b9AiOxRmezSTmJzz0bGpRPCvgPmI-EC6dDD2uN34nik/preview",
        duration: "0:59",
      },
      {
        id: 4,
        title: "Como organizar a rotina alimentar da criança autista seletiva?",
        description: "Como organizar a rotina alimentar da criança autista seletiva?",
        src: "https://drive.google.com/file/d/1nCv-lPXWSGsUTLy-JFELyDQLlMDYKCtmIpgQlMYFU5E/preview",
        duration: "3:13",
      },
      {
        id: 5,
        title: "Impactos da seletividade alimentar",
        description: "Impactos da seletividade alimentar",
        src: "https://drive.google.com/file/d/1w2OD84P7bGpQ3iw9p4uZXO9jZe4TLdyzutGQMPOe3Zk/preview",
        duration: "1:55",
      },
      {
        id: 6,
        title: "Recursos Disponíveis",
        description: "Materiais, quizzes e atividades práticas",
        src: "https://drive.google.com/file/d/1phxzbbi05WAru5UuyJSAy-BvikMLdTEO1fH2r8xDZMY/preview",
        duration: "5:15",
      },
      {
        id: 7,
        title: "Por que envolver a criança nas escolhas e preparo?",
        description: "Por que envolver a criança nas escolhas e preparo?",
        src: "https://drive.google.com/file/d/121Rs7E-PefkOsbHvJjg7lAlJrcOLTWIxaM3XShweqrY/preview",
        duration: "2:54",
      },
      {
        id: 8,
        title: "Como identificar se uma criança é autista seletiva na alimentação?",
        description: "Como identificar se uma criança é autista seletiva na alimentação?",
        src: "https://drive.google.com/file/d/1lkKJKerTArymOVP7wctMhsXeAvwGn4T3mciJQUh8gho/preview",
        duration: "2:54",
      },
      {
        id: 9,
        title: "Por que a seletividade alimentar acontece com frequência em crianças autistas?",
        description: "Por que a seletividade alimentar acontece com frequência em crianças autistas?",
        src: "https://drive.google.com/file/d/1Fgs5YlmSXB-WHZm2sIxMb_O3mkQIcu5g8JDnsS-FhLQ/preview",
        duration: "1:28",
      },
    ]

    const handleVideoComplete = (videoId) => {
      setCompletedVideos((prev) => {
        const newCompleted = new Set(prev)
        newCompleted.add(videoId)

        // Check if this completion makes all videos in the current activity complete
        const currentActivity = levels[viewingLevel]?.activities.find((a) => a.id === "0-2")
        if (currentActivity && currentActivity.type === "video") {
          // Assuming the activity has a videos array or video count
          // For the 9-video task, check if we now have 9 completed videos
          const totalVideosInActivity = 9 // This should ideally come from the activity data
          if (newCompleted.size >= totalVideosInActivity) {
            onComplete()
          }
        }

        return newCompleted
      })
    }

    const nextVideo = () => {
      if (currentVideo < videos.length - 1) {
        setCurrentVideo(currentVideo + 1)
        setIsPlaying(false)
      }
    }

    const prevVideo = () => {
      if (currentVideo > 0) {
        setCurrentVideo(currentVideo - 1)
        setIsPlaying(false)
      }
    }

    const goToVideo = (index) => {
      setCurrentVideo(index)
      setIsPlaying(false)
    }

    const currentVideoData = videos[currentVideo]

    return (

      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <Button onClick={onComplete} className="w-full">
          <CheckCircle className="h-4 w-4 mr-2" />
          Marcar como Concluído
        </Button>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
            <Play className="h-5 w-5 text-blue-600" />
            Explicação sobre como funciona a trilha
          </h3>
          <p className="text-gray-600 text-sm">Assista aos vídeos para entender completamente nossa metodologia</p>
        </div>

        {/* Video Player */}
        <div className="mb-6">
          <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
            {!isPlaying ? (
              <div className="text-center text-white">
                <Button onClick={() => setIsPlaying(true)} size="lg" className="bg-red-600 hover:bg-red-700 mb-4">
                  <Play className="h-6 w-6 mr-2" />
                  Reproduzir Vídeo
                </Button>
                <div className="text-sm opacity-75">Duração: {currentVideoData.duration}</div>
              </div>
            ) : (
              <iframe
                src={currentVideoData.src}
                title={currentVideoData.title}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                style={{ width: '100%', height: '100%' }}
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            )}
          </div>

          {/* Video Info */}
          <div className="mb-4">
            <h4 className="font-semibold text-lg mb-1">{currentVideoData.title}</h4>
            <p className="text-gray-600 text-sm">{currentVideoData.description}</p>
          </div>

          {/* Progress Indicator */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm text-gray-500">Progresso:</span>
            <div className="flex-1 bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(completedVideos.size / videos.length) * 100}%` }}
              />
            </div>
            <span className="text-sm font-medium text-gray-700">
              {completedVideos.size}/{videos.length}
            </span>
          </div>
        </div>


        {/* Navigation Controls */}
        <div className="flex items-center justify-between mb-6">
          <Button
            onClick={prevVideo}
            disabled={currentVideo === 0}
            variant="outline"
            className="flex items-center gap-2 bg-transparent"
          >
            Anterior
          </Button>

          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">
              {currentVideo + 1} de {videos.length}
            </span>
          </div>

          <Button
            onClick={nextVideo}
            disabled={currentVideo === videos.length - 1}
            variant="outline"
            className="flex items-center gap-2 bg-transparent"
          >
            Próximo
          </Button>
        </div>

        {/* Video Thumbnails */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {videos.map((video, index) => (
            <div
              key={video.id}
              onClick={() => goToVideo(index)}
              className={`cursor-pointer rounded-lg border-2 p-3 transition-all ${index === currentVideo ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300"
                }`}
            >
              <div className="aspect-video w-full bg-gray-100 rounded mb-2 relative">
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded cursor-pointer">
                  <Play className="h-6 w-6 text-gray-400" />
                </div>
                {completedVideos.has(video.id) && (
                  <div className="absolute top-1 right-1">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                )}
              </div>

              <h5 className="font-medium text-sm mb-1 line-clamp-2">{video.title}</h5>
              <p className="text-xs text-gray-500">{video.duration}</p>
            </div>

          ))}

        </div>

        {/* Completion Status */}
        {completedVideos.size === videos.length && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
            <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <h4 className="font-semibold text-green-800 mb-1">Parabéns!</h4>
            <p className="text-sm text-green-700">Você assistiu todos os vídeos explicativos da trilha!</p>
            <Button onClick={onComplete} className="w-full">
              <CheckCircle className="h-4 w-4 mr-2" />
              Marcar como Concluído
            </Button>
          </div>
        )}
      </div>
    )
  }

  const ImageCarousel = ({ title, onComplete }) => {
    const [currentImage, setCurrentImage] = useState(0)
    const [completedImages, setCompletedImages] = useState(new Set())

    const images = [
      { id: 2, title: "Imagem 2", description: "Descrição da imagem 2", src: img2 },
      { id: 3, title: "Imagem 3", description: "Descrição da imagem 3", src: img3 },
      { id: 4, title: "Imagem 4", description: "Descrição da imagem 4", src: img4 },
      { id: 5, title: "Imagem 5", description: "Descrição da imagem 5", src: img5 },
      { id: 6, title: "Imagem 6", description: "Descrição da imagem 6", src: img6 },
      { id: 7, title: "Imagem 7", description: "Descrição da imagem 7", src: img7 },
      { id: 8, title: "Imagem 8", description: "Descrição da imagem 8", src: img8 },
      { id: 9, title: "Imagem 9", description: "Descrição da imagem 9", src: img9 },
      { id: 10, title: "Imagem 10", description: "Descrição da imagem 10", src: img10 },
      { id: 11, title: "Imagem 11", description: "Descrição da imagem 11", src: img11 },
      { id: 12, title: "Imagem 12", description: "Descrição da imagem 12", src: img12 },
      { id: 13, title: "Imagem 13", description: "Descrição da imagem 13", src: img13 },
      { id: 14, title: "Imagem 14", description: "Descrição da imagem 14", src: img14 },
      { id: 15, title: "Imagem 15", description: "Descrição da imagem 15", src: img15 },
      { id: 16, title: "Imagem 16", description: "Descrição da imagem 16", src: img16 },
      { id: 17, title: "Imagem 17", description: "Descrição da imagem 17", src: img17 },
      { id: 18, title: "Imagem 18", description: "Descrição da imagem 18", src: img18 },
    ]


    const handleImageComplete = (imageId) => {
      setCompletedImages(prev => {
        const newCompleted = new Set(prev)
        newCompleted.add(imageId)
        if (newCompleted.size === images.length) {
          onComplete()
        }
        return newCompleted
      })
    }

    const nextImage = () => {
      if (currentImage < images.length - 1) setCurrentImage(currentImage + 1)
    }

    const prevImage = () => {
      if (currentImage > 0) setCurrentImage(currentImage - 1)
    }

    const goToImage = (index) => {
      setCurrentImage(index)
    }

    const currentData = images[currentImage]

    return (
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Carrossel de Imagens</h3>
          <p className="text-gray-600 text-sm">Visualize todas as imagens para completar a atividade</p>
        </div>

        {/* Image Viewer */}
        <div className="mb-6">
          <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
            <img
              src={currentData.src}
              alt={currentData.title}
              className="w-full h-full object-cover rounded-lg"
              onLoad={() => handleImageComplete(currentData.id)}
            />
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-lg mb-1">{currentData.title}</h4>
            <p className="text-gray-600 text-sm">{currentData.description}</p>
          </div>

          {/* Progress Indicator */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm text-gray-500">Progresso:</span>
            <div className="flex-1 bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(completedImages.size / images.length) * 100}%` }}
              />
            </div>
            <span className="text-sm font-medium text-gray-700">
              {completedImages.size}/{images.length}
            </span>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between mb-6">
          <Button onClick={prevImage} disabled={currentImage === 0} variant="outline">
            Anterior
          </Button>

          <span className="text-sm text-gray-500">
            {currentImage + 1} de {images.length}
          </span>

          <Button onClick={nextImage} disabled={currentImage === images.length - 1} variant="outline">
            Próximo
          </Button>
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {images.map((img, index) => (
            <div
              key={img.id}
              onClick={() => goToImage(index)}
              className={`cursor-pointer rounded-lg border-2 p-1 transition-all ${index === currentImage ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300"
                }`}
            >
              <div className="aspect-video rounded mb-1 overflow-hidden relative">
                <img src={img.src} alt={img.title} className="w-full h-full object-cover" />
                {completedImages.has(img.id) && (
                  <div className="absolute top-1 right-1">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                )}
              </div>
              <h5 className="font-medium text-xs mb-1 line-clamp-2">{img.title}</h5>
            </div>
          ))}
        </div>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
          <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
          <h4 className="font-semibold text-green-800 mb-1">Parabéns!</h4>
          <p className="text-sm text-green-700">Você visualizou todas as imagens da atividade!</p>
          <Button onClick={onComplete} className="w-full mt-2">
            <CheckCircle className="h-4 w-4 mr-2" />
            Marcar como Concluído
          </Button>
        </div>
      </div>
    )
  }

  const ImageCarouselEbook = ({ title, onComplete }) => {
    const [currentImage, setCurrentImage] = useState(0)
    const [completedImages, setCompletedImages] = useState(new Set())

    const imagesTitle1 = [
      { id: 19, title: "Imagem 19", description: "Descrição da imagem 19", src: img19 },
      { id: 20, title: "Imagem 20", description: "Descrição da imagem 20", src: img20 },
      { id: 21, title: "Imagem 21", description: "Descrição da imagem 21", src: img21 },
      { id: 22, title: "Imagem 22", description: "Descrição da imagem 22", src: img22 },
      { id: 23, title: "Imagem 23", description: "Descrição da imagem 23", src: img23 },
      { id: 24, title: "Imagem 24", description: "Descrição da imagem 24", src: img24 },
      { id: 25, title: "Imagem 25", description: "Descrição da imagem 25", src: img25 },
      { id: 26, title: "Imagem 26", description: "Descrição da imagem 26", src: img26 },
      { id: 27, title: "Imagem 27", description: "Descrição da imagem 27", src: img27 },
      { id: 28, title: "Imagem 28", description: "Descrição da imagem 28", src: img28 },
      { id: 29, title: "Imagem 29", description: "Descrição da imagem 29", src: img29 },
      { id: 30, title: "Imagem 30", description: "Descrição da imagem 30", src: img30 },
      { id: 31, title: "Imagem 31", description: "Descrição da imagem 31", src: img31 },
      { id: 32, title: "Imagem 32", description: "Descrição da imagem 32", src: img32 },
      { id: 33, title: "Imagem 33", description: "Descrição da imagem 33", src: img33 },
    ]

    const imagesTitle2 = [
      { id: 19, title: "Imagem 19", description: "Descrição da imagem 19", src: d1 },
      { id: 20, title: "Imagem 20", description: "Descrição da imagem 20", src: d2 },
      { id: 21, title: "Imagem 21", description: "Descrição da imagem 21", src: d3 },
    ]

    const images = title === "Ebook de encadeamento alimentar" ? imagesTitle1 : imagesTitle2



    const handleImageComplete = (imageId) => {
      setCompletedImages(prev => {
        const newCompleted = new Set(prev)
        newCompleted.add(imageId)
        if (newCompleted.size === images.length) {
          onComplete()
        }
        return newCompleted
      })
    }

    const nextImage = () => {
      if (currentImage < images.length - 1) setCurrentImage(currentImage + 1)
    }

    const prevImage = () => {
      if (currentImage > 0) setCurrentImage(currentImage - 1)
    }

    const goToImage = (index) => {
      setCurrentImage(index)
    }

    const currentData = images[currentImage]

    return (
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Carrossel de Imagens</h3>
          <p className="text-gray-600 text-sm">Visualize todas as imagens para completar a atividade</p>
        </div>

        {/* Image Viewer */}
        {/* Image Viewer */}
        <div className="mb-6">
          <div className="aspect-[210/297] bg-gray-100 rounded-lg flex items-center justify-center mb-4 relative overflow-hidden w-[56%] mx-auto">
            <img
              src={currentData.src}
              alt={currentData.title}
              className="w-full h-full object-cover rounded-lg"
              onLoad={() => handleImageComplete(currentData.id)}
            />
          </div>


          <div className="mb-4">
            <h4 className="font-semibold text-lg mb-1">{currentData.title}</h4>
            <p className="text-gray-600 text-sm">{currentData.description}</p>
          </div>

          {/* Progress Indicator */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm text-gray-500">Progresso:</span>
            <div className="flex-1 bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(completedImages.size / images.length) * 100}%` }}
              />
            </div>
            <span className="text-sm font-medium text-gray-700">
              {completedImages.size}/{images.length}
            </span>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between mb-6">
          <Button onClick={prevImage} disabled={currentImage === 0} variant="outline">
            Anterior
          </Button>

          <span className="text-sm text-gray-500">
            {currentImage + 1} de {images.length}
          </span>

          <Button onClick={nextImage} disabled={currentImage === images.length - 1} variant="outline">
            Próximo
          </Button>
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {images.map((img, index) => (
            <div
              key={img.id}
              onClick={() => goToImage(index)}
              className={`cursor-pointer rounded-lg border-2 p-1 transition-all ${index === currentImage ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300"
                }`}
            >
              <div className="aspect-[210/297] rounded mb-1 overflow-hidden relative">
                <img src={img.src} alt={img.title} className="w-full h-full object-cover" />
                {completedImages.has(img.id) && (
                  <div className="absolute top-1 right-1">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                )}
              </div>

              <h5 className="font-medium text-xs mb-1 line-clamp-2">{img.title}</h5>
            </div>
          ))}
        </div>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
          <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
          <h4 className="font-semibold text-green-800 mb-1">Parabéns!</h4>
          <p className="text-sm text-green-700">Você visualizou todas as imagens da atividade!</p>
          <Button onClick={onComplete} className="w-full mt-2">
            <CheckCircle className="h-4 w-4 mr-2" />
            Marcar como Concluído
          </Button>
        </div>
      </div>
    )
  }

  const getBadgeTitle = () => {
    if (totalScore >= 300) return "Guardião da Rotina"
    if (totalScore >= 220) return "Encadeador Mestre"
    if (totalScore >= 150) return "Chef Afetivo"
    if (totalScore >= 50) return "Explorador de Nutrientes"
    return "Iniciante"
  }

  const renderActivityContent = (activity, levelId) => {
    if (activeActivity !== activity.id) return null

    const handleComplete = () => {
      completeActivity(levelId, activity.id)
      setActiveActivity(null)
    }

    switch (activity.type) {
      case "video":
        return <VideoPlayer title={activity.name} onComplete={handleComplete} src={activity.src} />
      case "pdf":
        if (activity.name === "Alguns Conceitos Importantes para nossa jornada") {
          return <VideoCarousel onComplete={handleComplete} />
        }
      // eslint-disable-next-line no-fallthrough
      case "ebook":
        return <PDFDownload title={activity.name} onComplete={handleComplete} />
      case "quiz":
        return <QuizComponent title={activity.name} onComplete={handleComplete} />
      case "mission":
        return <MissionComponent title={activity.name} onComplete={handleComplete} />
      case "cards":
        return <InteractiveCards title={activity.name} onComplete={handleComplete} />
      case "img":
        return <PDFIMG title={activity.name} onComplete={handleComplete} imageSrc={estica} />
      case "imgc":
        return <ImageCarousel title={activity.name} onComplete={handleComplete} />
      case "imgcE":
        return <ImageCarouselEbook title={activity.name} onComplete={handleComplete} />
      default:
        return null
    }
  }

  const visibleLevels = levels.filter((level) => level.unlocked || level.completed)

  const navigateToLevel = (levelId) => {
    const level = levels.find((l) => l.id === levelId)
    if (level && (level.unlocked || level.completed)) {
      setViewingLevel(levelId)
    }
  }

  const currentViewingLevel = levels.find((l) => l.id === viewingLevel)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-4 corpo">
      <nav className="menu-bar">
        <Link to="/" className="recipe-button" style={{ textDecoration: 'none' }}>Início</Link>
        <Link to="/games" className="recipe-button" style={{ textDecoration: 'none' }}>Jogos</Link>
      </nav>
      <div className="max-w-4xl mx-auto">
        <div className="text-center p-6 mx-auto my-6">
          <h1 className="text-4xl font-bold text-white-800 mb-2">Trilha de Aprendizagem - TEAcolhe</h1>
          <p className="text-lg text-gray-600 mb-6">
            Capacitando pais, cuidadores e professores para compreender a seletividade alimentar no TEA
          </p>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-4" >
            <div className="flex items-center justify-center gap-8 mb-4">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Star className="h-6 w-6 text-yellow-500" />
                  <span className="text-3xl font-bold text-gray-800">{totalScore}</span>
                </div>
                <p className="text-sm text-gray-600">Pontos Totais</p>
              </div>

              <div className="text-center">
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  <Trophy className="h-4 w-4 mr-2" />
                  {getBadgeTitle()}
                </Badge>
              </div>
            </div>

            <div className="w-full">
              <Progress value={getProgressPercentage()} className="h-3 mb-2" />
              <p className="text-sm text-gray-600">Progresso geral: {Math.round(getProgressPercentage())}%</p>
            </div>
          </div>

          {visibleLevels.length > 1 && (
            <div className="bg-white rounded-lg shadow-lg p-4 mb-6" >
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Navegue pelos níveis:</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {visibleLevels.map((level) => (
                  <Button
                    key={level.id}
                    variant={viewingLevel === level.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => navigateToLevel(level.id)}
                    className={`${level.completed
                      ? "bg-green-100 border-green-300 text-green-800 hover:bg-green-200"
                      : viewingLevel === level.id
                        ? "bg-blue-600 text-white"
                        : "bg-white border-gray-300"
                      }`}
                  >
                    {level.completed && <CheckCircle className="h-4 w-4 mr-1" />}
                    Nível {level.id}
                  </Button>
                ))}
              </div>
              {visibleLevels.find((l) => l.id === viewingLevel)?.completed && (
                <p className="text-sm text-green-600 mt-2 font-medium">
                  ✨ Nível concluído! Você pode refazer as atividades sem perder pontos.
                </p>
              )}
            </div>
          )}
        </div>

        <div className="grid gap-6" style={{ width: "70%" }}>
          {currentViewingLevel && (
            <Card
              key={currentViewingLevel.id}
              className={`transition-all duration-300 ${currentViewingLevel.unlocked
                ? currentViewingLevel.completed
                  ? "border-green-500 bg-green-50"
                  : "border-blue-500 bg-blue-50"
                : "border-gray-300 bg-gray-50 opacity-60"
                }`}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {currentViewingLevel.unlocked ? (
                      currentViewingLevel.completed ? (
                        <CheckCircle className="h-8 w-8 text-green-600" />
                      ) : (
                        <div className="h-8 w-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                          {currentViewingLevel.id}
                        </div>
                      )
                    ) : (
                      <Lock className="h-8 w-8 text-gray-400" />
                    )}
                    <div>
                      <CardTitle className="text-xl">
                        Nível {currentViewingLevel.id} - {currentViewingLevel.title}
                      </CardTitle>
                      <CardDescription className="text-base">{currentViewingLevel.description}</CardDescription>
                    </div>
                  </div>
                  <Badge variant={currentViewingLevel.completed ? "default" : "secondary"}>
                    {currentViewingLevel.activities.filter((a) => a.completed).reduce((sum, a) => sum + a.points, 0)} /{" "}
                    {currentViewingLevel.totalPoints} pts
                  </Badge>
                </div>
              </CardHeader>

              <CardContent>
                <div className="grid gap-3">
                  {currentViewingLevel.activities.map((activity) => {
                    return (
                      <div key={activity.id} className="space-y-3">
                        <div
                          className={`flex items-center justify-between p-3 rounded-lg border ${activity.completed
                            ? "bg-green-100 border-green-300"
                            : currentViewingLevel.unlocked
                              ? "bg-white border-gray-200 hover:border-blue-300"
                              : "bg-gray-100 border-gray-200"
                            }`}
                        >
                          <div className="flex items-center gap-3">
                            {getIcon(activity.iconType, activity.completed ? "text-green-600" : "text-gray-600")}
                            <div>
                              <h4 className="font-medium text-gray-800">{activity.name}</h4>
                              <p className="text-sm text-gray-600">{activity.points} pontos</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            {activity.completed && <CheckCircle className="h-5 w-5 text-green-600" />}
                            {currentViewingLevel.unlocked && (
                              <Button
                                size="sm"
                                variant={activeActivity === activity.id ? "secondary" : "outline"}
                                onClick={() =>
                                  setActiveActivity(activeActivity === activity.id ? null : activity.id)
                                }
                                className={`
                                  px-4 py-2 rounded-xl font-medium transition-all duration-300
                                  ${activeActivity === activity.id
                                    ? "bg-gray-800 text-white hover:bg-gray-700 shadow-md"
                                    : activity.completed
                                      ? "border-green-500 text-green-600 hover:bg-green-50 hover:border-green-600"
                                      : "border-blue-500 text-blue-600 hover:bg-blue-50 hover:border-blue-600"}
                              `}
                              >
                                {activeActivity === activity.id
                                  ? "Fechar"
                                  : activity.completed
                                    ? "Refazer"
                                    : "Iniciar"}
                              </Button>

                            )}
                          </div>
                        </div>

                        {renderActivityContent(activity, currentViewingLevel.id)}
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {levels.every((l) => l.completed) && (
          <Card className="mt-8 border-yellow-500 bg-yellow-50">
            <CardHeader className="text-center">
              <Trophy className="h-16 w-16 text-yellow-600 mx-auto mb-4" />
              <CardTitle className="text-2xl text-yellow-800">
                Parabéns! Certificado Digital "Guardiões da Alimentação Afetiva"
              </CardTitle>
              <CardDescription className="text-lg">
                Você completou toda a trilha de aprendizagem com {totalScore} pontos!
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                <Badge variant="secondary" className="p-3">
                  <Users className="h-4 w-4 mr-2" />
                  Explorador de Nutrientes
                </Badge>
                <Badge variant="secondary" className="p-3">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Chef Afetivo
                </Badge>
                <Badge variant="secondary" className="p-3">
                  <Trophy className="h-4 w-4 mr-2" />
                  Encadeador Mestre
                </Badge>
                <Badge variant="secondary" className="p-3">
                  <Star className="h-4 w-4 mr-2" />
                  Guardião da Rotina
                </Badge>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {showCertificate && <LevelCertificate level={showCertificate} onClose={() => setShowCertificate(null)} />}

      {encouragementMsg && (
        <EncouragementMessage message={encouragementMsg} onClose={() => setEncouragementMsg(null)} />
      )}
    </div>
  )
}
