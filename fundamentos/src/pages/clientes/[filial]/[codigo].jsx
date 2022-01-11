import { useRouter } from "next/router"

export default function ClientePorCodigo(){
    
    const router = useRouter();
    
    return (
        <>
            <h1>Codigo = {router.query.codigo}</h1>
            <h2>Filial = {router.query.filial}</h2>
        </>
    )

}