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
    id: 21,
    nama: "Original",
    harga: 10000,
    gambar: "../produk/gembung/original.jpg",
  },
  {
    id: 22,
    nama: "Coklat",
    harga: 17000,
    gambar: "../produk/gembung/Coklat.JPG",
  },
  {
    id: 23,
    nama: "Choco Milo",
    harga: 16000,
    gambar: "../produk/gembung/Chococrunchy.jpg",
  },
  {
    id: 24,
    nama: "Coklat Keju",
    harga: 22000,
    gambar: "../produk/gembung/coklat atau choco keju.jpg",
  },
  {
    id: 25,
    nama: "Coklat Crunchy",
    harga: 17000,
    gambar: "../produk/gembung/Chococrunchy.jpg",
  },
  {
    id: 26,
    nama: "Coklat Crunchy Keju",
    harga: 21000,
    gambar: "../produk/gembung/coklat atau choco keju.jpg",
  },
  {
    id: 27,
    nama: "Durian",
    harga: 25000,
    gambar: "../produk/gembung/durian.jpg",
  },
  {
    id: 28,
    nama: "Durian Keju",
    harga: 28000,
    gambar: "../produk/gembung/Gembung Durian Keju.jpg",
  },
  {
    id: 29,
    nama: "Sarikaya",
    harga: 21000,
    gambar: "../produk/gembung/sarikaya.png",
  },
  {
    id: 221,
    nama: "Sarikaya Keju",
    harga: 25000,
    gambar: "../produk/gembung/Gembung Sarikaya keju.jpg",
  },
  {
    id: 222,
    nama: "Nanas",
    harga: 15000,
    gambar: "../produk/gembung/Nanas.JPG",
  },
  {
    id: 223,
    nama: "Strawberry",
    harga: 16000,
    gambar: "../produk/gembung/Gembung Stawbery.jpg",
  },
  {
    id: 224,
    nama: "Keju Susu",
    harga: 18000,
    gambar: "../produk/gembung/keju susu.jpg",
  },
  {
    id: 225,
    nama: "Green Tea Crunchy",
    harga: 18000,
    gambar: "../produk/gembung/green tea.jpg",
  },
  {
    id: 226,
    nama: "Tiramisu Crunchy",
    harga: 18000,
    gambar: "../produk/gembung/tiramisu 2.jpg",
  },
  {
    id: 227,
    nama: "Sosis Meleleh",
    harga: 34000,
    gambar: "../produk/gembung/Sosis Melelh.png",
  },
  {
    id: 228,
    nama: "Kari Meleleh",
    harga: 31000,
    gambar: "../produk/gembung/ayam kari meleleh.jpg",
  },
];

const Gembung = () => {
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = React.useState({});

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

// convert IDR
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(number);
};

  return (
    <>
      <Navbar />
      <section className="mt-12 px-5  lg:px-20 xl:px-30 2xl:px-60">
        <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold">
          <Link href="/Product" className="hover:text-gray-500">
            Product
          </Link>{" "}
          / Gembung
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6 gap-5">
          {products.map((product) => {
            const cartItem = cart.find((item) => item.id === product.id);
            return (
              <Card key={product.id}>
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
                          imageLoaded[product.id] ? "opacity-100" : "opacity-0"
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
                  {rupiah(product.harga)}
                  </Typography>
                </CardBody>
                <CardFooter className="flex justify-center items-end -mt-10">
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

export default Gembung;
