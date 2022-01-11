import Link from "next/link"

export default function Navegador({destino, texto, corFundo}){
    return (
        <Link href={destino}>
            <span style={{
                backgroundColor: corFundo
            }}>
                {texto}
            </span>
        </Link>
    )
}