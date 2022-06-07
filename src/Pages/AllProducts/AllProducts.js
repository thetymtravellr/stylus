import React, { useEffect, useState } from "react";
import ProductsCard from '../../Component/ProductsCard';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="mt-12 px-6">
      <div className="mb-8">
        <h1 className="text-4xl adiHaus italic mb-2 text-black uppercase">
          All Products
        </h1>
        <p className="font-light max-w-3xl md:text-sm">
          If you’re bored with what’s in your closet, it’s time to shake things
          up with stylus new releases. Find the latest clothing, shoes and
          athletic gear designed to bring out your A game.
        </p>
      </div>
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
     {products?.map((product) => (
        <ProductsCard key={product._id} product={product}></ProductsCard>
      ))}
     </div>
    </div>
  );
};

export default AllProducts;
