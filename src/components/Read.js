import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteUser, showUser } from '../features/userDetailSlice';

function Read() {
    const dispatch = useDispatch();
    const { users, loading } = useSelector((state) => state.app);

    useEffect(() => {
        dispatch(showUser({}));
    }, [dispatch])

    if (loading) {
        return (<h2>Loading...</h2>)
    }

    const handleDelete = (id, name) => {
        if (window.confirm(`Are you Sure you  want to delete ${name}`))
            dispatch(deleteUser(id));
    }

    return (
        <>
            <h2>ALL User Details</h2>
            <div className='row'>
                <div className='col-md-12'>

                    <table className='table table-bordered table-striped table-hover'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>NAME</th>
                                <th>USERNAME</th>
                                <th>EMAIL</th>
                                <th>ADDRESS</th>
                                <th>PHONE</th>
                                <th>WEBSITE</th>
                                <th>COMPANY</th>
                                <th>EDIT</th>
                                <th>DELETE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users &&
                                users.map((item) => {
                                    return (
                                        <> <tr key={item.id}>
                                            <td>{item._id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.username}</td>
                                            <td>{item.email}</td>
                                            <td>{item.address}</td>
                                            <td>{item.phone}</td>
                                            <td>{item.website}</td>
                                            <td>{item.company}</td>
                                            <td><Link className='btn btn-success' to={`/update/${item._id}`}>Update</Link></td>
                                            <td> <button className='btn btn-danger' onClick={() => handleDelete(item._id, item.name)}>Delete</button></td>
                                        </tr>
                                        </>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Read