import React, { useState, useEffect } from 'react';
import './home.scss';
import Navbar from './Navbar';
import axios from 'axios';
import {
  cupCake,
  menu,
  cup1,
  cup2,
  sw1,
  sw2,
  sw3,
  tart1,
  tart2,
  tart3,
  fb,
  instagram,
  linkedin,
  github,
  cart,
} from '../images';
import Cart from './Cart';

export const ProductsContext = React.createContext();

function Home() {
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);
  const images = [cup1, cup2, sw1, sw2, sw3, tart1, tart2, tart3];
  const category = ['Tarts', 'Sweets'];
  const links = [
    {
      id: 1,
      img: fb,
      name: 'Facebook',
      link: 'https://www.facebook.com/kamelamen32',
    },
    {
      id: 2,
      img: instagram,
      name: 'Instagram',
      link: 'https://www.instagram.com/kamelamen31/',
    },
    {
      id: 3,
      img: linkedin,
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/kamel-amen-386111200/',
    },
    {
      id: 4,
      img: github,
      name: 'Github',
      link: 'https://github.com/Kamel-Amen',
    },
  ];

  useEffect(() => {
    axios
      .get('http://myjson.dit.upm.es/api/bins/dpqh')
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function sendToCart(item) {
    alert(item.name + ' has been added to cart successfully :)');
    setProducts([...products, item]);
  }

  function showCart() {
    document.getElementById('cart').classList.toggle('showCart');
  }

  return (
    <div className='home bg-dark' id='home'>
      <Navbar />
      <button
        className='position-fixed cart bg-white rounded-circle p-1 border-0'
        onClick={showCart}
      >
        <img src={cart} alt='cart' />
      </button>

      {/* Cart */}
      <Cart products={products} />

      {/* Section One 'Home' */}
      <div className='sec-1 row m-0 overflow-hidden text-center'>
        <div className='background-image d-block position-absolute'></div>
        <div className='content text-danger text-center position-absolute'>
          <h1>
            Welcome to <span className='text-dark'>Bakery's</span> House
          </h1>
          <p className='w-50 text-dark fs-5 mx-auto mt-5'>
            &nbsp;&nbsp;&nbsp; Hi, do you want to taste our magical cupcakes,
            sweets and more. order now and enjoy the fantastic taste.
          </p>
          <a href='#order' className='btn btn-danger mt-4 px-5 py-2 fs-4'>
            Order !
          </a>
        </div>
      </div>
      {/* Section Two 'About' */}
      <div
        id='about'
        className='about row mx-0 pt-5 overflow-hidden text-warning text-center'
      >
        <div className='content col-6'>
          <header>Who R We ?!</header>
          <p className='mx-auto mt-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea omnis
            nam odit laborum consequatur at, magnam quaerat voluptas ipsa
            reiciendis, dicta in error quia autem doloremque commodi impedit
            nulla neque cum quos asperiores ipsum aut accusantium excepturi?
            Illo cum consectetur corporis quaerat quo! Dolores repellendus error
            quo pariatur, aperiam nihil.
          </p>
          <a href='#order' className='btn btn-warning fs-4 px-4 mt-5'>
            Order Now
          </a>
        </div>
        <div className='col-6'>
          <div className='cupcake mx-auto'>
            <img src={cupCake} alt='cupCake' />
          </div>
        </div>
      </div>
      {/* Section Three 'Products' */}
      <div
        className='sec-3 products bg-danger mx-0 pt-5 overflow-hidden text-white text-center'
        id='order'
      >
        <header className='mb-5'>
          Menu <img src={menu} alt='menu' />
        </header>
        <div className='menu'>
          <div className='row'>
            <ul className='nav nav-tabs menu_tab mx-auto justify-content-center mb-5 fs-3'>
              <li className='nav-item'>
                <a className='nav-link active' href='#home'>
                  Cakes
                </a>
              </li>
              {category.map((cate) => (
                <li className='nav-item' key={cate}>
                  <a className='nav-link' href='#home'>
                    {cate}
                  </a>
                </li>
              ))}
            </ul>

            {/* Start Products Display */}
            <div className='row m-0 px-4'>
              {data.map((item) => (
                <div className='single_menu col-6 px-5' key={item.id}>
                  <img src={images[item.id - 1]} alt='product' />
                  <div className='menu_content'>
                    <h4>
                      {item.name} <span>${item.price}</span>
                    </h4>
                    <p>{item.info}</p>
                    <button
                      className='btn btn-dark'
                      onClick={() => sendToCart(item)}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Section Four 'contact' */}
      <div
        id='contact'
        className='position-relative about pt-3 overflow-hidden text-center'
      >
        <header className='mt-3 text-decoration-underline'>Contact Me</header>
        <div className='links row mt-5 justify-content-center'>
          {links.map((link) => (
            <div className='flip-card overflow-hidden' key={link.id}>
              <div className='flip-card-inner position-relative text-center'>
                <div className='flip-card-front'>
                  <img src={link.img} alt='Avatar' />
                </div>
                <div className='flip-card-back text-dark px-1 py-5'>
                  <a href={link.link} className='btn btn-dark px-5 fs-4'>
                    {link.name}
                  </a>
                  <h1 className='my-4'>Kamel Amen</h1>
                  <h5>Frontend Developer</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
        <svg
          className='position-absolute bottom-0'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1440 320'
        >
          <path
            fill='#0099ff'
            fillOpacity='1'
            d='M0,96L48,80C96,64,192,32,288,64C384,96,480,192,576,218.7C672,245,768,203,864,186.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
          ></path>
        </svg>
        <footer className='position-absolute bottom-0 text-white w-100 text-center'>
          &#169;Copyrights <span className='text-dark'>Kamel-Amen</span> 2022
        </footer>
      </div>
    </div>
  );
}

export default Home;
