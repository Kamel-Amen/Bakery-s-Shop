import React from 'react';
import './home.scss';
import cancel from '../../Files/icons/cancel.svg';
import trash from '../../Files/icons/trash.gif';

function Cart(props) {
  const products = [...props.products];

  function hideCart() {
    document.getElementById('cart').classList.toggle('showCart');
  }

  return (
    <div id='cart' className='bg-danger w-100 h-100 position-fixed cart-list'>
      <button onClick={hideCart}>
        <img src={cancel} alt='exit' className='close position-absolute' />
      </button>
      <div className='row m-0'>
        <div className='col-md-8 mx-auto'>
          <table className='table text-center'>
            <thead>
              <tr className='fs-3 text-white'>
                <th scope='col'>#</th>
                <th scope='col'>Name</th>
                <th scope='col'>Price</th>
                <th scope='col'>Delete</th>
              </tr>
            </thead>
            <tbody className='fs-5'>
              {products.map((item, index) => (
                <tr key={index}>
                  <th scope='row'>{products.indexOf(item) + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.price}$</td>
                  <td>
                    <img
                      src={trash}
                      className='delete'
                      alt='delete'
                      onClick={() => alert('No, i will not delete that :(')}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Cart;
