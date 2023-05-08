import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../features/userDetailSlice';

const Create = () => {
    const [users, setUsers] = useState({});

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const getUserData = (e) => {
        setUsers({ ...users, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(users);
        dispatch(createUser(users));
        navigate('/');
    }

    return (
        <>
            <div className='row' >
                <div className='col-md-4'>
                    <div className='bg-primary p-4 text-center'>
                        <h1>Create Data</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <label>Enter Your Name:</label>
                            <input type="text" required="true" placeholder='Name' name='name' className='form-control' onChange={getUserData} />
                        </div>
                        <div className='form-group'>
                            <label>Enter Your Username:</label>
                            <input type="text" required="true" placeholder='Username' name='username' className='form-control' onChange={getUserData} />
                        </div>
                        <div className='form-group'>
                            <label>Enter Your Email:</label>
                            <input type="email" required="true" placeholder='Email' name='email' className='form-control' onChange={getUserData} />
                        </div>
                        <div className='form-group'>
                            <label>Enter Your Address:</label>
                            <input type="text" required="true" placeholder='Address' name='address' className='form-control' onChange={getUserData} />
                        </div>
                        <div className='form-group'>
                            <label>Enter Your PhoneNumber:</label>
                            <input type="number" required="true" placeholder='Phone' name='phone' className='form-control' onChange={getUserData} />
                        </div>
                        <div className='form-group'>
                            <label>Enter Your Website:</label>
                            <input type="text" required="true" placeholder='Website' name='website' className='form-control' onChange={getUserData} />
                        </div>
                        <div className='form-group'>
                            <label>Enter Your Company</label>
                            <input type="text" required="true" placeholder='Company' name='company' className='form-control' onChange={getUserData} />
                        </div>
                        <br />
                        <div className='d-grid'>
                            <input type="submit" value='submit' className='btn btn-primary' />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
};

export default Create;