import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Discount from "../Discount/Discount";
import ProductCard from "../ProductCard/productCard";
import Experience from "../Experience/Experience";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

import { addTodb, cartStore } from "../../utilities/Fakedb";

const products = [
  {
    id: 1,
    name: "Bravo Sunglasses",
    price: 100,
    oldPrice: 150,
    discount: 10,
    img: "eye-glass/image-1.png",
  },
  {
    id: 2,
    name: "Vincent Chase",
    price: 120,
    oldPrice: 150,
    discount: 10,
    img: "eye-glass/image-2.png",
  },
  {
    id: 3,
    name: "John Jacobs",
    price: 100,
    oldPrice: 150,
    discount: 10,
    img: "eye-glass/image-3.png",
  },
  {
    id: 4,
    name: "Tommy Hilfiger",
    price: 130,
    oldPrice: 150,
    discount: 10,
    img: "eye-glass/image-4.png",
  },
  {
    id: 5,
    name: "Ray Ban",
    price: 100,
    oldPrice: 150,
    discount: 10,
    img: "eye-glass/image-5.png",
  },
  {
    id: 6,
    name: "Occhiali",
    price: 110,
    oldPrice: 150,
    discount: 10,
    img: "eye-glass/image-6.png",
  },
];

const Home = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product, action) => {
    const exixts = cart.find((pd) => pd.id === product.id);
    let newCart = [];
    if (exixts) {
      const rest = cart.filter((pd) => pd.id !== product.id);
      if (action === "add") {
        exixts.quentity = exixts.quentity + 1;
      } else {
        exixts.quentity = exixts.quentity - 1;
      }
      newCart = [...rest, product].sort((a, b) => a.id - b.id);
    } else {
      product.quentity = 1;
      newCart = [...cart, product].sort((a, b) => a.id - b.id);
    }
    setCart(newCart);
    addTodb(product.id, action);
  };

  // store data in cart from localstorage
  useEffect(() => {
    const getCart = cartStore();
    const storeProduct = [];
    for (const key in getCart) {
      const selectProduct = products.find(
        (product) => product?.id === parseInt(key)
      );
      if (selectProduct) {
        const quentity = getCart[key];
        selectProduct.quentity = quentity;
        storeProduct.push(selectProduct);
      }
    }
    setCart(storeProduct);
  }, [products]);

  let quentity = 0;
  for (const product of cart) {
    if (!product.quentity) {
      product.quentity = 1;
    }
    quentity = quentity + product.quentity;
  }

  return (
    <div>
      <Navbar quentity={quentity} />
      <Banner />
      <Discount />
      <Experience />
      <ProductCard products={products} handleAddToCart={handleAddToCart} />
      <Footer />
    </div>
  );
};

export default Home;
