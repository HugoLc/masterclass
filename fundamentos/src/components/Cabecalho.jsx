export default function Cabecalho({nome, proxIdade, localAniversario}){
    
    return (
        <>
            <h1>Este cabecalho é um componente</h1>
            <h2>{nome} irá comemorar o aniversário de {proxIdade} anos no {localAniversario}</h2>
        </>
    )
}