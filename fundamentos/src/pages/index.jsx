import Cabecalho from "../components/Cabecalho";
import Link from "next/link";
import Navegador from "../components/Navegador";
import { useRouter } from "next/router";


export default function Inicio(){
    const proxIdade = (idadeAtual) =>{
        return idadeAtual += 1;
    }

    const router = useRouter();

    const handleNavigation = () => {
        router.push("/teste")
        /* router.replace("/teste") */
    }

    return (
        <>
            <h1>Título</h1>
            <Cabecalho nome="hugo" proxIdade= {proxIdade(27)} localAniversario="outback" />
            <p>Esse é meu index em <strong>Next.js</strong></p>
            <Navegador destino="/estiloso" texto="Estiloso" corFundo="red" />
            <Navegador destino="/jsx" texto="JSX" corFundo="green" />
            <Navegador destino="/teste" texto="Teste" corFundo="blue" />
            <Navegador destino="/clientes" texto="Clientes" corFundo="yellow" />
            <button onClick={handleNavigation}>Navigating programatically</button>

        </>
        
    ) 
}