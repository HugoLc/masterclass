import styles from "../styles/Estiloso.module.css";
import Layout from "../components/Layout";


export default function Estiloso(){
    return (
        <Layout>
            <h1 className={`${styles.roxo} center`}>Estilo usando css modularizado</h1>
        </Layout>
    )
}