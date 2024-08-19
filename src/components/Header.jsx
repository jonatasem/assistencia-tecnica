import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { HiMenu, HiX } from 'react-icons/hi';

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 2.5rem;
    background-color: var(--azul-primeiro);
    color: white;
    border-bottom: 2px solid #0056b3;
    position: relative;
    z-index: 10;

    h1, span {
        background-color: transparent;
    }
        
`;

const Title = styled.h1`
    font-size: 2rem;
    margin: 0;

    span {
        font-weight: bold;
        color: #ffcc00;
        margin-left: 0.5rem;
    }
`;

const Nav = styled.nav`
    ul {
        display: flex;
        list-style: none;
        padding: 0;
        margin: 0;
        gap: 1.5rem;
        background-color: var(--azul-primeiro);
    }

    @media (max-width: 768px) {
        display: none; /* Oculta o nav em telas menores */
    }
`;

const StyledLink = styled(Link)`
    position: relative;
    color: var(--branco);
    text-decoration: none;
    font-size: 1.1rem;
    transition: color 0.3s ease;

    &:hover {
        color: #ffcc00;
    }

    &:after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -5px;
        height: 2px;
        width: 100%;
        background: #ffcc00;
        transform: scaleX(0);
        transition: transform 0.3s ease;
    }

    &:hover:after {
        transform: scaleX(1);
    }
`;

const MenuToggle = styled.button`
    display: none;
    background: none;
    border: none;
    color: white;
    font-size: 2.5rem;
    cursor: pointer;
    background-color: transparent;

    &:active {
        transform: scale(0.9);
    }

    @media (max-width: 768px) {
        display: block; /* Exibe o botão em telas menores */
    }
`;

const MobileNav = styled.ul`
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    background: #007bff;
    width: 100%;
    padding: 1rem 0;
    border-top: 2px solid #0056b3;
    animation: ${fadeIn} 0.3s ease forwards;

    li {
        padding: 1rem;
        text-align: center;
    }
`;

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <HeaderContainer>
            <Title>
                Assistência Técnica <span>JL</span>
            </Title>
            <MenuToggle onClick={toggleMenu} aria-expanded={isOpen} aria-controls="mobile-nav">
                {isOpen ? <HiX /> : <HiMenu />}
            </MenuToggle>
            <Nav>
                <ul>
                    <li><StyledLink to="/">Home</StyledLink></li>
                    <li><StyledLink to="/projects">Projetos</StyledLink></li>
                    <li><StyledLink to="/contact">Contato</StyledLink></li>
                </ul>
            </Nav>
            <MobileNav id="mobile-nav" isOpen={isOpen}>
                <li><StyledLink to="/" onClick={toggleMenu}>Home</StyledLink></li>
                <li><StyledLink to="/projects" onClick={toggleMenu}>Projetos</StyledLink></li>
                <li><StyledLink to="/contact" onClick={toggleMenu}>Contato</StyledLink></li>
            </MobileNav>
        </HeaderContainer>
    );
};

export default Header;
