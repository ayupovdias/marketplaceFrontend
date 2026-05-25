import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CreateAdPage from "./pages/CreateAdPage";
import AdsPage from "./pages/AdsPage";

export default function App() {
    return (
        <BrowserRouter>
            <nav className="navbar">
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                <Link to="/create-ad">Create Advertisement</Link>
                <Link to="/ads">Advertisements</Link>
            </nav>

            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/create-ad" element={<CreateAdPage />} />
                <Route path="/ads" element={<AdsPage />} />
            </Routes>
        </BrowserRouter>
    );
}