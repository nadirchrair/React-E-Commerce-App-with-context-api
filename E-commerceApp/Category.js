import React from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import '../App.css'
import { fetchcategory } from '../manage-state/slices/Category-slice';
import { fetchAnyProduct } from '../manage-state/slices/products';
const Category = () => {
    const state = useSelector((state) => state.category)
    console.log(state);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchcategory())
    }, []);
    return (
        <div className='App'>
            <ButtonGroup aria-label="Basic example" style={{ 'margin-top': '50px' }} >
                {
                    state.map((category) => {
                        return <Button variant="secondary" onClick={() => dispatch(fetchAnyProduct(category))}>{category}</Button>

                    })
                }
            </ButtonGroup>
        </div>
    )
}
export default Category