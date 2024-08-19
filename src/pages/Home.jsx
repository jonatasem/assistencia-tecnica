import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../context/AppContext';

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;

    h2 {
        color: var(--azul-primeiro);
    }
`;

const Header = styled.header`
    text-align: center;
    padding: 2rem 0;
    background-image: linear-gradient(to right, var(--azul-primeiro), var(--azul-quarto));
    border-radius: 10px;

    h1, p {
        color: var(--branco);
    }
`;

const Section = styled.section`
    margin: 2rem 0;
    background-color: white;
    padding: 0.5rem;

    h2 {
        margin-bottom: 0.5rem;
    }
`;

const ServicesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const ServiceCard = styled.div`
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 20px;
    margin: 10px;
    width: 300px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;
    background-color: var(--branco);

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    }

    h3 {
        color: var(--azul-segundo);
    }
`;

const TestimonialContainer = styled.div`
    background-color: #e7f3fe;
    border-radius: 8px;
    margin: 10px 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 0.5rem;

    h5, p {
        padding: 0.5rem;
    }
        
`;

const Home = () => {
    const { services, testimonials } = useContext(AppContext);

    return (
        <Container>
            <Header>
                <h1>Bem-vindo à Nossa Assistência Técnica</h1>
                <p>Seu parceiro confiável para todos os reparos eletrônicos.</p>
            </Header>

            <Section>
                <h2>Nossos Serviços</h2>
                <ServicesContainer>
                    {services.map(service => (
                        <ServiceCard key={service.id}>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </ServiceCard>
                    ))}
                </ServicesContainer>
            </Section>

            <Section>
                <h2>Depoimentos</h2>
                {testimonials.map(testimonial => (
                    <TestimonialContainer key={testimonial.id}>
                        <h5><strong>{testimonial.name}</strong></h5>
                        <p>{testimonial.feedback}</p>
                    </TestimonialContainer>
                ))}
            </Section>
        </Container>
    );
};

export default Home;
