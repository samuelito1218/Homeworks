import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import Home from "./Home";
import Login from "./Login";
import Bienvenida from "./Bienvenida";

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/bienvenida" element={<Bienvenida />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;

