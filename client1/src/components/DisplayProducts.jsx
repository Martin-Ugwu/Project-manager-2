import React from 'react'
import { Link } from 'react-router-dom';

const DisplayProducts = (props) => {
    const { products } = props;
    return (
        <div>
            <h1>All Product in our database</h1>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Tittle</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((prodduct, key) => {
                            return (
                                <tr key="index">
                                    <td>{key + 1}</td>
                                    <td>{prodduct?.title}</td>
                                    <td>{prodduct?.price}</td>
                                    <td>
                                        <Link to={'/details/' + prodduct?._id}>Details</Link> |
                                        <Link to={'/edit/' + prodduct?._id}>Edit</Link> |
                                        <Link to={'/delete/' + prodduct?._id}>Delete</Link>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>

            </table>

        </div>
    )
}

export default DisplayProducts
