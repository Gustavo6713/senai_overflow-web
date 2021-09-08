import { useState } from "react";


function Teste() {

    const [contador, setContador] = useState(0);

    const [nomes, setNomes] = useState([
        "Samuel", "Emerson", "Antonio", "Jean", "Brayan", "Carol", "Thamires"
    ]);

    const [nome, setNome] = useState("");

    const handelSend = () => {
        setNomes([...nomes, nome]);

        setNome("");
    }

    return (
        <>
            <h1>{contador}</h1>

            <ul>
                {nomes.map(nome => {
                    return <li>{nome}</li>
                })}
            </ul>

            <button onClick={() => setContador(contador + 1)}>Contar</button>
            <br />
            <input type="text" onChange={(e) => setNome(e.target.value)} 
                value={nome} placeholder="Digite o seu nome" />
            <br />
            <button onClick={() => setNome("")}>Limpar</button>
            <button onClick={handelSend}>Entrar</button>
            <h2>{nome}</h2>
        </>

    )
}

export default Teste;