import React, { useState } from 'react'

const ProductForm = (props) => {
    const { initialTitle, initialPrice, initialDesc, onSubmitProp, btn, backendErrors } = props;

    //states for handling input data
    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [desc, setDesc] = useState(initialDesc);
   
    const onSubmitHandle = (e) => {
        e.preventDefault()
        onSubmitProp({ title, price, description: desc });
    }

    console.log('backendErrors: ', backendErrors);

    return (
        <form onSubmit={onSubmitHandle}>
        {
            backendErrors.map((err, index) => {
                return (
                    <p key={index} className='errors'>{err}</p>
                )
            })
        }
            <p>
                <label>Title:</label>
                <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" />
                
            </p>

            <p>
                <label>Price:</label>
                <input onChange={(e) => setPrice(e.target.value)} type="number" value={price} />
            </p>

            <p>
                <label>Description:</label>
                <textarea onChange={(e) => setDesc(e.target.value)} type="number" rows="4" value={desc} />
            </p>
            <input type="submit"  value={btn}/>
        </form>

    )
}

export default ProductForm
