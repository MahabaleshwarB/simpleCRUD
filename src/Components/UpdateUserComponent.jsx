import React, { useState, useEffect } from 'react'
import { updateUserbyId } from '../services/UserServices';
// import { useNavigate, useParams } from "react-router-dom";
import { useLocation, useNavigate, useParams } from "react-router-dom";




const UpdateUserComponent = () => {

        const location = useLocation();
        const navigator = useNavigate();
        const { id } = useParams();
        
        const [userName, setUserName] = useState(location.state?.user?.userName || '');
        const [password, setPassword] = useState(location.state?.user?.password || '');
        const [email, setEmail] = useState(location.state?.user?.email || '');
        const [errors, setErrors] = useState({
            userName: '',
            password: '',
            email: ''
        });
       

        function updateUser(e) {
                e.preventDefault();
                const updatedUser = {userName, password, email};
                console.log('Updating user:', updatedUser);
                updateUserbyId(id, updatedUser).then((response) => {
                    console.log(response.data);
                    navigator('/allusers');
                }).catch((error) => {
                    console.log(error);
                });
                
            }
    
    
  return (
    <div className='container'>
        <br/>
        <br/>
        <div className='row'>
            <div className="card col-md-6 offset-md-3">
                <h2 className='text-container'>Update User</h2>
                <div className="card-body">
                    <form>
                        <div className="form-group mb-2">
                            <label className='form-label'>UserName</label>
                            <input 
                                type='text' 
                                name='UserName' 
                                placeholder='Enter your userName'
                                value={userName}
                                className={`form-control ${errors.userName ? 'is-invalid' : ''}`}
                                onChange={(e) => setUserName(e.target.value)}>
                            </input>
                            {errors.userName && <div className="invalid-feedback">{errors.userName}</div>}
                        </div>
                        

                        <div className="form-group mb-2">
                            <label className='form-label'>Password</label>
                            <input 
                                    type='password' 
                                    name='Password' 
                                    placeholder='Enter your password'
                                    value={password}
                                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                    onChange={(e) => setPassword(e.target.value)}>  
                                </input>
                                {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Email</label>
                            <input 
                                    type='email' 
                                    name='email' 
                                    placeholder='Enter your Email'
                                    value={email}
                                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                    onChange={(e) => setEmail(e.target.value)}>
                                </input>
                                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                        </div>
                        <button className='btn btn-success' type='submit' onClick={updateUser}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UpdateUserComponent