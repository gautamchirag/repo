import React from 'react';
// import shirt from './shirt.jpg';
function CategoryCard({ image, title }) {
  return (
    <div className="relative text-black w-[250px] h-[250px]  shadow-2xl hover:cursor-pointer hover:scale-110 transition ease-in-out ">
      <img src={image} className="object-cover w-full h-full rounded-xl "></img>
      <span className="absolute text-3xl font-bold bottom-4 right-4 hover:text-red-400 ">
        {title}
      </span>
    </div>
  );
}

export default CategoryCard;
