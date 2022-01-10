export default function Jsx(){
    const titulo = <h1><strong>Jsx</strong> é um conceito central</h1>
    const subTitulo = () =>{
        return <h2> E é muito legal</h2>
    }

    return(
        <>
            {titulo}
            {subTitulo()}
        </>
    )
}