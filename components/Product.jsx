import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

const Product = ({ product: { image, name, slug, price, color } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
          <div className="h-full w-full group-hover:opacity-75">
            <img
              src={urlFor(image && image[0])}
              width={250}
              height={250}
              className=" object-cover object-center lg:h-full lg:w-full"
            />
            <div className="flex justify-between">
            <h3 className="mt-0 text-sm text-gray-700">
              <span className="absolute inset-0" />
              {name}
            </h3>
            <p className="mt-1 text-sm font-medium text-gray-900">{price}€</p>
            </div>
          </div>
      </Link>
    </div>
  );
};

export default Product;
