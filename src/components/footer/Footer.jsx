import React from 'react';

function Footer() {
  return (
    <>
      <div className="text-white">
        <div className="flex justify-around  py-[4rem] bg-[#0F0F0F]">
          <div className="flex flex-col gap-4 ">
            <div className="text-2xl font-bold">Help</div>
            <ul className="font-semibold ">
              <li>Track Order</li>
              <li>FAQs</li>
              <li>Cancel Order</li>
              <li>Return Order</li>
              <li>Warranty Info</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 ">
            <div className="text-2xl font-bold">Policies</div>
            <ul className="font-semibold">
              <li>Return Policy</li>
              <li>Security</li>
              <li>Sitemap</li>
              <li>Privacy Policy</li>
              <li>T&C</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 ">
            <div className="text-2xl font-semibold">Company</div>
            <ul className="font-semibold">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Service Centres</li>
              <li>Careers</li>
              <li>Affiliates</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-around gap-6 text-white bg-black md:flex-row py-[0.7rem]">
        <div className="flex gap-4 Footer-Policy">
          <span>Privacy Policy</span>
          <span>TERMS & CONDITIONS</span>
          <span>TERMS OF USE</span>
        </div>
        <div className="flex justify-center gap-4 text-xs">
          <span>© 2023 | Cricket weapon, All Rights Reserved.</span>
          <span>|Built by @Chirag</span>
        </div>
      </div>
    </>
  );
}

export default Footer;
