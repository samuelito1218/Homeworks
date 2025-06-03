import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PlayList from "./PlayList";
import DoublyLinkedListPagina from "./DoublyLinkedListPagina";
import Home from "./Home";
import Despedirse from "./Despedida";
import "./styles/main.scss";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/playlist" element={<PlayList />} />
                <Route path="/goodbye" element={<Despedirse />} />
                <Route path="/browser-navigation" element={<DoublyLinkedListPagina />} />
            </Routes>
        </Router>
    );
}

export default App;