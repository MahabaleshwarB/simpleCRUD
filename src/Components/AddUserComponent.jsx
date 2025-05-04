import React, { useState } from 'react'
import { createUser } from '../services/UserServices';
import { useNavigate } from "react-router-dom";

const AddUserComponent = () => {
const [userName, setUserName] = useState('');
const [password, setPassword] = useState('');
const [email, setEmail] = useState('');
const navigator = useNavigate();

const [errors, setErrors] = useState({
    userName: '',
    password: '',
    email: ''
});


function saveUser(e) {
    e.preventDefault();
    if(validateForm() === true) {
        const user = {userName, password, email};
        console.log(user);

        createUser(user).then((response) =>{
            console.log(response.data);
            navigator('/allusers');
        });
    }
}

function validateForm() {
    let formIsValid = true;
    const newErrors = {...errors };

    if (!userName) {
        newErrors.userName = 'UserName is required';
        formIsValid = false;
    }

    if (!password) {
        newErrors.password = 'Password is required';
        formIsValid = false;
    }

    if (!email) {
        newErrors.email = 'Email is required';
        formIsValid = false;
    }

    setErrors(newErrors);
    return formIsValid;
}


  return (
    <div className='container'>
        <br/>
        <br/>
        <div className='row'>
            <div className="card col-md-6 offset-md-3">
                <h2 className='text-container'>Create User</h2>
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
                        <button className='btn btn-success' type='submit' onClick={(e) => saveUser(e)}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddUserComponent