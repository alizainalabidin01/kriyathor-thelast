import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Link from 'next/link'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className=" shadow-sm w-full z-10 bg-white">
      <div className="w-full">
        <div className="flex flex-row items-center h-20 w-full">
          <div className="flex items-center mx-20 justify-between w-full">
            <div className="flex justify-center items-center flex-shrink-0 ">
              <img src="/image/logo-text.png" className="h-5 sm:h-8" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href='/'>
                  <a className="cursor-pointer hover:bg-gray-500 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium" >
                    Home
                  </a>
                </Link>
                <Link href='/product'>
                  <a className="cursor-pointer hover:bg-gray-500 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium" >
                    Product
                  </a>
                </Link>
                <Link href='/about'>
                  <a className="cursor-pointer hover:bg-gray-500 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium" >
                    About Us
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="mr-10 flex md:hidden ">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-black inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <i className="fas fa-bars md:fa-2x"></i>
              ) : (
                <i className="fas fa-times md:fa-2x"></i>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-100 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden text-center" id="mobile-menu">
            <div
              ref={ref}
              className="bg-white px-2 pb-3 space-y-1 sm:px-3">
              <Link href='/'>
                <a className="cursor-pointer hover:bg-gray-500 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium" >
                  Home
                </a>
              </Link>
              <Link href='/product'>
                <a className="cursor-pointer hover:bg-gray-500 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium" >
                  Product
                </a>
              </Link>
              <Link href='/about'>
                <a className="cursor-pointer hover:bg-gray-500 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium" >
                  About Us
                </a>
              </Link>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
}

export default Navbar;
