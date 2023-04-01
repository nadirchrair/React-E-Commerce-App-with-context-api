//import { useSelector, useDispatch } from 'react-redux';
//import { withhard } from '../src/store/actions/bank-actions'
//import { action2 } from '../src/store/actions/bank-actions';
//import Produit from './component/Produit';
//import { withhard } from './toolkit/slice/slice'
//import { withdraw } from './rtk/Slices/bank-slice';
//import { deposite } from './rtk/Slices/bank-slice';
import Navbarapp from './E-commerceApp/Navbarapp';
import { Routes, Route } from 'react-router-dom';
import ProductApp from './E-commerceApp/ProductApp';
import Cart from './E-commerceApp/Cart';
import ProductId from './E-commerceApp/ProductId';
function App() {
  {/*
  const state = useSelector(state => state.bank)

  const dispatch = useDispatch()
console.log(state);*/}




  return (
    <div >
      {/*
      <h1>bank {state}</h1>
      <button onClick={() => { dispatch(withdraw(100)) }}>withdraw</button>
      <button onClick={() => { dispatch(deposite(100)) }}>deposite</button>
      < Produit />
  */}
      <Navbarapp />

      <Routes>
        <Route path='/' element={<ProductApp />} />
        <Route path='/card' element={<Cart />} />
        <Route path='/:id' element={<ProductId />} />

      </Routes>
      
    </div>
  );
}

export default App;
