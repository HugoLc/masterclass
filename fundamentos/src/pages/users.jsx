
const UsersList = ({users}) => {
  return (
    <>
        <div>list of users</div>
        {
            users.map(user => {
                return (
                    <div key={user.id}>
                        <span>{user.name}</span>
                        <span>{user.company.name}</span>
                    </div>
                )
            })
        }
    </>
    
  )
};

export default UsersList;

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data)
    return (
        {
            props:{
                users: data
            }
        }
    )
}