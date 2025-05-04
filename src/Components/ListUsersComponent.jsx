import React, { useEffect, useState } from "react"
import { listOfUsers, deleteUser, updateUserbyId } from "../services/UserServices";
import AddUserComponent from "./AddUserComponent";
import { useNavigate } from "react-router-dom";


const ListUsersComponent = () => {

    const [users, setUsers] = useState([]);
    const navigator = useNavigate();

    useEffect(() => {
        getAllUsers()
    }, []);

    function getAllUsers() {
        listOfUsers().then((response) => {
            setUsers(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function addUser() {
        navigator('/createUser');
    }

    function navigateUpdateUser(user) {
        navigator(`/updateUser/${user.id}`, { state: { user } });
    }

    function removeUser(id) {
        console.log(id);

        deleteUser(id).then((response) => {
            console.log(response.data);
            getAllUsers();
        }).catch((error) => {
            console.log(error);
        });
    }

  return (
    <div className='container'>
        <h1 className='text-center'>List of users</h1>
        <button className='btn btn-primary mb-2' type="submit" onClick={()=>addUser()} >Add User</button>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Users</th>
                    <th>Passwords</th>
                    <th>Emails</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    users && users.length > 0 ? (
                    users.map(user =>
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.userName}</td>
                            <td>{user.password}</td>
                            <td>{user.email}</td>
                            <td>
                                <button className="btn btn-danger me-2" type="button" onClick={() => removeUser(user.id)}>Delete</button>
                                <button className="btn btn-primary ms-2" type="button" onClick={() => navigateUpdateUser(user)}>Edit</button>
                            </td>
                        </tr>
                    )
                ) : (
                    <tr><td colSpan="5">No users found.</td></tr>
                ) 
            }  
            </tbody>
        </table>
    </div>
    
  )
 
}

export default ListUsersComponent;