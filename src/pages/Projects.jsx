import React, { useState } from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;
`;

const ProjectItemContainer = styled.div`
    margin: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 300px;
    text-align: center;
    box-shadow: 1px 1px 5px silver;
    transition: transform 0.2s, box-shadow 0.2s;

    &:hover {
        transform: scale(1.05);
        box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
    }
`;

const ProjectImage = styled.img`
    width: 100%;
    max-width: 150px;
    height: auto;
    border-radius: 8px;
`;

const ProjectTitle = styled.h2`
    font-size: 1.5em;
    margin: 10px 0;
    color: #007bff;
`;

const ProjectDescription = styled.p`
    color: #666;
`;

const ProjectLink = styled.a`
    display: inline-block;
    margin-top: 10px;
    padding: 10px 15px;
    background-color: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s;

    &:hover {
        background-color: #0056b3;
    }
`;

const SearchHead = styled.div`
    width: 90%;
    text-align: end;
    margin: 0 auto;
    padding: 0.5rem;

    input {
        padding: 0.5rem 1.5rem;
        font-size: 20px;
        outline: 0;
        border: 1px solid silver;
        border-radius: 0.5rem;
        color: #007bff;
    }
`;

const ProjectItem = React.memo(({ project }) => (
    <ProjectItemContainer>
        <ProjectTitle>{project.nome}</ProjectTitle>
        <ProjectImage src={project.img} alt={`Projeto: ${project.nome}`} />
        <ProjectDescription>{project.descricao}</ProjectDescription>
        <ProjectLink href={project.link}>Baixar</ProjectLink>
    </ProjectItemContainer>
));

const Projects = ({ projects }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    const filteredProjects = projects.filter(project =>
        project.nome.toLowerCase().includes(searchTerm) || 
        project.descricao.toLowerCase().includes(searchTerm)
    );

    return (
        <>
            <SearchHead>
                <input 
                    type="text" 
                    placeholder="Faça uma pesquisa" 
                    value={searchTerm} 
                    onChange={handleSearchChange} 
                    aria-label="Campo de pesquisa de projetos"
                />
            </SearchHead>
            <ProjectsContainer>
                <h1 style={{ width: '100%', textAlign: 'center', color: '#007bff' }}>Projetos</h1>
                {filteredProjects.length > 0 ? (
                    filteredProjects.map(project => (
                        <ProjectItem key={project.id} project={project} />
                    ))
                ) : (
                    <p>Nenhum projeto encontrado. Tente outra pesquisa!</p>
                )}
            </ProjectsContainer>
        </>
    );
};

export default Projects;
