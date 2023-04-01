import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchproduct } from '../manage-state/slices/products';
import { Link } from 'react-router-dom';
import { AddToCart } from '../manage-state/slices/Card-slice';
import Category from './Category';

const ProductApp = () => {
    const produit = useSelector((state) => state.product)
    console.log(produit);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchproduct())


    }, []);
    return (
        <Container className='py-5'>
            <Category />

            <Row className='py-5'>
                {produit.map((produit) => {
                    return (
                        <Col key={produit.id} >
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" style={{ 'height': '300px' }} src={produit.image} />
                                <Card.Body>
                                    <Link to={`/${produit.id}`}>{produit.title}</Link>
                                    <Card.Text>{produit.description}
                                    </Card.Text>
                                    <Card.Text>{produit.price}
                                    </Card.Text>
                                    <Button variant="primary" onClick={() => { dispatch(AddToCart(produit)) }}>Add to card</Button>
                                </Card.Body>
                            </Card>
                        </Col>)

                })}

            </Row>
        </Container>

    )
}

export default ProductApp