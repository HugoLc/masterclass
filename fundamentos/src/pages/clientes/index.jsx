import Navegador from "../../components/Navegador"

export default function ClientesIndex(){
    return <>
        <h1>Exemplo de rotas utilizando pastas dentro de pages</h1>
        <Navegador destino="/clientes/cadastro" texto="Cadastro de clientes" />
        <Navegador destino="/clientes/excluir" texto="Excluir cliente"/>
    </>
}