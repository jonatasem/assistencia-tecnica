import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [services] = useState([
        { id: 1, title: 'Reparo de Smartphones', description: 'Consertos rápidos e eficientes para todos os modelos.' },
        { id: 2, title: 'Manutenção de Laptops', description: 'Serviços de manutenção para garantir o desempenho ideal.' },
        { id: 3, title: 'Suporte Técnico', description: 'Assistência remota e presencial para solucionar seus problemas.' },
    ]);

    const [testimonials] = useState([
        { id: 1, name: 'João Silva', feedback: 'Excelente atendimento e serviços de qualidade!' },
        { id: 2, name: 'Maria Oliveira', feedback: 'Muito satisfeita com o conserto do meu celular!' },
        { id: 3, name: 'Carlos Pereira', feedback: 'Serviço rápido e eficiente. Recomendo!' },
    ]);

    return (
        <AppContext.Provider value={{ services, testimonials }}>
            {children}
        </AppContext.Provider>
    );
};