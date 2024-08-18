import React from 'react';
import { render, screen } from '@testing-library/react';
import { AppProvider } from '../context/AppContext';
import Home from '../components/Home';

describe('Home Component', () => {
    test('renders the Home heading', () => {
        render(
            <AppProvider>
                <Home />
            </AppProvider>
        );
        const headingElement = screen.getByText(/Bem-vindo à Nossa Assistência Técnica/i);
        expect(headingElement).toBeInTheDocument();
    });

    test('displays a list of services', () => {
        render(
            <AppProvider>
                <Home />
            </AppProvider>
        );
        const serviceElements = screen.getAllByRole('heading', { level: 3 });
        expect(serviceElements.length).toBe(3); // Verifica se 3 serviços estão sendo exibidos
    });

    test('displays testimonials', () => {
        render(
            <AppProvider>
                <Home />
            </AppProvider>
        );
        const testimonialElements = screen.getAllByText(/Excelente atendimento/i);
        expect(testimonialElements.length).toBe(1); // Verifica se pelo menos um depoimento é exibido
    });
});
