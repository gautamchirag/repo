import { useSelector } from 'react-redux';
import skincare from './skincare.jpg';
import { MdAddShoppingCart } from 'react-icons/md';
import { BsPlusLg } from 'react-icons/bs';
import { AiOutlineMinus } from 'react-icons/ai';
import { useState } from 'react';
function ProductDetails() {
  const data = useSelector((state) => state.product.selectedItem);
  const [quantity, setQuantity] = useState(0);
  console.log('paraDD', data);
  function add() {
    setQuantity(quantity + 1);
  }
  function remove() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }
  return (
    <div className="container flex  mx-auto px-[3rem] justify-between pt-[3rem] pb-[5rem]">
      <div className="left-side-productDetails  flex-[40%] flex justify-center items-center">
        <div className=" w-[50%] h-[70%] ">
          <img
            src={skincare}
            alt="loading"
            className="object-cover w-full h-full "
          />
        </div>
      </div>
      <div className="flex flex-col  right-side-productDetails flex-[60%] gap-8">
        <h2 className="text-4xl">Nike Joyride Run Flyknit</h2>
        <p>
          The Nike Joyride Run Flyknit is a high-performance running shoe that
          is designed to provide an unparalleled level of comfort and support.
          It features Nike's innovative Joyride technology, which consists of
          thousands of tiny beads that are strategically placed within the sole
          of the shoe.
        </p>
        <div>
          <span className="text-xl font-semibold text-red-500 line-through">
            ₹10000
          </span>{' '}
          <span className="text-xl font-semibold text-blue-700">₹50000</span>
        </div>
        <div className="flex">
          <span
            className="min-w-[2.5rem] min-h-[2.5rem] -2 -blue-400 flex justify-center items-center cursor-pointer"
            onClick={remove}
          >
            <AiOutlineMinus className="text-xl font-semibold text-gray-700" />
          </span>

          <span
            className="min-w-[2.5rem] min-h-[2.5rem] -y-2 -blue-400 flex justify-center items-center
          text-2xl text-gray-700"
          >
            {quantity}
          </span>
          <span
            className="min-w-[2.5rem] min-h-[2.5rem] -2 -blue-400 flex justify-center items-center
          cursor-pointer"
            onClick={add}
          >
            <BsPlusLg className="text-xl font-semibold text-gray-700" />
          </span>
        </div>
        <div className="flex gap-6">
          <button className="flex items-center gap-[4px] justify-center text-xl font-semibold text-white bg-blue-500 p-[0.4rem] w-[110px] rounded">
            <MdAddShoppingCart /> <span>BUY</span>
          </button>
          <button className="flex items-center gap-[4px] justify-center text-xl font-semibold text-white bg-blue-500 p-[0.4rem] w-[110px] rounded">
            <MdAddShoppingCart /> <span>BUY</span>
          </button>
          <button className="flex items-center gap-[4px] justify-center text-xl font-semibold text-white bg-blue-500 p-[0.4rem] w-[110px] rounded">
            <MdAddShoppingCart /> <span>BUY</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
