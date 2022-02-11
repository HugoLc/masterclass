import Link from "next/link"

export default function Navegador({destino, texto, corFundo}){
    return (
        <Link href={destino} passHref>
            <span style={{
                backgroundColor: corFundo
            }}>
                {texto}
            </span>
        </Link>
    )
}