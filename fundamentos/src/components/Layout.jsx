import Link from "next/link";

export default function Layout({children}){
    console.log(children);
    return(
        <>
            <Link href="/"> Voltar</Link>
            {children}
        </>
    )
}