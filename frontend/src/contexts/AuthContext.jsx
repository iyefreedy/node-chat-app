import { createContext, useState, useEffect } from "react";
import authService from "../services/authService";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuthStatus = async () => {
            try {
                const userData = await authService.checkAuthStatus();
                setUser(userData);
            } catch (error) {
                setUser(null);
                console.error("Error checking auth status:", error);
            }
        };

        checkAuthStatus(); // Memanggil fungsi untuk memeriksa status autentikasi saat komponen dimuat
    }, []);

    // Fungsi untuk login
    const login = async (email, password) => {
        try {
            const { access_token } = await authService.login(email, password); // Melakukan login menggunakan layanan authService
            setUser(access_token); // Mengatur informasi pengguna yang sedang masuk setelah login berhasil
            navigate("/chat");
        } catch (error) {
            console.error("Error logging in:", error);
            throw error; // Melemparkan error jika login gagal
        }
    };

    // Fungsi untuk logout
    const logout = async () => {
        try {
            await authService.logout(); // Melakukan logout menggunakan layanan authService
            setUser(null); // Mengatur user menjadi null setelah logout berhasil
        } catch (error) {
            console.error("Error logging out:", error);
            throw error; // Melemparkan error jika logout gagal
        }
    };

    // Mengekspos konteks autentikasi dan fungsi login dan logout
    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
