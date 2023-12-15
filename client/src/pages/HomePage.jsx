import React, { useState, useEffect } from "react";

import { getProduct } from "../utils/api";
import Navbar from "../components/Navbar/Navbar";
import Carousel from "../components/Carousel";
import CardProduct from "../components/CardProduct";
import Footer from "../components/Footer";

const Homepage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getProduct();
      setProducts(result);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto flex flex-col items-center p-10">
        <Carousel />
        <h1 className="text-3xl font-semibold mt-10 text-black">
          Our Products
        </h1>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <div className="flex flex-wrap justify-center gap-10 mt-10">
            {products.map((product) => (
              <CardProduct
                key={product._id}
                name={product.productName}
                price={product.productPrice}
                image={product.productImage}
                description={product.productDescription}
                category={product.productCategory}
              />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Homepage;
