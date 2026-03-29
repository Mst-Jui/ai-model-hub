import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ModelCard = ({model, carts, setCarts}) => {
  const [isSuscribed, setIsSuscribed] = useState(false);
  const handleSubscription = () =>{
     setIsSuscribed(true);

     const isFound = carts.find((item)=> item.id === model.id)
     if(isFound){
      toast.error("Item already in cart")
      return;
     }

     setCarts([...carts, model]);
     toast.success("Item added to cart!")
  }
  return (
    <div className='shadow-lg rounded-lg border overflow-hidden border-zinc-300'>
      <div className='flex justify-center items-center h-56 bg-zinc-200'>
        <img className='h-40 w-40 object-contain' src={model.image} alt="img" />
      </div>
      <div className='p-4 space-y-3'>
        <h2 className='text-2xl font-bold'>{model.title}</h2>
        <p>{model.description}</p>
        <div className='text-2xl font-bold'>${model.price}/month</div>
        <button
          className='btn w-full bg-red-500 rounded-lg text-white mt-5'
          onClick={handleSubscription}
        >
          {isSuscribed ? "Suscribed" : "Suscribe Now"}
        </button>
      </div>
    </div>
  );
};

export default ModelCard;