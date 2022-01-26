import { useState } from "react";

const Integracao = () => {
    
    const [cliente, setCliente] = useState({});
    const [codigo, setCodigo] = useState(0);

    const obterCliente = async(codigo)=>{
        const resp = await fetch(`http://localhost:3000/api/clientes/${codigo}`);
        const dados = await resp.json();
        setCodigo(dados)


        /* fetch(`http://localhost:3000/api/clientes/${codigo}`)
            .then(resp=> resp.json())
            .then(dados=>setCliente(dados)) */
    }
    return(
        <div>
            <input type="number" value={codigo} 
            onChange={e => setCodigo(e.target.value)}/>
            <button onClick={() => obterCliente(codigo)}>
                obter clientes
            </button>
            <ul>
                <li>
                    codigo: {cliente.id}
                </li>
                <li>
                    nome: {cliente.nome}
                </li>
            </ul>
        </div>
    )
}

export default Integracao;