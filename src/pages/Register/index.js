import { Container, FormContainer } from "./styles";
import Input from "../../componentes/Input";
import { useState } from "react";
import { api } from "../../services/api";
import { signIn } from "../../services/security";
import { useHistory } from "react-router";

function Register () {

    const handlerInput = () => {}

    const handlerSubmit = () => {}
    

    return ( 
        <Container>
            <FormContainer onSubmit={handlerSubmit}>
                <h1>Cadastra-se no</h1>
                <h1>SENAI-Overflow</h1>
                <Input label="Nome" required
                    type="nome" id="nome" handler={handlerInput}/>
                <Input label="E-mail" required
                    type="email" id="email" handler={handlerInput}/>
                <Input label="Senha" required
                    type="senha" id="senha" handler={handlerInput}/>
                <button>Entrar</button>
            </FormContainer>
        </Container>
    )
}

export default Register;