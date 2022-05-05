import CartContainer from './components/CartContainer';
import NavBar from './components/NavBar';

import { useDispatch, useSelector } from 'react-redux';
import {calculateTotals} from './features/cart/cartSlice';
import { useEffect } from 'react';
import Modal from './components/modal';


function App() {
  const { cartItems } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    <main>
      {isOpen && <Modal />}
      <NavBar />
      <CartContainer />
    </main>
  );
}

export default App;
