// import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { HiOutlineSearch } from 'react-icons/hi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsPersonFill } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const state = useSelector((state) => state.product.selectedItem);
  return (
    <>
      <div className="Header-Section">
        <header className=" flex container justify-between items-center bg-black text-white px-[1.5rem] mx-auto">
          <div className="font-semibold text-white ">
            We Offer Free Shipping
          </div>
          <div className="items-center hidden gap-2 header-item-cont md:flex">
            <span>
              <FaLocationDot />
            </span>
            <span>Location</span>
          </div>
          <div className="header-item-cont">
            <select className="p-1 bg-black border border-none rounded">
              {/* <option value="">Select a country</option> */}
              <option value="India">India</option>
              <option value="UK">UK</option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
            </select>
          </div>
          <div className="hidden lg:block">
            <span>My Account</span>
          </div>
        </header>
        <nav className="container flex items-center justify-between mx-auto font-semibold text-black bg-white  py-[1rem] shadow-xl">
          <div className="flex gap-6 text-black lg:hidden">
            <span>
              <GiHamburgerMenu className="text-3xl text-black" />
            </span>
            <span>
              <HiOutlineSearch className="text-3xl text-black" />
            </span>
          </div>
          <div className="navhead  w-[20%] text-xl flex justify-end items-center hover:cursor-pointer">
            C-Shop
          </div>

          <div className="hidden navbar-list-items lg:flex">
            <ul className="flex justify-between gap-20">
              <Link to="/">Home</Link>
              <li>Product</li>
              <li>Contact</li>
              <li>About</li>
            </ul>
          </div>
          <ul className="flex justify-between gap-8 text-3xl ">
            <li className="hidden lg:block">
              <HiOutlineSearch />
            </li>
            <li className="relative flex ">
              <AiOutlineShoppingCart />
              <span
                className={
                  state
                    ? 'flex justify-center items-center absolute top-[-15px] right-[-24px] bg-black text-white rounded-[50%] h-[1.7rem] w-[1.7rem] text-[22px]'
                    : 'hidden'
                }
              >
                {state.length}
              </span>
            </li>
            <li className="">
              <BsPersonFill />
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
