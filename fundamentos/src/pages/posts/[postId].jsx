import React from 'react';

function Post({post}) {
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
            
            
        
        }
    )
}

// o parametro contex é um objeto que possui uma chave "params"
export async function getStaticProps(/* context */ {params}){
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await response.json()

    return (
        {
            props: {
                post: data
            }
        }
    )
}
