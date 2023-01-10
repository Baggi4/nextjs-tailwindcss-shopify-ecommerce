import React from "react";
import Link from "next/link";
import { Cart } from "./";
import { useStateContext } from "../context/StateContext";
import Image from "next/image";
import Logo from "../public/img/logo_500x500.png"

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="bg-white shadow">
      <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex px-2 lg:px-0">
            <div className="flex flex-shrink-0 items-center">
              <Link href="/" alt="acceuil">
                <Image
                  className="block w-auto"
                  src={Logo}
                  alt="tailwind logo"
                  width={40}
                  height={40}
                />
              </Link>
            </div>
          </div>
          <div className="flex justify-between h-16 px-2 lg:px-0 ">
            <button
              type="button"
              className="rounded-full hover:text-gray-500 hover:scale-120 "
              onClick={() => setShowCart(true)}
            >
              <span className="cart-item-qty">{totalQuantities}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            </button>

            {showCart && <Cart />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
