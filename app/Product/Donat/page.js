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
    id: 51,
    nama: "Donat Abon",
    harga: 6000,
    gambar: "../produk/donat/Donat Abon.jpg",
  },
  {
    id: 52,
    nama: "Donat Capucino",
    harga: 6000,
    gambar: "../produk/donat/Donat Capucino.jpg",
  },
  {
    id: 53,
    nama: "Donat Coklat Kacang",
    harga: 6000,
    gambar: "../produk/donat/Donat Coklat Kacang.jpg",
  },
  {
    id: 54,
    nama: "Donat Coklat",
    harga: 6000,
    gambar: "../produk/donat/Donat Coklat.jpg",
  },
  {
    id: 55,
    nama: "Donat Keju Glaze Vanila",
    harga: 6000,
    gambar: "../produk/donat/Donat Keju Glaze Vanila.jpg",
  },
  {
    id: 56,
    nama: "Donat Meses Coklat",
    harga: 6000,
    gambar: "../produk/donat/Donat Meses Coklat.jpg",
  },
  {
    id: 57,
    nama: "Donat Oreo",
    harga: 6000,
    gambar: "../produk/donat/Donat Oreo.jpg",
  },
  {
    id: 58,
    nama: "Donat Original",
    harga: 5000,
    gambar: "../produk/donat/Donat Original,.jpg",
  },
  {
    id: 59,
    nama: "Donat Stawberry",
    harga: 5000,
    gambar: "../produk/donat/Donat Stawberry,.jpg",
  },
  {
    id: 551,
    nama: "Donat Taro",
    harga: 6000,
    gambar: "../produk/donat/Donat Taro.jpg",
  },
  {
    id: 552,
    nama: "Donat Tiramisu Almond",
    harga: 6000,
    gambar: "../produk/donat/Donat Tiramisu Almond,.jpg",
  },
];

const Donat = () => {
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cartjajan")) || [];
    setCart(savedCart);
    setIsLoading(false);
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

  const [imageLoaded, setImageLoaded] = React.useState({});

  return (
    <>
      <Navbar />
      <section className="mt-12 px-5  lg:px-20 xl:px-30 2xl:px-60">
        <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold">
          <Link href="/Product" className="hover:text-gray-500">
            Product
          </Link>{" "}
          / Donat
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 mt-6 gap-5">
          {products.map((product) => {
            const cartItem = cart.find((item) => item.id === product.id);
            return (
              <Card key={product.id} className="flex justify-between">
                <div>
                  <CardHeader floated={false}>
                    {isLoading ? (
                      <div className="skeleton h-60 lg:h-64 xl:h-96"></div>
                    ) : (
                      <div className="relative">
                        {!imageLoaded[product.id] && (
                          <div className="skeleton h-60 lg:h-64 xl:h-96 absolute inset-0"></div>
                        )}
                        <img
                          src={product.gambar}
                          alt={product.nama}
                          onLoad={() =>
                            setImageLoaded((prev) => ({
                              ...prev,
                              [product.id]: true,
                            }))
                          }
                          className={`transition-opacity ${
                            imageLoaded[product.id]
                              ? "opacity-100"
                              : "opacity-0"
                          }`}
                        />
                      </div>
                    )}
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
      <Footer />
      <Wa />
    </>
  );
};

export default Donat;
