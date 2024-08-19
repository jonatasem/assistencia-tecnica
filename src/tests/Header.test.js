import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../components/Header'; // Ajuste o caminho conforme sua estrutura de pastas

describe('Header Component', () => {
    test('renders the header with title and links', () => {
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );

        expect(screen.getByText(/Assistência Técnica/i)).toBeInTheDocument();
        expect(screen.getByText(/Home/i)).toBeInTheDocument();
        expect(screen.getByText(/Projetos/i)).toBeInTheDocument();
        expect(screen.getByText(/Contato/i)).toBeInTheDocument();
    });

    test('toggles mobile menu on button click', () => {
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );

        const menuButton = screen.getByRole('button', { name: /menu/i });
        fireEvent.click(menuButton);

        expect(screen.getByText(/Home/i)).toBeVisible(); // Verifica se o menu aparece
        fireEvent.click(menuButton);
        expect(screen.queryByText(/Home/i)).toBeNull(); // Verifica se o menu desaparece
    });
});

