import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    max-width: 500px;
    margin: 0 auto 5rem;

    a {
        position: fixed;
        bottom: 20px;
        right: 20px;
    }
`;

const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const Input = styled(Field)`
    margin: 0.5rem 0;
    padding: 0.8rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
    outline: none;
`;

const TextArea = styled(Field)`
    margin: 0.5rem 0;
    padding: 0.8rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
    resize: none;
`;

const Button = styled.button`
    padding: 0.8rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s;

    &:hover {
        background-color: #0056b3;
    }
`;

const slideOut = keyframes`
    0% {
        transform: translateX(0);
        opacity: 1;
    }
    100% {
        transform: translateX(100%);
        opacity: 0;
    }
`;

const SuccessMessage = styled.div`
    margin-top: 1rem;
    padding: 1rem;
    background-color: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
    border-radius: 4px;
    animation: ${slideOut} 5s forwards;
`;

const ContainerContact = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Nome é obrigatório'),
    email: Yup.string().email('Email inválido').required('Email é obrigatório'),
    message: Yup.string().required('Mensagem é obrigatória'),
});

const Contact = () => {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleSubmit = (values, { resetForm }) => {
        console.log('Enviando...', values);
        resetForm();
        setShowSuccessMessage(true);
        setTimeout(() => setShowSuccessMessage(false), 5000);
    };

    return (
        <ContainerContact>
            <h1>Entre em Contato!</h1>
            <p>Preencha o formulário abaixo:</p>
            <ContactContainer>
                <Formik
                    initialValues={{ name: '', email: '', message: '' }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {() => (
                        <StyledForm>
                            <Input 
                                type="text" 
                                name="name" 
                                placeholder="Seu Nome" 
                                aria-label="Nome" 
                            />
                            <ErrorMessage name="name" component="div" style={{ color: 'red' }} />

                            <Input 
                                type="email" 
                                name="email" 
                                placeholder="Seu E-mail" 
                                aria-label="E-mail" 
                            />
                            <ErrorMessage name="email" component="div" style={{ color: 'red' }} />

                            <TextArea 
                                name="message" 
                                placeholder="Sua Mensagem" 
                                rows="4" 
                                aria-label="Mensagem" 
                            />
                            <ErrorMessage name="message" component="div" style={{ color: 'red' }} />

                            <Button type="submit">Enviar</Button>
                        </StyledForm>
                    )}
                </Formik>
                {showSuccessMessage && <SuccessMessage>Mensagem enviada com sucesso!</SuccessMessage>}
                <a href="/">Voltar</a>
            </ContactContainer>
        </ContainerContact>
    );
};

export default Contact;