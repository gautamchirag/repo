import React, { useEffect, useState } from 'react';
import CategoryCard from './Category-card';
import pc from './pc.jpg';
import phone from './phone.jpg';
import shoes from './shoes.jpg';
import skincare from './skincare.jpg';
import shirt from './shirt.jpg';
import sunglass from './sunglass.jpg';
import watch from './watch.jpg';
import allproimage from './allproimage.webp';
import axios from 'axios';
import Card from '../card/Card';
import { BsCheckLg } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import Allproduct from '../Product/Allproduct';
import { fetch } from './fetch';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/productSlice';

function Category() {
  const nav = useNavigate();
  let p = 0;
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [category, setCategory] = useState('');
  const [start, setStart] = useState(false);
  const categories = [
    { name: 'Shirt', image: shirt, value: 'category/mens-shirts' },
    { name: 'Laptop', image: pc, value: 'category/laptops' },
    { name: 'Phone', image: phone, value: 'category/smartphones' },
    { name: 'Skincare', image: skincare, value: 'category/skincare' },
    { name: 'Sunglass', image: sunglass, value: 'category/sunglasses' },
    { name: 'Watch', image: watch, value: 'category/mens-watches' },
    { name: 'Shoes', image: shoes, value: 'category/mens-shoes' },
  ];

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(category);
      setData(result);
    };
    // setStart(true);
    if (start) {
      fetchData();
    }
  }, [category]);

  async function handleclick() {
    const alldata = await fetch('');
    dispatch(addProduct(alldata));
    nav('/products');
  }

  return (
    <div className="container mx-auto">
      <div className="relative">
        <img src={allproimage} alt="" className="w-full h-[500px]" />
        <div
          className="absolute bottom-[2rem] right-[4rem] text-4xl font-semibold text-white bg-purple-600 rounded-md cursor-pointer hover:scale-110 p-[1rem]"
          onClick={handleclick}
        >
          Get All Products
        </div>
      </div>
      <div className="text-4xl font-semibold text-center p-[1rem]">
        Category
      </div>
      <div className="grid grid-cols-5 gap-8 py-[2rem]">
        {categories.map((cat, index) => (
          <div
            key={index}
            onClick={() => {
              setStart(true);
              setCategory(cat.value);
            }}
          >
            <CategoryCard image={cat.image} title={cat.name} />
          </div>
        ))}
      </div>
      <div className="relative ">
        <div className="text-4xl font-semibold text-center heading p-[1rem] ">
          {data[0]?.category?.toUpperCase()}
        </div>
        <div className="grid justify-around grid-cols-3 gap-4 py-[3rem]">
          {data?.length > 0 &&
            data.map((product, index) => (
              <div key={index} className="flex justify-center">
                <Card data={product} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Category;
