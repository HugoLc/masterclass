import { useState } from "react"

export default function Estado(){
    const [numero, setNumero] = useState(0)
    const incrementar = () => {
        setNumero(numero + 1);
    }

    return (
        <>
            <span>{numero}</span>
            <button onClick={incrementar}>Incrementar</button>
        </>
    )
}