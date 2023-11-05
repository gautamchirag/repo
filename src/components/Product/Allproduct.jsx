// import React from 'react'
import { useSelector } from 'react-redux';
import Card from '../card/Card';
import { useState } from 'react';
function Allproduct() {
  const productsData = useSelector((state) => state.product.product);

  const itemsPerPage = 20; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // Get the products to display on the current page
  const displayedProducts = productsData.slice(startIndex, endIndex);
  console.log(productsData);
  return (
    <div className="container mx-auto">
      <div className="text-[3rem] text-center pt-[2rem]">All products</div>
      <div className="grid justify-around grid-cols-3 gap-4 py-[3rem] items-center ">
        {displayedProducts?.length > 0 &&
          displayedProducts.map((product, index) => (
            <div key={index} className="flex justify-center ">
              <Card data={product} />
            </div>
          ))}
      </div>
      <div className="flex justify-center mt-[2rem]">
        {[1, 2, 3, 4, '...', 'next'].map((page, index) => (
          <span
            key={index}
            onClick={() =>
              page === 'next'
                ? handlePageChange(currentPage + 1)
                : handlePageChange(page)
            }
            className={`border w-[3rem] h-[3rem] bg-cyan-600 text-white flex justify-center items-center font-semibold text-xl cursor-pointer hover:text-red-400 ${
              page === '...' ? 'cursor-not-allowed' : ''
            }`}
          >
            {page}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Allproduct;
