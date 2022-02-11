import Link from "next/link";

const PostList = ({posts}) => {
  return(
    <ul>
        {posts.map(post => {
            return(
                <li key={post.id}>
                    <Link href={`posts/${post.id}`} passHref><h4>{post.title} </h4></Link>
                </li>
            )
        })}
    </ul>
    
    )
}  

export default PostList;

export async function getStaticProps(){// retorna props para o componente
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json()

    return(
        {
            props:{
                posts: data.slice(0,3) // esse metodo não é viavel pois será necessário 
                                            // especificar cada caminho individualmente no [postId].jsx
                /* posts: data */
            }
        }
    )
}
