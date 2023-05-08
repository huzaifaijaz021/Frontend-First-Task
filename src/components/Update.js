import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { showUser, updateUser } from '../features/userDetailSlice';

function Update() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [updateData, setUpdateData] = useState();
    const { users, loading } = useSelector((state) => state.app);

    useEffect(() => {
        if (users.length === 0) {
            dispatch(showUser({}));
        }

        else if (id) {
            const singleUser = users.filter((item) => item._id === id);
            console.log("🚀 ~ file: Update.js:18 ~ useEffect ~ singleUser:", singleUser)
            setUpdateData(singleUser[0]);
        }
    }, [id, users]);

    const newData = (e) => {
        setUpdateData({ ...updateData, [e.target.name]: e.target.value })
    }
    // console.log("hello", updateData);

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(updateUser(updateData));
        navigate('/');
    }

    if (loading) {
        return (<h2>Loading...</h2>);
    }


    return (
        <>  <h2>Update the Data</h2>
            <div className='row dean '>
                <div className='mx-auto col-10 col-md-8 col-lg-6'>
                    <form onSubmit={handleUpdate}>
                        <div className='form-group'>
                            <label>Your Name:</label>
                            <input type="text" placeholder='Name' name="name" className='form-control' value={updateData && updateData.name} onChange={newData} />
                        </div>
                        <div className='form-group'>
                            <label>Your Username:</label>
                            <input type="text" placeholder='Username' name="username" className='form-control' value={updateData && updateData.username} onChange={newData} />
                        </div>
                        <div className='form-group'>
                            <label>Your Email:</label>
                            <input type="email" placeholder='Email' name="email" className='form-control' value={updateData && updateData.email} onChange={newData} />
                        </div>
                        <div className='form-group'>
                            <label>Your Address:</label>
                            <input type="text" placeholder='Address' name="address" className='form-control' value={updateData && updateData.address} onChange={newData} />
                        </div>
                        <div className='form-group'>
                            <label>Your PhoneNumber:</label>
                            <input type="number" placeholder='Phone' name="phone" className='form-control' value={updateData && updateData.phone} onChange={newData} />
                        </div>
                        <div className='form-group'>
                            <label>Your Website:</label>
                            <input type="text" placeholder='Website' name="website" className='form-control' value={updateData && updateData.website} onChange={newData} />
                        </div>
                        <div className='form-group'>
                            <label>Your Company</label>
                            <input type="text" placeholder='Company' name="company" className='form-control' value={updateData && updateData.company} onChange={newData} />
                        </div>
                        <br />
                        <div className='d-grid'>
                            {/* <input type="submit" value='submit' className='btn btn-primary' /> */}
                            <button className='btn btn-info' value='submit'>Update the Data</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Update