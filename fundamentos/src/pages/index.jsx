import Cabecalho from "../components/Cabecalho";
import Link from "next/link";

export default function Inicio(){
    const proxIdade = (idadeAtual) =>{
        return idadeAtual += 1;
    }

    return (
        <>
            <h1>Título</h1>
            <Cabecalho nome="hugo" proxIdade= {proxIdade(27)} localAniversario="outback" />
            <p>Esse é meu index em <strong>Next.js</strong></p>
            <Link href= "/estiloso">
                <span>Estiloso</span>
            </Link>
        </>
        
    ) 
}