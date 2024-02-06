import React, { useEffect, useState } from 'react'
import ProductForm from '../components/ProductForm'
import DisplayProducts from '../components/DisplayProducts'
import axios from 'axios';

const Main = () => {
    const [product, setProduct] = useState([]);
     //state for handing errors
     const [errors, setErrors] = useState([])

     const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/')
        .then((resposonse) => {
            setProduct(resposonse.data.products)
            setLoaded(true)

        })
        .catch((err) => {
            console.log(err);
        })
       
    }, []);
    
    const createProduct = (newProduct) => {
        axios.post('http://localhost:8000/api/product/', newProduct)
        .then((res) => {
            setProduct([...product, res.data.product])
        })
        .catch((err) => {
          const errorResponse = err.response?.data?.errors

          const tempErrorArr = [];

          for(const key of Object.keys(errorResponse)) {
            tempErrorArr.push(errorResponse[key].message)
          }

          setErrors(tempErrorArr)
      })
    }
    console.log("errors from backend: ",errors);
  return (
    <div>
      <ProductForm  intialTitle='' intialPrice= '' intialDesc='' onSubmitProp ={createProduct} btn ='Create Product' backendErrors= {errors}/>
      {
        loaded && (
          <DisplayProducts products={product} />
        )
      }
    </div>
  )
}

export default Main
