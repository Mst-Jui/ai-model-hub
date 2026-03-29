import React from 'react';
import { toast } from 'react-toastify';

const Cart = ({ carts, setCarts }) => {
  

  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0)
  

  const handlePayment = () => {
    setCarts([])
    toast.success("Payment Successfull!")
  }

  const handleDelete = (item) => {
     const filteredArray = carts.filter(c=> c.id !== item.id)
     setCarts(filteredArray)
      toast.success("Item deleted")
  }

  return (
    <div className='p-10 max-w-6xl mx-auto'>
      <h2 className='text-2xl font-bold'>Your Cart</h2>

      {
        carts.length === 0 ? <p className='text-center text-2xl p-5'>Cart is empty</p> :
          <>
            <div className='space-y-5'>
              {
                carts.map(item => <div className='flex justify-between items-center border rounded-lg p-3 mt-4' key={item.id}>
                  <div className='flex items-center gap-2'>
                    <div>
                      <img className='h-20 w-20 object-contain' src={item.image} alt="" />
                    </div>
                    <div>
                      <h2 className='text-xl font-bold'>{item.title}</h2>
                    </div>
                  </div>
                  <div className='flex gap-10'>
                    <div className='text-3xl font-bold'>${item.price}/month</div>
                    <button
                      onClick={() => handleDelete(item)}
                      className='btn rounded-full btn-error'>X</button>
                  </div>
                </div>
                )}
            </div>

            <div className='flex justify-between items-center bg-black text-white p-5 mt-5 rounded-lg text-3xl font-bold'>
              <div>Total</div>
              <div>${totalPrice}</div>
            </div>

            <button
              onClick={handlePayment}
              className='btn w-full bg-red-500 mt-5 text-white text-2xl rounded-lg h-16'>Proceed to Checkout</button>
          </>
      }


    </div>
  );
};

export default Cart;