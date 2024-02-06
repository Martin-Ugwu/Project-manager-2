import React, { useEffect, useState } from 'react'
import ProductForm from './ProductForm'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

const UpdateProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({});
  const [loaded, setLoaded] = useState(false);


  //request data of the specified product by Id
  useEffect(() => {
    axios.get('http://localhost:8000/api/product/' + id)
      .then((res) => {
        setData(res.data.product)
        setLoaded(true)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [id]);

  const updateProduct =(product) =>{
    axios.patch('http://localhost:8000/api/product/' + id, product)
    .then((res)=>{
      console.log(res);
      navigate('/')
    })
    .catch((err) => {
      console.log(err);
    })

  }
  return (
    <div>
      <p>Update product page</p>
      {
        loaded && (<ProductForm initialTitle={data.title} initialPrice={data.price} initialDesc={data.description} onSubmitProp ={updateProduct}  btn ='Update Product'/> )
      }


    </div>
  )
}

export default UpdateProduct
