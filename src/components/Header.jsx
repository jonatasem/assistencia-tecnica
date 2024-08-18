import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 2.5rem;

    h1 > span {
        font-size: 40px;
    }

    nav > ul {
        display: flex;
        list-style: none;
        padding: 0;
        margin: 0;
    }

    nav > ul > li {
        margin: 0 1rem;
    }

    h1 {
        color: var(--azul-quarto);
    }
`;




const Header = () => {
    return (
        <>
            <HeaderContainer>
                <h1>Assistencia Técnica <span>JL</span></h1>
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/projects'>Projetos</Link></li>
                        <li><Link to='/contact'>Contato</Link></li>
                    </ul>
                </nav>
            </HeaderContainer>
            
        </>
    );
};

export default Header;