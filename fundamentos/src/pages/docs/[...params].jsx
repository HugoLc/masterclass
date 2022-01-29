// catch all routes pega todos os segmentos da url e 
// direcionam para a route raiz
// util quando deseja usar diferentes url para a mesma página

// [...params].jsx com apenas um colchetes, a url /docs/ retorna um 404.
// [[...params]].jsx com dois colchetes, retorna o proprio return do component

import { useRouter } from "next/router"


const Doc = ()=>{
    const router = useRouter()
    const {params = []} = router.query
    console.log(params) // todos os parametros da url depois de docs

    if (params.length === 2) { // se houver dois parametros
        return (
            <h1>
                Mostrando docs para a funcionalidade {params[0]} e conceito {params[1]}
            </h1>
        )
    }
    else if (params.length === 1) { // se houver um parametro
        return (
            <h1>
                Mostrando docs para a funcionalidade {params[0]} 
            </h1>
        )
    }

    return <h1>Docs Home Page</h1>
}

export default Doc