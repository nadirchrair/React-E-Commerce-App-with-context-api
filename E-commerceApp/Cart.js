import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Table from 'react-bootstrap/Table';
import { clear, deleteFromCart } from '../manage-state/slices/Card-slice';

const Cart = () => {
  const card = useSelector((state) => state.card.items)
  // card = JSON.parse(localStorage.getItem('card'));
  const dispatch = useDispatch();
  const totalProce = card.reduce((acc, product) => {

    acc += product.price * product.quantity;
    return acc
  }, 0)
  return (


    <Container className='py-10' >
      <h1 className='py-5'> WELCOM TO YOUR CART</h1>
      <Button className='mb-3' onClick={() => dispatch(clear())}>Clear </Button>
      <h5>Total price {totalProce.toFixed(2)}</h5>

      <Table striped bordered hover size='sm'>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>price</th>
            <th>quantity</th>
            <th>Action</th>

          </tr>
        </thead>
        <tbody>
          {card.map((cart) => {
            return (
              <tr key={cart.id}>
                <td>{cart.id}</td>
                <td>{cart.title}</td>
                <td>{cart.price}</td>
                <td>{cart.quantity}</td>
                <td><Button variant='danger' onClick={() => dispatch(deleteFromCart(cart.id))}>delete</Button></td>

              </tr>
            )

          })}


        </tbody>
      </Table>
    </Container>
  )
}

export default Cart