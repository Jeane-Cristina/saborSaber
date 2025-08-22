import React from "react";
import { jsPDF } from "jspdf";
import "./recipes.css";
import pdf from "../../assets/pdf2.png";
import { Link } from "react-router-dom";

const recipes = [
  {
    title: "Chocolate Banana Smoothie",
    placeholder: true,
    ingredients: [
      "1 banana",
      "1 cup milk",
      "1 tablespoon cocoa powder",
      "Ice cubes",
      "Blend everything until smooth!",
    ],
  },
  {
    title: "Fruit Salad",
    placeholder: true,
    ingredients: [
      "1 apple",
      "1 banana",
      "1/2 cup grapes",
      "1/2 cup strawberries",
      "Mix and chill!",
    ],
  },
  {
    title: "Mini Sandwiches",
    placeholder: true,
    ingredients: [
      "2 slices of bread",
      "Cheese",
      "Ham or veggies",
      "Cut into small shapes!",
    ],
  },
];

function loadImageAsDataURL(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous"; // se for de outra origem e permitir
    img.onload = () => {
      // desenha em canvas temporário pra garantir compatibilidade / poder manipular se quiser
      const canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext("2d");
      if (!ctx) return reject(new Error("Contexto do canvas não disponível"));
      ctx.drawImage(img, 0, 0);
      resolve(canvas.toDataURL("pdf/png"));
    };
    img.onerror = (e) => reject(new Error("Falha ao carregar imagem de fundo: " + src));
    img.src = src;
  });
}

export default function RecipesPage() {
  const handleDownloadPDF = async (recipe) => {
    // troque essa URL pelo seu modelo de fundo (pode ser local ou remoto)
    const fundoUrl = pdf; // ou uma URL absoluta

    let bgDataUrl
    try {
      bgDataUrl = await loadImageAsDataURL(fundoUrl);
    } catch (err) {
      console.error(err);
      return;
    }

    const doc = new jsPDF({ unit: "mm", format: "a4" });
    const pageWidth = 210;
    const pageHeight = 297;

    // Adiciona fundo cobrindo toda a página
    doc.addImage(bgDataUrl, "PNG", 0, 0, pageWidth, pageHeight, undefined, "FAST");



    doc.setTextColor(255, 255, 255);
    doc.setFontSize(20);
    doc.setFont("helvetica", "bold");
    doc.text(recipe.title, pageWidth / 2, 20, { align: "center" });

    // Corpo
    doc.setTextColor(0, 0, 0);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(14);

    let y = 40;
    recipe.ingredients.forEach((item) => {
      if (y > 280) {
        doc.addPage();
        // reaplica fundo na nova página
        doc.addImage(bgDataUrl, "PNG", 0, 0, pageWidth, pageHeight, undefined, "FAST");
        y = 20;
      }
      doc.text(`• ${item}`, 20, y);
      y += 10;
    });

    // Rodapé
    doc.setFontSize(10);
    doc.setTextColor(100);
    doc.text("Feito com carinho", pageWidth / 2, 290, { align: "center" });

    doc.save(`${recipe.title}.pdf`);
  };
  return (
    <div>
      <nav className="menu-bar">
        <Link to="/" className="recipe-button" style={{textDecoration: 'none'}}>Início</Link>
        <Link to="/games" className="recipe-button" style={{textDecoration: 'none'}}>Jogos</Link>
      </nav>
      <div className="recipes-container">
        {recipes.map((recipe, index) => (
          <div key={index} className="recipe-card">
            <h2 className="recipe-title">{recipe.title}</h2>
            <div className="video-placeholder">[ Video Placeholder ]</div>
            <ul className="recipe-list">
              {recipe.ingredients.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <div className="text-center">
              <button
                className="recipe-button"
                onClick={() => handleDownloadPDF(recipe)}
              >
                Download Recipe
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
