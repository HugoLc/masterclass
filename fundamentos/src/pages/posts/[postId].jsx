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
    return (
        {
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
            fallback: false
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
