import React from "react";

import { urlFor } from "../lib/client";

const HeroBanner = ({ heroBanner }) => {
  return (
    <section
      aria-labelledby="comfort-heading"
      className="mx-auto max-w-8xl py-0.5"
    >
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={urlFor(heroBanner.image)}
            alt="heroBanner-image"
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="relative bg-gray-900 bg-opacity-50 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
          <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
            <h3>{heroBanner.midText}</h3>
            <h2
              id="comfort-heading"
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              {heroBanner.largeText1}
            </h2>
            <p className="mt-3 text-xl text-white">{heroBanner.desc}</p>        
              <div className="flex justify-center hover:opacity-75"> 
                <a href="/offers/limited-time-offers" className="mt-8 inline-block rounded-md border border-transparent bg-white py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100">
                  {heroBanner.buttonText}
                </a>      
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
