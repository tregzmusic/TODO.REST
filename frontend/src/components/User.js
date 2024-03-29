import React from "react";

const UserItem = ({user})=>{
    return(
        <tr>
            <td>{user.user_name}</td>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>{user.email}</td>
        </tr>
    )
}

const UserList = ({users})=>{
    return(
        <table>
            <th>User name</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Email</th>
            {users.map((user_) => <UserItem user={user_} />)}
        </table>
    )
}

export default UserList