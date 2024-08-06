"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Chip,
} from "@material-tailwind/react";
import Footer from "../../components/Footer";
import Wa from "@/app/components/Wa";
import Link from "next/link";

const products = [
  {
    id: 31,
    nama: "Pia coklat",
    harga: 3000,
    gambar:
      "../produk/bakpia/Pia Coklat.jpg",
  },
  {
    id: 32,
    nama: "Pia keju",
    harga: 3000,
    gambar:
      "../produk/bakpia/Pia Keju.jpg",
  },
  {
    id: 33,
    nama: "Bakpia tiramisu",
    harga: 3000,
    gambar:
      "../produk/bakpia/Pia Tiramizu.jpg",
  },
  {
    id: 34,
    nama: "Bakpia Kacang",
    harga: 3000,
    gambar:
      "../produk/bakpia/Pia Kacang.jpg",
  },
  {
    id: 35,
    nama: "Bakpia Taro",
    harga: 3000,
    gambar:
      "../produk/bakpia/Pia Taro.jpg",
  },
  {
    id: 36,
    nama: "Paket Pia",
    harga: 3000,
    gambar:
      "../produk/bakpia/1 Paket Pia.jpg",
  },
];

const Bakpia = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cartjajan")) || [];
    setCart(savedCart);
  }, []);

  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex((p) => p.id === product.id);
    let newCart;
    if (existingProductIndex >= 0) {
      newCart = cart.map((item, index) =>
        index === existingProductIndex
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      newCart = [...cart, { ...product, quantity: 1 }];
    }
    setCart(newCart);
    localStorage.setItem("cartjajan", JSON.stringify(newCart));
  };

  const decreaseQuantity = (productId) => {
    const newCart = cart
      .map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0); // Remove item if quantity is 0
    setCart(newCart);
    localStorage.setItem("cartjajan", JSON.stringify(newCart));
  };

  const increaseQuantity = (productId) => {
    const newCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(newCart);
    localStorage.setItem("cartjajan", JSON.stringify(newCart));
  };

  return (
    <>
      <Navbar />
      <section className="mt-12 px-5 lg:px-20 xl:px-30 2xl:px-60">
      <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold">
          <Link href="/Product" className="hover:text-gray-500">
            Product
          </Link>{" "}
          / Bakpia
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 mt-6 gap-5">
          {products.map((product) => {
            const cartItem = cart.find((item) => item.id === product.id);
            return (
              <Card key={product.id} className="flex justify-between">
                <div>
                  <CardHeader floated={false}>
                    <img src={product.gambar} alt={product.nama} />
                  </CardHeader>
                  <CardBody className="text-center">
                    <Typography
                      variant="h4"
                      className="font-teko text-sm lg:text-xl"
                    >
                      {product.nama}
                    </Typography>
                    <Typography variant="h5" className="-mt-1 font-teko">
                      Rp{product.harga}
                    </Typography>
                  </CardBody>
                </div>
                <CardFooter className="flex justify-center -mt-10">
                  {cartItem ? (
                    cartItem.quantity > 0 ? (
                      <div className="flex transition ease-in-out gap-1 lg:gap-2 bg-kuning scale-[0.7] lg:scale-75 -mt-3 lg:-mt-2 -mb-3  lg:px-3 px-2 lg:mx-6 py-3 rounded-lg">
                        <Button
                          className="px-4"
                          onClick={() => decreaseQuantity(product.id)}
                        >
                          -
                        </Button>
                        <Chip
                          value={cartItem.quantity}
                          variant="ghost"
                          size="lg"
                          className="rounded-lg"
                        />
                        <Button
                          className="px-4"
                          onClick={() => increaseQuantity(product.id)}
                        >
                          +
                        </Button>
                      </div>
                    ) : (
                      <Button
                        onClick={() => addToCart(product)}
                        className="bg-kuning text-hitam font-teko text-center"
                      >
                        Tambah
                      </Button>
                    )
                  ) : (
                    <Button
                      onClick={() => addToCart(product)}
                      className="bg-kuning text-hitam font-teko text-center"
                    >
                      Tambah
                    </Button>
                  )}
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </section>
      <Footer />\
      <Wa />
    </>
  );
};

export default Bakpia;
