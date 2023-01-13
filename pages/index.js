import React from "react";
import { client } from "../lib/client";
import { Product, HeroBanner, Logocloud, Category } from "../components";

export default function Home({ products, bannerData }) {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <Category />
      <section aria-labelledby="trending-heading">
        <div className="mx-auto max-w-8xl py-12 sm:py-16 lg:pt-16">
          <div className="md:flex md:items-center md:justify-between">
            <h2
              id="favorites-heading"
              className="text-2xl font-bold tracking-tight text-gray-900"
            >
              Trending Products
            </h2>
            <a
              href="#"
              className="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block"
            >
              View all
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>

          <div className="mt-6 mx-12 grid grid-cols-2 gap-x-0 gap-y-10 sm:gap-x-6 md:grid-cols-3">
            {products?.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <Logocloud />
    </>
  );
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};
