import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { productId } from '../manage-state/slices/products'
const ProductId = () => {
    const params = useParams()
    const state = useSelector((state) => state.product)
    const dispatch = useDispatch()
    dispatch(productId(params.id))
    return (
        <div>{state.id}
            <h1>{state.title}</h1>
            <h2>{state.price}$</h2>
        </div>
    )
}

export default ProductId