import React from 'react';
import {useRouter} from 'next/router'

function Post({post}) {

    const router = useRouter()
    // para tratar o erro Cannot read properties of undefined (reading 'id'){post.id}
    if(router.isFallback){
        return <h1>Loading</h1>
        //retorno caso seja um fallback
    }

  return(
      <>
        <h3><span>{post.id}</span>{post.title}</h3>
        <p>{post.body}</p>
      </>
  );
}

export default Post;

// getStaticPaths é uma forma de informar os possiveis parametros da url dinamica
export async function getStaticPaths(){
    //FORMA GERANDO PATHS DE ACORDO COM A QUANTIDADE DE IDS

    /* const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json() // recebe os dados de 100 posts da api

    const paths = data.map(post => {
        return {
            params: {
                postId: `${post.id}`
            }
        }
    }) */
    return (
        {
            //FORMA GERANDO PATHS MANUALMENTE
            paths: [ // um array de objetos informando os caminhos
                {
                    params: { // o parametro da url
                        postId: '1' //possivel valor do parametro postId
                    }
                },
                {
                    params: {
                        postId: '2'
                    }
                },
                {
                    params: {
                        postId: '3'
                    }
                }
            ],
             //FORMA GERANDO PATHS DE ACORDO COM A QUANTIDADE DE IDS
            /* paths: paths,*/
            
            
            //fallback: false 
            // Os caminhos retornados do getstaticpaths serão renderizados para html no build time pelo getstaticprops
            // Com fallback sendo falso qualquer caimnho que não for retornado por getstaticpaths irá resultar em 404
            
            // Valido para aplicações com poucos caminhos para serem renderizados / quando novas páginas não são 
            // adicionadas com frenquencia (blog com poucos artigos)
            
            fallback:true
            // Com fallback sendo true, o caminho nao contido nos "paths" irá gerar um fallback page no primeiro acesso
            // Por trás disso o next.js irá gerar estaticamente a página html e json para este caminho isso inclui
            // rodar getstaticprops
            // Quando for finalizado o navegador irá recerber o json para o caminho gerado que será isado para 
            // renderizar automaticamente a página com os props requisitados 
            // O next.js irá manter registrado a nova lista de páginas pre-renderizadas para que requisições 
            // futuras ao mesmo caminho sirvam a página gerada assim como as outras páginas/caminhos especificados
        
        }
    )
}

// o parametro contex é um objeto que possui uma chave "params"
export async function getStaticProps(/* context */ {params}){
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await response.json()

    // se nao retornar nada
    if (!data.id) {
        return {
            notFound: true //retorna um objeto com uma chave notFound ao inves do props, o que irá resultar em 404
        }
    }

    console.log(`Gerando paginas para posts/${params.postId}`)
    return (
        {
            props: {
                post: data
            }
        }
    )
}
