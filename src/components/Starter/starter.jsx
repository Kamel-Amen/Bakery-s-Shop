import React from 'react';
import { Link } from 'react-router-dom';
import '../Starter/starter.scss';

const Starter = () => {
  return (
    <div className='starter w-100 h-100 position-fixed'>
      <div className='background-image d-block position-fixed'></div>
      <div className='content position-absolute text-danger text-center'>
        <header>
          Welcome To <span className='text-white'>Bakery's</span> Shop
        </header>
        <p className='w-75 fs-3 my-5 mx-auto text-white'>
          &nbsp;&nbsp; Hello and welcome to bakery's shop for all kinds of
          cakes, sweets and lots of other fantastic food.
        </p>
        <Link to={'/home'} className='btn fs-3 btn-danger pb-2 px-5'>
          Order Now !
        </Link>
      </div>
    </div>
  );
};

export default Starter;
