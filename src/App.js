import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './components/Initial/initial';
// import RecipesPage from './components/Recipes/recipes';
import Games from './components/Games/NewGame/newgame';
import LearningPathPage from './components/Recipes/newrecipes'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipes" element={<LearningPathPage />} />
        <Route path="/games" element={<Games/>}/>
      </Routes>
    </Router>
  );
}

export default App;
