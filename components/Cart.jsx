import React, { useRef } from 'react';
import Link from 'next/link';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import toast from 'react-hot-toast';
import { XMarkIcon } from "@heroicons/react/24/outline";
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { useStateContext } from '../context/StateContext';
import { urlFor } from '../lib/client';
import getStripe from '../lib/getStripe';

const Cart = () => {
  const cartRef = useRef();
  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuanitity, onRemove } = useStateContext();
  if (setShowCart.current)
      { 
      disableBodyScroll }
    
  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItems),
    });

    if(response.statusCode === 500) return;
    
    const data = await response.json();

    toast.loading('Redirecting...');

    stripe.redirectToCheckout({ sessionId: data.id });
  }

  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <div className="">
          <button
                type="button"
                className="cart-heading"
                onClick={() => setShowCart(false)}
              >
                <XMarkIcon
                  className="h-8 w-8 hover:opacity-60 focus:outline-none"
                  aria-hidden="true"
                />
                <span className="ml-2 text-accent-7 text-sm ">Close</span>
              </button>
              <div className="Text_sectionning_cart px-1 py-5">
                <h2>My cart</h2>
              </div>
              <div className="border-b"></div>

          {cartItems.length < 1 && (
                <div className="SidebarLayout_container">
                  <div className="flex-1 px-4 flex flex-col justify-center items-center">
                    <span className="border border-dashed border-primary rounded-full flex items-center justify-center w-16 h-16 p-12">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        width={20}
                        height={22}
                        stroke="currentColor"
                        className="w-6 h-6 absolute"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                        />
                      </svg>
                    </span>
                    <h2 className="pt-6 text-2xl font-bold tracking-wide text-center">
                      Your cart is empty
                    </h2>
                    <p className="text-gray-500 px-10 text-center pt-2">
                      Biscuit oat cake wafer icing ice cream tiramisu pudding
                      cupcake.
                    </p>
                  </div>
                </div>
              )}

          <div className="product-container">
            {cartItems.length >= 1 && cartItems.map((item) => (
              <div className="product" key={item._id}>
                <div className="flex flex-1 justify-between items-center py-4">
                <img src={urlFor(item?.image[0])} className="cart-product-image" />
                <div className="product_name">
                          <h5>{item.name}</h5>
                        </div>
                        <div className="product_price">
                          <h4>${item.price}</h4>
                        </div>
                        <div>
                          <p className="quantity-desc">
                            <span
                              className="minus"
                              onClick={() =>
                                toggleCartItemQuanitity(item._id, "dec")
                              }
                            >
                              <AiOutlineMinus />
                            </span>
                            <span className="num" onClick="">
                              {item.quantity}
                            </span>
                            <span
                              className="plus"
                              onClick={() =>
                                toggleCartItemQuanitity(item._id, "inc")
                              }
                            >
                              <AiOutlinePlus />
                            </span>
                          </p>
                        </div>
                        <div className="Product_remove_button">
                          <button type="button" onClick={() => onRemove(item)}>
                            <svg
                              className="w-6 h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </button>
                        </div>
              </div></div>
            ))}
          </div>
          {cartItems.length >= 1 && (
                <div className="flex-shrink-0 px-4  py-5 sm:px-6">
                  <div className="border-t">
                    <ul className="py-3">
                      <li className="flex justify-between py-1">
                        <h3>Total:</h3>
                        <h3>${totalPrice}</h3>
                      </li>
                    </ul>                
                      <div className="flex justify-center hover:opacity-75">
                        <button
                          type="button"
                          className="button_cart"
                          onClick={handleCheckout}
                        >
                          Proceed to checkout
                        </button>
                      </div>
                  </div>
                </div>
              )}
        </div>
      </div>
    </div>
  )
}

export default Cart