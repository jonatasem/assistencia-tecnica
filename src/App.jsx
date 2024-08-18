import React from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import { AppProvider } from './context/AppContext';

import Header from './components/Header'; // Importa o componente de cabeçalho
import Footer from './components/Footer'; // Importa o componente de rodapé

const App = ({ title, links }) => {
    return (
        <>
            <AppProvider>
                <Header title={title} links={links} /> {/* Renderiza o cabeçalho com props */}
                <Outlet /> {/* Renderiza as rotas filhas aqui */}
                <Footer /> {/* Renderiza o rodapé */}
            </AppProvider>
        </>
    );
};

// Validação de props para o componente App
App.propTypes = {
    title: PropTypes.string.isRequired, // Título do cabeçalho
    links: PropTypes.arrayOf(PropTypes.string).isRequired, // Links do cabeçalho
};

// Exporta o componente App
export default App;