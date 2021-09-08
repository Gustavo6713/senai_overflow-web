import { Container, FormContainer } from "./styles";
import Input from "../../componentes/Input";
import { useState } from "react";
import { api } from "../../services/api";

function Login (){

    const [formLogin, setFormLogin] = useState({
        email: "",
        senha: ""
    });
    
    //handle input genérico
    const handlerInput = (e) => {
        setFormLogin({...formLogin, [e.target.id]: e.target.value});
    }

    const handlerSubmit = async (e) => {
        e.preventDefault();

        try{
            const response = await api.post("/sessions", {
                email: formLogin.email,
                password: formLogin.senha
        });
            
        } catch (error) {
            console.log(error.response.data);
        }
    }

    return ( 
        <Container>
            <FormContainer onSubmit={handlerSubmit}>
                {formLogin.email}
                <h1>Bem-Vndo ao</h1>
                <h1>SENAI-Overflow</h1>
                <Input label="E-mail" required
                    type="email" id="email" handler={handlerInput}/>
                <Input label="Senha" required
                    type="password" id="senha" handler={handlerInput}/>
                <button>Entrar</button>
            </FormContainer>
        </Container>
    )
}

export default Login;