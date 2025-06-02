import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from "./components/SideBar";
import HomePage from "./components/HomePage";
import ActionPage from  "./components/ActionPage";
import HeroesPage from  "./components/HeroesPage";
import HorrorPage from  "./components/HorrorPage";
import KillerPage from  "./components/KillerPage";
import MoviesPage from  "./components/MoviesPage";
import SuperNaturalPage from "./components/SuperNaturalPage";
import "./Styles.css"
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/action" element={<ActionPage />} />
            <Route path="/movies/heroes" element={<HeroesPage />} />
            <Route path="/movies/horror" element={<HorrorPage />} />
            <Route path="/movies/horror/killer" element={<KillerPage />} />
            <Route path="/movies/horror/supernatural" element={<SuperNaturalPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;