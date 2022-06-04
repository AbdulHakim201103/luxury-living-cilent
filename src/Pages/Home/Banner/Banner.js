import React from "react";
import banner from "../../../assets/banner/banner.png";

const Banner = () => {
  return (
    <div className=" bg-gray-100">
      <div className="container mx-auto">
        <div className="hero py-32">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="w-6/12 sm:my-4 mx-18">
              <img src={banner} className="rounded-lg shadow-2xl" alt="" />
            </div>
            <div className="w-6/12 sm:my-4 mx-18">
              <h1 className="text-5xl font-bold">We Build Your Dream</h1>
              <p className="py-6">
                Online Easte Agency, the modern way to sell your own home, You can use Griffin
                Residential to market your property
              </p>
              <button className="btn btn-primary text-white">Booking</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
