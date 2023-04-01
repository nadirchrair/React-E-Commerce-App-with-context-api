import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
//import { Productreducer } from '../store/reducer/product'
//import { addproduct } from '../store/actions/product'
import { useEffect } from 'react'
//import { fethgetProduit } from '../store/actions/product'
import { Addproduct, fetchProducts } from '../rtk/Slices/product-slice'
const Produit = () => {
    const state = useSelector(state => state.product)
    const dispatch = useDispatch()
    console.log(state);
    useEffect(() => {
        // dispatch(fethgetProduit())
        dispatch(fetchProducts())
    }, []);

    return (
        <div>
            <h1>   produit </h1>
            {/*  <button onClick={() => dispatch(Addproduct({ id: 10, title: 'cvcv' }))}>add</button>*/}

            {state.map((e) => {
                return (<div key={e.id}><li >{e.title}</li></div>);
            })}

        </div>
    )
}

export default Produit