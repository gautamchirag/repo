import React, { useState } from 'react';
import { AiTwotoneStar } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { addSelectedItem } from '../redux/productSlice';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Card({ data }) {
  const dispatch = useDispatch();
  const navi = useNavigate();
  const [alert, setAlert] = useState(false);
  const selectItems = useSelector((state) => state.product.selectedItem);

  function addtocart() {
    // Check if the item is already in the cart
    const isItemInCart = selectItems.find((item) => item.id === data.id);

    if (isItemInCart) {
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 1000);
      // prompt('Item are already in the cart');
    } else {
      dispatch(addSelectedItem(data));
    }
  }

  function navigateToProductDetail() {
    navi('/productDetail');
  }

  return (
    <div className="product-card border border-gray-400 w-[270px] h-max p-[1rem] flex flex-col items-center gap-3 bg-white rounded shadow-lg cursor-pointer relative">
      {alert && (
        <div className="alert w-[300px] flex justify-center items-center h-[80px] font-semibold text-teal-50 bg-cyan-900 text-2xl rounded-lg absolute top-[90] left-50 z-10 animate-spin">
          Item is already in the cart
        </div>
      )}
      <img
        src={data.images[0]}
        alt="loading"
        className="h-[160px] w-[100%] rounded"
        onClick={navigateToProductDetail}
      />
      <div
        className="flex flex-col w-full gap-3 card-content"
        onClick={navigateToProductDetail}
      >
        <h3 className="text-xl font-semibold text-black">{data.title}</h3>
        <span className="flex text-red-500">
          <AiTwotoneStar />
          <AiTwotoneStar />
          <AiTwotoneStar />
          <AiTwotoneStar />
        </span>
        {/* <p className="text-[12px] text-gray-400">{data.desc}</p> */}
        <span className="text-[20px] font-semibold">$ {data.price}</span>
      </div>

      <button
        className="bg-black text-white p-[0.6rem] w-full font-semibold rounded"
        onClick={addtocart}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Card;
