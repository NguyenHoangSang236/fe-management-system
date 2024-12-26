import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login';
import RegisterPage from "./pages/register";
import routeName from "./config/routeName";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path={routeName.LOGIN_PAGE} element={<LoginPage />} />
                <Route path={routeName.REGISTER_PAGE} element={<RegisterPage />} />
            </Routes>
        </Router>
    );
}

export default App;
