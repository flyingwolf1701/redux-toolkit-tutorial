import CartContainer from './components/CartContainer';
import NavBar from './components/NavBar';

import { useDispatch, useSelector } from 'react-redux';
import {calculateTotals, getCartItems} from './features/cart/cartSlice';
import { useEffect } from 'react';
import Modal from './components/modal';


function App() {
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems('random')) // something can be passed from useEffect to slice thunk
  }, []);

  if (isLoading){
    return (
      <div className="loading">
        <h1>loading...</h1>
      </div>
    )
  }

  return (
    <main>
      {isOpen && <Modal />}
      <NavBar />
      <CartContainer />
    </main>
  );
}

export default App;
