import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const validUsers = [ // probar con estos usuarios
        { username: "Samuelito1218", password: "1234" },
        { username: "Ana32", password: "abcd" },
        { username: "Diego273", password: "lol" }
    ];

    
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = (username, password) => {
        const foundUser = validUsers.find(
            (u) => u.username === username && u.password === password
        );
        if (foundUser) {
            const userData = { name: username };
            setUser(userData);
            localStorage.setItem("user", JSON.stringify(userData)); // Guardar en localStorage
            return true;
        }
        return false;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user"); // Eliminar del almacenamiento
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
