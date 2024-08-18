import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import projectData from './data/API'; // Importa os dados dos projetos
import './index.css';

const links = ['Home', 'Projects', 'Contact']; // Links para o cabeçalho

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter basename="/assistencia-tecnica">
        <Routes>
            <Route path="/" element={<App title="Meu Projeto" links={links} />}>
                <Route index element={<Home projects={projectData} />} /> {/* Rota para Home com projectData */}
                <Route path="projects" element={<Projects projects={projectData} />} /> {/* Rota para Projects com projectData */}
                <Route path="contact" element={<Contact />} /> {/* Rota para Contact */}
            </Route>
        </Routes>
    </BrowserRouter>
);