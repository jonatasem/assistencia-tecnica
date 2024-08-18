import React from 'react';
import { render, screen } from '@testing-library/react';
import Projects from '../pages/Projects';

const mockProjects = [
    { id: 1, nome: 'Projeto 1', descricao: 'Descrição do Projeto 1', img: 'img1.jpg', link: '#' },
    { id: 2, nome: 'Projeto 2', descricao: 'Descrição do Projeto 2', img: 'img2.jpg', link: '#' },
];

describe('Projects Component', () => {
    test('renders the Projects heading', () => {
        render(<Projects projects={mockProjects} />);
        const headingElement = screen.getByText(/Projetos/i);
        expect(headingElement).toBeInTheDocument();
    });

    test('displays a list of projects', () => {
        render(<Projects projects={mockProjects} />);
        const projectElements = screen.getAllByRole('heading', { level: 2 });
        expect(projectElements.length).toBe(mockProjects.length);
    });

    test('filters projects based on search input', () => {
        render(<Projects projects={mockProjects} />);
        const input = screen.getByLabelText(/Campo de pesquisa de projetos/i);
        fireEvent.change(input, { target: { value: 'Projeto 1' } });
        const projectElement = screen.getByText(/Projeto 1/i);
        expect(projectElement).toBeInTheDocument();
        expect(screen.queryByText(/Projeto 2/i)).not.toBeInTheDocument();
    });

    test('shows message when no projects are found', () => {
        render(<Projects projects={[]} />);
        const messageElement = screen.getByText(/Nenhum projeto encontrado. Tente outra pesquisa!/i);
        expect(messageElement).toBeInTheDocument();
    });
});
