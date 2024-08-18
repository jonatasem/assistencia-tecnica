import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    background-color: var(--azul-principal);
    padding: 10px;
    text-align: center;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <p>&copy; 2024 Jonatas. Todos os direitos reservados.</p>
        </FooterContainer>
    );
};

export default Footer;